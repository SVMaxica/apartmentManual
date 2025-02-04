import './Barbeque.css';

export const Barbeque = () => {
  return (
    <div className="barbeque-wrapper">
      <div className="barbeque-info">
        <h1>Barbeque</h1>
        <div className="barbeque-instructions">
          <p>
            Unfortiently there are strict regulations for fire and barbeques on
            the balconys, but we have 2 very beautiful places were you can
            barbeque if you:
          </p>
          <ol>
            <li>Bring water and completly kill the fire when youre done.</li>
            <li>
              Keep order, clean up and take your trash with you when you leave.
            </li>
          </ol>

          <ul>
            <li>The first one you find on roof next to the tennis courts</li>
            <li>
              And the second one is next to the famous rauk Snäckchimpansen wich
              is just a few minutes walk to Snäckviken beach
            </li>
          </ul>
          <img
            className="remotes-img"
            src="images/bbq.jpg"
            alt="image of rental bikes"
          />
        </div>
      </div>
    </div>
  );
};
