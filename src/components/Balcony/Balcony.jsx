import './Balcony.css';

export const Balcony = () => {
  return (
    <div className="balcony-wrapper">
      <div className="balcony-info">
        <h1>Balcony</h1>
        <div className="balcony-instructions">
          <p>To open and close balcony doors</p>
          <ul>
            <li>Push the button and pull handles up on both sides</li>
            <li>Push the door outwards a bit and then slide it to the left.</li>
            <li>To clode the door just reverse the steps above.</li>
          </ul>
          <img
            className="remotes-img"
            src="images/handles.jpg"
            alt="image of tv remotes"
          />
          <img
            className="remotes-img"
            src="images/balconydoor.jpg"
            alt="image of tv remotes"
          />
          <p>Other things to know</p>
          <ul>
            <li>
              The umbrellas can be used when there is no wind or very light
              vind, remove the straps and unfold them.<br></br>fold and strap
              them when not in use.
            </li>
            <li>
              The outdoor cushions should be stored in the black chairs under
              the roof when not in use or when its raining so they dont get wet.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
