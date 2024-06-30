import './IconsNavbar.css';
import checkInIcon from '../../assets/lock-open.svg';
import checkOutIcon from '../../assets/checkout-icon.svg';
import houseRulesIcon from '../../assets/houserules-icon.svg';
import garbageIcon from '../../assets/recycle-bin-icon.svg';
import starterIcon from '../../assets/gift.svg';
import poolIcon from '../../assets/poolIcon.svg';
import tennisIcon from '../../assets/tennis-icon.svg';
import groceryIcon from '../../assets/grocery-trolley.svg';
import tvIcon from '../../assets/television-icon.svg';
import chargeIcon from '../../assets/charge.svg';
import washerIcon from '../../assets/washing-machine-icon.svg';
import dishwasherIcon from '../../assets/dishwasher.svg';
import balconyIcon from '../../assets/bacolony.svg';
import wifiIcon from '../../assets/wifi.svg';
import bbqIcon from '../../assets/bbqIcon.svg';
import transportIcon from '../../assets/transportIcon.svg';

// eslint-disable-next-line react/prop-types
export const IconsNavbar = ({ setActiveComponent }) => {
  return (
    <nav className="icon-navbar">
      <h2>Apartment Manual</h2>
      <div className="icons-wrapper">
        <div
          className="icon-container"
          onClick={() => setActiveComponent('Houserules')}
        >
          <img src={houseRulesIcon} alt="House Rules" className="svg-icon" />
          <p className="icon-text">
            <b>House Rules</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent('CheckIn')}
        >
          <img src={checkInIcon} alt="Check In" className="svg-icon" />
          <p className="icon-text">
            <b>Check In</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent('CheckOut')}
        >
          <img src={checkOutIcon} alt="Check Out" className="svg-icon" />
          <p className="icon-text">
            <b>Check Out</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('StarterPack')}
        >
          <img src={starterIcon} alt="Starter pack" className="svg-icon" />
          <p className="icon-text">
            <b>Starter Pack</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent('Balcony')}
        >
          <img
            src={balconyIcon}
            alt="Balcony instructions"
            className="svg-icon"
          />
          <p className="icon-text">
            <b>Balcony</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('Barbeque')}
        >
          <img src={bbqIcon} alt="Barbecue instructions" className="svg-icon" />
          <p className="icon-text">
            <b>Barbeque</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('Charge')}
        >
          <img
            src={chargeIcon}
            alt="Car charging instructions"
            className="svg-icon"
          />
          <p className="icon-text">
            <b>Charge</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent('Dishwasher')}
        >
          <img
            src={dishwasherIcon}
            alt="Dishwasher instructions"
            className="svg-icon"
          />
          <p className="icon-text">
            <b>Dishwash</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('Garbage')}
        >
          <img src={garbageIcon} alt="Garbage" className="svg-icon" />
          <p className="icon-text">
            <b>Garbage</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('GroceryStores')}
        >
          <img src={groceryIcon} alt="Grocery stores" className="svg-icon" />
          <p className="icon-text">
            <b>Grocery Stores</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent('Laundry')}
        >
          <img
            src={washerIcon}
            alt="Laundry instructions"
            className="svg-icon"
          />
          <p className="icon-text">
            <b>Laundry</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent('Pool')}
        >
          <img src={poolIcon} alt="pool" className="svg-icon" />
          <p className="icon-text">
            <b>Pool</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('Tennis')}
        >
          <img src={tennisIcon} alt="Tennis" className="svg-icon" />
          <p className="icon-text">
            <b>Tennis</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('Transportation')}
        >
          <img
            src={transportIcon}
            alt="Transportation instructions"
            className="svg-icon"
          />
          <p className="icon-text">
            <b>Transport</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent('TV')}
        >
          <img src={tvIcon} alt="TV instructions" className="svg-icon" />
          <p className="icon-text">
            <b>TV</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent('Wifi')}
        >
          <img src={wifiIcon} alt="Wifi instructions" className="svg-icon" />
          <p className="icon-text">
            <b>Wifi</b>
          </p>
        </div>
        {/* Similarly for other icons */}
      </div>
    </nav>
  );
};
