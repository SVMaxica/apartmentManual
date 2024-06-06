/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
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
import { About } from './components/About/About';
import { GroceryStore } from './components/GroceryStore/GroceryStore';
import { Tv } from './components/Tv/Tv';

export const App = () => {
  const [activeComponent, setActiveComponent] = useState('');

  return (
    <div className="app">
      <div className="top-background"></div>
      <Header />
      <About />
      <IconsNavbar setActiveComponent={setActiveComponent} />
      {activeComponent === 'CheckIn' && <CheckIn />}
      {activeComponent === 'CheckOut' && (
        <CheckOut setActiveComponent={setActiveComponent} />
      )}
      {activeComponent === 'Houserules' && <Houserules />}
      {activeComponent === 'Garbage' && <Garbage />}
      {activeComponent === 'Tennis' && <Tennis />}
      {activeComponent === 'Pool' && <Pool />}
      {activeComponent === 'StarterPack' && <StarterPack />}
      {activeComponent === 'GroceryStores' && <GroceryStore />}
      <Tv />
      <Footer />
    </div>
  );
};
