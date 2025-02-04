import "./Garbage.css";

export const Garbage = () => {
  return (
    <div className="garbage-wrapper">
      <div className="garbage">
        <h1>Dispose of Garbage</h1>
        <p>
          In the garage we have the garbage dispolsal room, and here we encurage
          everyone to think of the enviroment and sort your garbage.<br></br>
          <br></br>
          <b>We have these bins im the garbage room:</b>
        </p>
        <ul>
          <li>Organic waste</li>
          <li>General waste</li>
          <li>Paper and coardboard</li>
          <li>Plastic bottles and containers</li>
          <li>Non colored glas</li>
          <li>Colored glas</li>
          <li>Metall cans and containers</li>
        </ul>
        <p>
          <b>
            If you have garbage containing any of the following you need to go
            to the recycling center to dispose it correctly, you will find the
            recycling center at västar törnekvior 10, 62141 Visby
          </b>
        </p>
        <ul>
          <li>Batteries</li>
          <li>Electronics</li>
          <li>Furniture</li>
          <li>Clothes</li>
          <li>Chemicals</li>
        </ul>
        <img
          className="garage-img"
          src="images/garagebild.png"
          alt="garagemap"
        />
      </div>
    </div>
  );
};
