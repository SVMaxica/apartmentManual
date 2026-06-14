/* eslint-disable react/prop-types */
import './Tennis.css';

export const Tennis = () => {
  return (
    <div className="tennis-wrapper">
      <div className="tennis">
        <h1>Tennis courts</h1>
        <p>
          We have two Tennis courts and one of the courts also has a basketball
          hoop. If you want to book a tennis court you can do so by writing the
          apartment number in the binder in the mailbox next to the blue tennis
          court.
          <br />
          <br />
          In the hallway of the apartment, you will find three tennis rackets
          and a few tennis balls that you are welcome to borrow during your
          stay. We kindly ask you to return them to the apartment when you are
          finished using them so that future guests can enjoy them as well.
          <br />
          <br />
          These are the rules for using the tennis courts:
        </p>
        <ul>
          <li>
            If you are using a free court always give priority to the person who
            booked the court.
          </li>
          <li>Dont leave any garbage or other stuff behind when you leave</li>
          <li>The courts are open between 7:00-21:00 every day</li>
        </ul>
        <img className="tennis-img" src="images/tennis-img.jpg" alt="Tennis" />
        <img
          className="tenniscourt-img"
          src="images/tennisbanor.jpg"
          alt="Tenniscourts"
        />
      </div>
    </div>
  );
};
