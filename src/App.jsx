/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'; 
import { IconsNavbar } from './components/IconsNavbar/IconsNavbar';
import { CheckIn } from './components/CheckIn/CheckIn';
import { Houserules } from './components/Houserules/Houserules';
import { CheckOut } from './components/CheckOut/CheckOut';
import { Footer } from './components/Footer/Footer';


export const App = () => {
  return (
    <div className="app">
      <div className="top-background"></div> 
      <Header /> 
      <IconsNavbar />
      <CheckIn />
      <Houserules />
      <CheckOut />
      <Footer />
    </div>
    
  );
}
