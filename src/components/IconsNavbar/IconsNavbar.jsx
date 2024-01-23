import "./IconsNavbar.css";
import checkInIcon from "../../assets/checkin-icon.svg";
import checkOutIcon from "../../assets/checkout-icon.svg";
import houseRulesIcon from "../../assets/houserules-icon.svg";
import garbageIcon from "../../assets/recycle-bin-icon.svg";
import starterIcon from "../../assets/asterisk-icon.svg";
import poolIcon from "../../assets/pool-icon.svg";
import tennisIcon from "../../assets/tennis-icon.svg";

// eslint-disable-next-line react/prop-types
export const IconsNavbar = ({ setActiveComponent }) => {
  return (
    <nav className="icon-navbar">
      <h2>Instructions</h2>
      <div className="icons-wrapper">
        <div
          className="icon-container"
          onClick={() => setActiveComponent("CheckIn")}
        >
          <img src={checkInIcon} alt="Check In" className="svg-icon" />
          <p className="icon-text">
            <b>Check In</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent("CheckOut")}
        >
          <img src={checkOutIcon} alt="Check Out" className="svg-icon" />
          <p className="icon-text">
            <b>Check Out</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent("Houserules")}
        >
          <img src={houseRulesIcon} alt="House Rules" className="svg-icon" />
          <p className="icon-text">
            <b>House Rules</b>
          </p>
        </div>

        <div
          className="icon-container"
          onClick={() => setActiveComponent("Garbage")}
        >
          <img src={garbageIcon} alt="Garbage" className="svg-icon" />
          <p className="icon-text">
            <b>Garbage</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent("StarterPack")}
        >
          <img src={starterIcon} alt="Starter pack" className="svg-icon" />
          <p className="icon-text">
            <b>Starter Pack</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent("Pool")}
        >
          <img src={poolIcon} alt="pool" className="svg-icon" />
          <p className="icon-text">
            <b>Pool</b>
          </p>
        </div>
        <div
          className="icon-container"
          onClick={() => setActiveComponent("Tennis")}
        >
          <img src={tennisIcon} alt="Tennis" className="svg-icon" />
          <p className="icon-text">
            <b>Tennis</b>
          </p>
        </div>
        {/* Similarly for other icons */}
      </div>
    </nav>
  );
};
