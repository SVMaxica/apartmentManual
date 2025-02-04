/* eslint-disable react/prop-types */
import { useState } from 'react';
import './App.css';
import { Header } from './components/layout/Header';
import { IconsNavbar } from './components/layout/IconsNavbar';
import { CheckIn } from './components/amenities/CheckIn';
import { Houserules } from './components/amenities/Houserules';
import { CheckOut } from './components/amenities/CheckOut';
import { Footer } from './components/layout/Footer';
import { Pool } from './components/amenities/Pool';
import { Tennis } from './components/amenities/Tennis';
import { Garbage } from './components/amenities/Garbage';
import { StarterPack } from './components/amenities/StarterPack';
import { About } from './components/about/About';
import { GroceryStore } from './components/amenities/GroceryStore';
import { Tv } from './components/amenities/Tv';
import { Charge } from './components/amenities/Charge';
import { Balcony } from './components/amenities/Balcony';
import { Dishwasher } from './components/amenities/Dishwasher';
import { Laundry } from './components/amenities/Laundry';
import { Wifi } from './components/amenities/Wifi';
import { Transportation } from './components/amenities/Transportation';
import { Barbeque } from './components/amenities/Barbeque';

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
      {activeComponent === 'TV' && <Tv />}
      {activeComponent === 'Charge' && <Charge />}
      {activeComponent === 'Balcony' && <Balcony />}
      {activeComponent === 'Dishwasher' && <Dishwasher />}
      {activeComponent === 'Laundry' && <Laundry />}
      {activeComponent === 'Wifi' && <Wifi />}
      {activeComponent === 'Transportation' && <Transportation />}
      {activeComponent === 'Barbeque' && <Barbeque />}
      <Footer />
    </div>
  );
};
