from flask import Flask
from flask_cors import CORS # comm in deployment
import socket
import requests
from requests.auth import HTTPBasicAuth
HEADER = 64
PORT = 5050
FORMAT = 'utf-8'
DISCONNECT_MESSAGE = "!DISCONNECT"
SERVER = '192.168.86.130'  # Run server first
ADDR = (SERVER, PORT)

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(ADDR)

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

