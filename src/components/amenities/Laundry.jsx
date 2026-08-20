import './Laundry.css';
import { AmenityPage } from './AmenityPage';

export const Laundry = () => {
  return (
    <AmenityPage
      title="Laundry"
      wrapperClassName="laundry-wrapper"
      infoClassName="laundry-info"
    >
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
        <p> IMPORTANT </p>
        <ul>
          <li>
            You might see that there already is one booked timeslot for this
            apartment,<br></br> but that one is reserved for the cleaners so
            you can NOT use that one,<br></br> also be careful so you do NOT
            cancel that timespot by misstake.
          </li>
          <li>Do not forget your booked timeslot</li>
          <li>
            If you need to cancel your timeslot you , follow the same steps as
            above.
          </li>
        </ul>

        <img
          className="remotes-img"
          src="images/screen.jpg"
          alt="Laundry booking touchscreen showing available time slots in green"
        />
        <img
          className="remotes-img"
          src="images/laundrybooking.jpg"
          alt="Step-by-step view of selecting and confirming a laundry time slot"
        />
        <img
          className="garage-img"
          src="images/garagebild.png"
          alt="garagemap"
        />
      </div>
    </AmenityPage>
  );
};
