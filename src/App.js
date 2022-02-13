import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Router>
        <div className="app-body">
            <Routes>
              <Route exact path='/' element={< HomePage name="nick" />}></Route>
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
