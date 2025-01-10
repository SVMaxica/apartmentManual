/* eslint-disable react/prop-types */
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer" style={{ fontFamily: 'Quicksand, sans-serif' }}>
      <div className="copywright">
        <p>© 2024 Sandra Gustafsson All Rights Reserved.</p>
      </div>
      <div className="contact">
        <h6> Snäckgärdsvägen 56, 62141 Visby</h6>
        <a href="mailto:visbysnack@gmail.com" className="email-link">
          Contact
        </a>
      </div>
    </footer>
  );
};
