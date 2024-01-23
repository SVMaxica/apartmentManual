import "./Houserules.css";

export const Houserules = () => {
  return (
    <div className="house-rules-wrapper">
      <div
        className="house-rules"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <h1>House rules!</h1>
        <ul>
          <li>
            <b>No Smoking </b>Allowed!
          </li>
          <li>
            <b>No Pets</b> Allowed!
          </li>
          <li>
            <b>No Illegal Substances</b> Allowed!
          </li>
          <li>
            <b>No Parties</b> Allowed!
          </li>
          <li>
            Only as many people as the booking specifies are allowed to stay in
            the apartment.
          </li>
          <li>
            Between 21:00 in the evening and 08:00, there should be silence in
            the house.
          </li>
          <li>
            If something is lost or broken, it will be charged if it exceeds the
            deposit fee, so we appreciate if you are careful
          </li>
        </ul>
      </div>
    </div>
  );
};
