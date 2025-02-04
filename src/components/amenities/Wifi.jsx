import './Wifi.css';

export const Wifi = () => {
  return (
    <div className="wifi-wrapper">
      <div className="wifi-info">
        <h1>Wifi network</h1>
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
      </div>
    </div>
  );
};
