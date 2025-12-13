/* eslint-disable react/prop-types */
import './CheckOut.css';

export const CheckOut = ({ setActiveComponent }) => {
  return (
    <div className="check-out-wrapper">
      <div
        className="check-out"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        <h1>CheckOut</h1>
        <ul>
          <li>
            The latest time for checkout is at <b>10:00</b> on the day of
            departure, and the supervisor will arrive shortly thereafter.
          </li>

          <li>
            If anything has been broken during your stay, we would appreciate it
            if you could<br></br>
            <a href="mailto:visbysnack@gmail.com" className="mail-us-link">
              Mail us
            </a>
          </li>

          <li>
            Empty the fridge and freezer and dispose of all your leftover food.
          </li>

          <li>
            Dispose of your trash in the garbage room, you will find directions
            to the garbage room<br></br>
            <span
              className="link"
              onClick={() => setActiveComponent('Garbage')}
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                // color: "black",
              }}
            >
              Here
            </span>
          </li>

          <li>
            Place all used towels in a pile on the bathroom floor or in the
            laundry basket.
          </li>

          <li>
            Wash and dry all the dishes after you and put them back in the
            cabinets where they belong.
          </li>

          <li>
            If you have moved anything, please put it back where it belongs.
          </li>

          <li>
            Place the outdoor cushions in the chairs under the roof and strap
            the folded umbrellas, close the balcony door.
          </li>

          <li>Double-check to ensure you haven’t forgotten anything</li>
          <li>
            {' '}
            DO N0T FORGET to return the key tag to the keybox and the extra key
            tag should be placed on the keyhook next to the door when you leave.
          </li>
          <li>
            Feel free to leave feedback{' '}
            <a href="mailto:visbysnack@gmail.com" className="mail-us-link">
              Here
            </a>
          </li>

          <li>
            We are very generous in giving our guests 5-star ratings and hope
            you are too, as good ratings help us immensely.
          </li>

          <p>
            Lastly, we want to thank you for choosing to stay with us in
            fantastic Snäck! And we hope to welcome you back next time you visit
            Gotland! Have a safe trip!
          </p>

          <p>Best regards Sandra and Pär</p>
        </ul>
      </div>
    </div>
  );
};
