import React from "react";
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Registration from "./components/Registration";
import MockTest from "./components/MockTest";
import JobOpenings from "./components/JobOpenings";
import JobApplication from "./components/JobApplication";
import NotifyStatusComponents from "./components/NotifyStatusComponents.js";


function App() {
  document.body.style.backgroundColor='#000'
  return (
    <div>
    <Router>
      <Routes>
        
        <Route path="/" element={<Login ></Login>} />
        <Route path="/home" element={<Home ></Home>} />
        <Route path="/registration" element={<Registration ></Registration>} />
        <Route path="/mocktest" element={<MockTest ></MockTest>} />
        <Route path="/jobopenings" element={<JobOpenings ></JobOpenings>} />
        <Route path="/jobapplication" element={<JobApplication ></JobApplication>} />
        <Route path="/notifystatuscomponents" element={<NotifyStatusComponents ></NotifyStatusComponents>} />
        


      </Routes>
    </Router>
    </div>
    
  )
};

export default App;
