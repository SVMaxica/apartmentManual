import './Laundry.css';

export const Laundry = () => {
  return (
    <div className="laundry-wrapper">
      <div className="laundry-info">
        <h1>Laundry</h1>
        <div className="laundry-instructions">
          <p>
            We have a shared laundryroom in the building, that you can book from
            the screen on floor 1
          </p>
          <ol>
            <li>Scan the tag on the screen</li>
            <li>
              The avilable spots are green. Choose a day and time to wash by
              clicking the green button
            </li>
            <li>
              Then log out by clicking the Log Out Button. <br></br>Now you have
              successfully booked a timeslot, and you use the tag to open door
              to the laundryroom in the garage when your time starts. <br></br>
              The tag only work during your timeslot.
            </li>
          </ol>
          <p> IMPORTANT DO NOT FORGET YOUR BOOKED TIMESLOT!</p>
          <p>You can also cancel your timeslot by following the same steps.</p>
          <img
            className="remotes-img"
            src="images/screen.jpg"
            alt="image of the booking screen"
          />
          <img
            className="remotes-img"
            src="images/laundrybooking.jpg"
            alt="image of the booking screen"
          />
          <img
            className="garage-img"
            src="images/garagebild.png"
            alt="garagemap"
          />
        </div>
      </div>
    </div>
  );
};
