import './IconsNavbar.css';
import { AMENITIES } from '../../amenitiesConfig';

// eslint-disable-next-line react/prop-types
export const IconsNavbar = ({ setActiveComponent }) => {
  return (
    <nav className="icon-navbar" aria-label="Amenities">
      <h2>Apartment Manual</h2>
      <div className="icons-wrapper">
        {AMENITIES.map(({ key, label, icon }) => (
          <button
            key={key}
            type="button"
            className="icon-container"
            onClick={() => setActiveComponent(key)}
          >
            <img src={icon} alt="" className="svg-icon" aria-hidden="true" />
            <p className="icon-text">
              <b>{label}</b>
            </p>
          </button>
        ))}
      </div>
    </nav>
  );
};
