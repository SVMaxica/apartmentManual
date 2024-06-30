import './Transportation.css';

export const Transportation = () => {
  return (
    <div className="transportation-wrapper">
      <div className="transportation-info">
        <h1>Transportation alternatives</h1>
        <div className="transportation-instructions">
          <p>
            Visby is nearby and from Snäck you can walk, bike or travel by car
            or bus very easily. <br></br> We have Strandpromenaden an amazing
            walkway next to the sea that takes you all the way to the city wall.
            Here are some useful links if you want to rent a bike, car or go by
            bus or taxi.
          </p>
          <ol>
            <li>
              Rent a bike at<br></br>
              <a
                href="https://gotlandscykeluthyrning.com/"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Gotlands cykeluthyrning
              </a>
              <a
                href="https://snackcamping.se/"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Snäck Camping
              </a>
            </li>
            <li>
              We have the bustop for bus nr 4 just outside the building and the
              busstop for bus nr 61 is up on the Lummelundavägen wich is also
              close by. <br></br>You can find the timetables at<br></br>
              <a
                href="https://gotland.se/trafik-gator-och-parker/kollektivtrafik/busstidtabeller-och-linjekartor"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Region Gotland
              </a>
            </li>
            <li>
              You can find taxi at <br></br>
              <a
                href="https://www.taxigotland.se/"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Taxi Gotland
              </a>
            </li>
            <li>
              You can rent cars at <br></br>
              <a
                href="https://avis.se/"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Avis
              </a>
              <a
                href="https://www.circlek.se/biluthyrning?utm_source=sa360&utm_medium=paid-search&utm_campaign=ck%7Ceu%7Cse%7Csr%7Cna%7Cmay%7Cbp25%7Csearch-bp25%7Cci&gad_source=1&gclid=CjwKCAjwhIS0BhBqEiwADAUhc_SfRXX2ALk_AuD65R2NAYt3lrgv7Mb0ZFllpAPDopjwEhL0OLR4rRoCaXYQAvD_BwE&gclsrc=aw.ds"
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Circle K
              </a>
            </li>
          </ol>
          <img
            className="remotes-img"
            src="images/rentabike.jpg"
            alt="image of tv remotes"
          />
        </div>
      </div>
    </div>
  );
};
