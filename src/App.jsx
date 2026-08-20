import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Header } from './components/layout/Header';
import { IconsNavbar } from './components/layout/IconsNavbar';
import { About } from './components/About/About';
import { Footer } from './components/layout/Footer';
import { AMENITIES } from './amenitiesConfig';

export const App = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    if (activeComponent && contentRef.current) {
      contentRef.current.focus();
      contentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeComponent]);

  const active = AMENITIES.find((amenity) => amenity.key === activeComponent);
  const ActiveComponent = active?.Component;

  return (
    <div className="app">
      <div className="top-background"></div>
      <Header />
      <main>
        <About />
        <IconsNavbar setActiveComponent={setActiveComponent} />
        <div ref={contentRef} tabIndex={-1} className="amenity-content">
          {ActiveComponent && (
            <ActiveComponent setActiveComponent={setActiveComponent} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};
