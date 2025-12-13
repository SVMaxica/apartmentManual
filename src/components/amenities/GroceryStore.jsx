import './GroceryStore.css';
import karta from '../../assets/grocery-karta.png';

export const GroceryStore = () => {
  return (
    <div className="grocery-wrapper">
      <div className="grocery-store">
        <h1>Grocery stores</h1>
        <p>
          Nearby grocery stores were you can buy your food and supplies for your
          stay!
        </p>
        <ul>
          <li>
            <a
              href="https://www.ica.se/butiker/nara/gotland/ica-nara-torgkassen-visby-1003978/?utm_source=google&utm_medium=locations&utm_campaign=ICA+Nära+Torgkassen%2C+Visby+01550&referrer=https://www.google.com/#pfset=1"
              className="grocery-links"
            >
              1 - Ica Nära Torgkassen
            </a>
          </li>
          <li>
            <a
              href="https://www.ica.se/butiker/nara/gotland/ica-nara-kometen-1004052/?utm_source=google&utm_medium=locations&utm_campaign=ICA+Nära+Kometen%2C+Visby+01555"
              className="grocery-links"
            >
              2 - Ica Nära Kometen
            </a>
          </li>
          <li>
            <a href="https://www.coop.se/025050" className="grocery-links">
              3 - Coop Öster
            </a>
          </li>
          <li>
            <a
              href="https://www.willys.se/butik/2162"
              className="grocery-links"
            >
              4 - Willys Skarphäll
            </a>
          </li>
          <li>
            <a href="https://www.lidl.se" className="grocery-links">
              5 - Lidl Skarphäll
            </a>
          </li>
          <li>
            <a
              href="https://www.ica.se/butiker/maxi/gotland/maxi-ica-stormarknad-visby-1003730/?utm_source=google&utm_medium=locations&utm_campaign=Maxi+ICA+Stormarknad+Visby+12690"
              className="grocery-links"
            >
              6 - Ica Maxi Visby
            </a>
          </li>
          <li>
            <a href="https://www.coop.se/022500" className="grocery-links">
              7 - Stora Coop
            </a>
          </li>
          <li>
            <a
              href="https://www.ica.se/butiker/supermarket/gotland/ica-supermarket-atterdags-1004363/?utm_source=google&utm_medium=locations&utm_campaign=ICA+Supermarket+Atterdags+01554"
              className="grocery-links"
            >
              8 - Ica Atterdags
            </a>
          </li>
        </ul>
        <img src={karta} alt="Map of grocerystores" />
      </div>
    </div>
  );
};
