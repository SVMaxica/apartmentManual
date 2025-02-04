import './Tv.css';

export const Tv = () => {
  return (
    <div className="tv-wrapper">
      <div className="tv-info">
        <h1>Tv</h1>
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
            alt="image of tv remotes"
          />
        </div>
      </div>
    </div>
  );
};
