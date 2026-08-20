import './Wifi.css';
import { AmenityPage } from './AmenityPage';

export const Wifi = () => {
  return (
    <AmenityPage
      title="Wifi network"
      wrapperClassName="wifi-wrapper"
      infoClassName="wifi-info"
    >
      <div className="wifi-instructions">
        <p>To connect to the wifi:</p>
        <ol>
          <li>
            Choose the Wifi network called <b>GuestNet 112</b>
          </li>
          <li>
            The password is <b>Guest_112</b>
          </li>
        </ol>
      </div>
    </AmenityPage>
  );
};
