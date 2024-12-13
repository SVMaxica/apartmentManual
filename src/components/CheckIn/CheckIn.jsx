/* eslint-disable react/prop-types */
import './CheckIn.css';

export const CheckIn = () => {
  return (
    <div className="check-in-wrapper">
      <div className="check-in">
        <h1>Check In</h1>
        {/* <p className="check-in-text">
          Check-in is from <b>15:00</b> at the earliest (Sometimes we allow
          earlier check-in, but this is only if the apartment has not been
          booked the day before, and only by agreement)<br></br>
          <br></br>
          When you arrive at <b>Snäckgärdsvägen 56</b>, you will pick up the key
          tag to the house entrence next to the big entrance in{' '}
          <b>keybox nr 3</b> located to the left of the entrance (see picture).
          The code for the box you have received in the check-in message.
          <br></br>
          To enter the appartment you use the 6 digit code to the yale smartlock
          that you got in a seperate message when you booked the stay. That code
          will only be active during you stay.
          <img className="keybox-img" src="images/keybox.jpg" alt="keybox" />
          <br></br>
          When you collected keytag in the box you drive to the north short side
          of the house and scan the blue tag, then drive into the garage. You
          are allowed to park in the 7th spot on the right side; it is marked
          with no. <b>112</b>
          <img
            className="garage-img"
            src="images/garagebild.png"
            alt="garage"
          />
          <br></br>
          <br></br>
          After that, walk through the garage to the grey door by the metal
          railing and scan the blue tag, the door will then open, and you can
          enter the corridor and take the elevator to the first floor or go up
          one floor by the stairs. Continue past the elevators and turn left at
          the mailboxes, go through the glass door into the corridor all the way
          to door no. <b>112</b>.<br></br>
          <br></br>
          Insert the key card in the door and open. Remember to remove the key
          card from the door when you enter the apartment.
        </p>
        <img
          className="keybox-img"
          src="images/taglocks.jpg"
          alt="Image on How to use tags"
        />
        <p>
          There is also an extra set of keys in the apartment next to the door
          that you can use.
        </p> */}
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
          To access the apartment, use the 6-digit code for the Yale smart lock.
          This code was sent in a separate message when you booked your stay.
          The code is only active during your stay.
          <br />
          <br />
        </p>
        <img
          className="keybox-img"
          src="images/taglocks.jpg"
          alt="How to use tags"
        />
        <p>
          Please note that all entrances to the building are self-locking, so
          make sure to always carry your key tag with you to re-enter the house.
          For your convenience, an additional set of keys is provided in the
          apartment, located next to the door.
        </p>
      </div>
    </div>
  );
};
