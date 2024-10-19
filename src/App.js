import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './compontents/Navbar'; 
import Hhome from './compontents/Hhome' ;
import Login from './compontents/Login'; 
import Signup from './compontents/Singup';
import Footer from './compontents/Footer';  



function App() {
  return (
    <Router>
      <div >
        <NavBar />
        <Routes>
          <Route path="/Hhome"  element={<Hhome/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


