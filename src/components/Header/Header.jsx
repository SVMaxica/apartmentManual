
import './Header.css';
import headerImage from '/Users/sandragustafsson/Desktop/lägenhetsmanual/apartmentManual/src/assets/stone-1995051_1920.jpg';

export const Header = () => {
    return (
        <header className="header" style={{ backgroundImage: `url(${headerImage})` }}>
      { /* <img src="src/assets/stone-1995051_1920.jpg" alt="ocean img" />*/}
            <h1>Header</h1>
        </header>
    );
}