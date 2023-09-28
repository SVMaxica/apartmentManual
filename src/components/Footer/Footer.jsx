/* eslint-disable react/prop-types */
import './Footer.css';

export const Footer = () => {
    return (
        <footer className='footer' style={{ fontFamily: 'Quicksand, sans-serif' }}>
           <h4> Snäckgärdsvägen 56, 62141 Visby</h4>
           <a href='visbysnack@gmail.com' className='email-link'>visbysnack@gmail.com</a>
        </footer>
    );
}