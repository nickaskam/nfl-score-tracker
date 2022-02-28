from flask import Flask
from flask_cors import CORS # comm in deployment
import socket
import requests
from requests.auth import HTTPBasicAuth
HEADER = 64
PORT = 5050
PORT_2 = 5678
MSG_SIZE = 2048
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = "!DISCONNECT"
SERVER = '192.168.86.130'  # Run server first
ADDR = (SERVER, PORT)
ADDR_2 = (SERVER, PORT_2)

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(ADDR)

client2 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client2.connect(ADDR_2)

app = Flask(__name__)

CORS(app) # comm in deployment

@app.route("/image/<nflLogo>")
def get_image(nflLogo):
    logoLink = "https://us-central1-osu-project-342203.cloudfunctions.net/image-generator?query=" + nflLogo + "+nfl&size=small"
    image = requests.get(logoLink, auth = HTTPBasicAuth('admin_T42', 'admin_T42'))
    text_to_split = image.text.split("\"")
    return text_to_split[3]

def send_request(nflTeam):
    msg = nflTeam.encode(FORMAT)
    client.send(msg)
    paragraph = client.recv(2048).decode(FORMAT)
    return paragraph

@app.route("/teamdata/<nflTeam>")
def get_team_info(nflTeam):
    nflTeamCleaned = nflTeam.replace("+", " ")
    new_paragraph = send_request(nflTeamCleaned)
    return new_paragraph

def send_map_request(coordinates):
    message = coordinates.encode(FORMAT)
    msg_len = len(coordinates)
    send_length = str(msg_len).encode(FORMAT)
    send_length += b' ' * (MSG_SIZE - len(send_length))
    client2.send(send_length)
    client2.send(message)
    img_url = client2.recv(MSG_SIZE).decode(FORMAT)
    return img_url

@app.route("/homeMap/<coordinates>")
def get_team_map(coordinates):
    new_map = send_map_request(coordinates)
    return new_map

