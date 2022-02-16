import './App.css';
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import GameMatchups from "./pages/GameMatchups";
import OneGameMatchup from "./pages/OneGameMatchup";

function App() {
  const [team1, team2] = useState()

  return (
    <>
      <Router>
        <Navigation />
        <div className="app-body">
            <Routes>
              <Route exact path='/' element={<HomePage/>}></Route>
              <Route path='/gameMatchups/:team1/:team2' element={<GameMatchups />}></Route>
              <Route path='/oneGameMatchup' element={<OneGameMatchup team1="Dallas Cowboys" team2="Seattle Seahawks" />}></Route>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
