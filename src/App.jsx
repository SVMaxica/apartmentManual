import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'; // Named import
import { IconsNavbar } from './components/IconsNavbar/IconsNavbar';
import { CheckIn } from './components/CheckIn/CheckIn';
import { CheckOut } from './components/CheckOut/CheckOut';
import { Footer } from './components/Footer/Footer';


export const App = () => {
  return (
      <div className="app">
      <div className="top-background"></div> {/* Div with background image */}
      <Header /> {/* Using Header componentng */}
      <IconsNavbar />
      <CheckIn />
      <CheckOut />
      <Footer />
    </div>
  );
}
