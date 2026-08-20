import './Tv.css';
import { AmenityPage } from './AmenityPage';

export const Tv = () => {
  return (
    <AmenityPage title="Tv" wrapperClassName="tv-wrapper" infoClassName="tv-info">
      <div className="tv-instructions">
        <p>To start the tv:</p>
        <ol>
          <li>Use the small remote and push the On/Off button</li>
          <li>Use the big remote and push the On/Off button</li>
          <li>
            Now you can use the big remote to change channels and volume se
            image below
          </li>
        </ol>
        <p>To turn off the tv:</p>
        <ol>
          <li>Use the small remote and push the On/Off button</li>
          <li>Use the big remote and push the On/Off button</li>
        </ol>
        <img
          className="remotes-img"
          src="images/tvremotes.png"
          alt="TV remote controls"
        />
      </div>
    </AmenityPage>
  );
};
