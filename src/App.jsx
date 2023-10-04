/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'; 
import { IconsNavbar } from './components/IconsNavbar/IconsNavbar';
import { CheckIn } from './components/CheckIn/CheckIn';
import { Houserules } from './components/Houserules/Houserules';
import { CheckOut } from './components/CheckOut/CheckOut';
import { Footer } from './components/Footer/Footer';
import { Pool } from './components/Pool/Pool';
import { Tennis } from './components/Tennis/Tennis';
import { Garbage } from './components/Garbage/Garbage';
import { StarterPack } from './components/StarterPack/StarterPack';

export const App = () => {

  const [activeComponent, setActiveComponent] = useState('');

  return (
    <div className="app">
      <div className="top-background"></div> 
      <Header /> 
      <IconsNavbar setActiveComponent={setActiveComponent} />
      {activeComponent === 'CheckIn' && <CheckIn />}
      {activeComponent === 'CheckOut' && <CheckOut />}
      {activeComponent === 'Houserules' && <Houserules />}
      <CheckIn />
      <Houserules />
      <Garbage />
      <StarterPack />
      <Pool />
      <Tennis />
      <CheckOut />
      <Footer />
    </div>
    
  );
}
