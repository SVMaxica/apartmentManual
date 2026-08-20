import './Houserules.css';
import { AmenityPage } from './AmenityPage';

export const Houserules = () => {
  return (
    <AmenityPage
      title="House rules!"
      wrapperClassName="house-rules-wrapper"
      infoClassName="house-rules"
      infoStyle={{ fontFamily: 'Quicksand, sans-serif' }}
    >
      <ul>
        <li>
          <b>No Smoking </b>Allowed!
        </li>
        <li>
          <b>No Pets</b> Allowed!
        </li>
        <li>
          <b>No Illegal Substances</b> Allowed!
        </li>
        <li>
          <b>No Parties</b> Allowed!
        </li>
        <li>
          Only toiletpaper, urine and feces are allowed to flush down in the
          toilet.<br></br>Also use as little toiletpaper as you can and flush
          the toilet once or twice extra every time you use it.
        </li>
        <li>
          Only the guests registered on the booking are allowed to stay in the
          apartment.
        </li>
        <li>
          Between 21:00 in the evening and 08:00, there should be silence in
          the house.
        </li>
        <li>
          If something gets lost or broken, a replacement cost may apply. We
          kindly ask you to handle everything with care, and we truly
          appreciate your understanding.
        </li>
      </ul>
    </AmenityPage>
  );
};
