import React from 'react';
import { Routes, Route } from "react-router-dom";
import CreateAppointmentSlot from './pages/createAppointmentSlot';
import AppointmentSlotsListing from './pages/appointmentSlotsListing';
import Home from './pages/home';
import './App.css';



function App() {
  return (
    <Routes>
        <Route path="/" element={<CreateAppointmentSlot />} />
        <Route path='/list' element={<AppointmentSlotsListing />} />
        <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App;
