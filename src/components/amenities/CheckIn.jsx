/* eslint-disable react/prop-types */
import './CheckIn.css';

export const CheckIn = () => {
  return (
    <div className="check-in-wrapper">
      <div className="check-in">
        <h1>Check In</h1>
        <p className="check-in-text">
          <b>Check-in Information:</b>
          <br />
          <br />
          Check-in is from <b>15:00</b> at the earliest.
          <br />
          <br />
          When you arrive at <b>Snäckgärdsvägen 56</b>, pick up the key tag for
          the house entrance from <b>keybox no. 3</b>, located to the left of
          the main entrance (see picture). The code for the keybox was provided
          in your check-in message.
          <br />
          <img className="keybox-img" src="images/keybox.jpg" alt="keybox" />
          <br />
          <br />
          After collecting the key tag, drive to the north short side of the
          house. Scan the blue key tag to open the garage gate. You may park in
          spot no. <b>112</b>, the 7th spot on the right side (see picture).
          <br />
          <img
            className="garage-img"
            src="images/garagebild.png"
            alt="garage"
          />
          <br />
          <br />
          Once parked, walk through the garage to the grey door by the metal
          railing. Scan the blue key tag to unlock the door. You can then enter
          the corridor and either take the elevator to the first floor or use
          the stairs. Once on the first floor, pass the elevators, turn left at
          the mailboxes, and go through the glass door into the corridor. Walk
          to door no. <b>112</b>.<br />
          <br />
          <img
            className="keybox-img"
            src="images/taglocks.jpg"
            alt="How to use tags"
          />
          To access the apartment, use the 6-digit code for the Yale smart lock.
          This code was sent in a separate message when you booked your stay.
          The code is only active during your stay.
          <br />
          <br />
        </p>
        <img
          className="yaleKeypad-img"
          src="images/yaleKeypad.jpg"
          alt="How to open apartmentdoor"
        />
        <p>
          Please note that all entrances are self-locking, so make sure to
          always carry your key tag with you to re-enter the house. For your
          convenience, an additional set of keys is provided in the apartment,
          located next to the door.
        </p>
      </div>
    </div>
  );
};
