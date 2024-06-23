import './Charge.css';

export const Charge = () => {
  return (
    <div className="charge-wrapper">
      <div className="charge-info">
        <h1>Charge you electric car</h1>
        <div className="charge-instructions">
          <p>These are some of the quick chargers in visby</p>
          <ul>
            <li>Circle K, Broväg 12</li>
            <li>Ica Maxi, Follingboväg 70</li>
            <li>OKQ8, Kung Magnus väg 12</li>
          </ul>
          <p>You can also find more charging stations at </p>
          <a
            href="https://chargefinder.com/se/visby/laddplatser-elbil/eqweyg"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Chargefinder.com
          </a>
        </div>
      </div>
    </div>
  );
};
