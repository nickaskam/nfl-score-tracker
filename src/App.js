import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import GameMatchups from "./pages/GameMatchups";
import OneGameMatchup from "./pages/OneGameMatchup";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div className="app-body">
            <Routes>
              <Route exact path='/' element={<HomePage/>}></Route>
              <Route path='/gameMatchups/:team1/:team2' element={<GameMatchups />}></Route>
              <Route path='/oneGameMatchup/:gameid' element={<OneGameMatchup />}></Route>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
