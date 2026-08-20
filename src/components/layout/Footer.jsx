import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="copywright">
        <p>© 2024 Sandra Gustafsson All Rights Reserved.</p>
      </div>
      <div className="contact">
        <p className="footer-address">Snäckgärdsvägen 56, 62141 Visby</p>
        <a href="mailto:visbysnack@gmail.com" className="email-link">
          Contact
        </a>
      </div>
    </footer>
  );
};
