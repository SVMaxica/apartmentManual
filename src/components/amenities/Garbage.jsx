import './Garbage.css';

export const Garbage = () => {
  return (
    <div className="garbage-wrapper">
      <div className="garbage">
        <h1>Waste Sorting in the Apartment</h1>
        <p>
          Please help us keep the apartment clean and eco-friendly by sorting
          your garbage! We take out the trash almost every day so the kitchen
          bin area is always fresh.
        </p>
        <h2>In the kitchen</h2>

        <img
          className="garage-img"
          src="images/trashbins.jpg"
          alt="garbage room map"
        />
        <ul>
          <li>
            <b>Compost waste (food scraps):</b> Front bin with brown compostable
            bags. Please use only for food waste (no packaging!).
          </li>
          <li>
            <b>Plastic packaging:</b> Second bin (with ordinary grey plastic
            bag). For empty, clean plastic packaging and containers.
          </li>
          <li>
            <b>Combustible/general waste:</b> Third bin (with ordinary grey
            plastic bag) for things that cannot be recycled (no food, no
            packaging!).
          </li>
          <li>
            <b>Paper packaging:</b> Bin with a paper bag, at the very back
            inside the cabinet. For cardboard and paper packaging.
            <br />
            <span style={{ fontWeight: 'bold', color: '#3a7' }}>
              Please flatten boxes and cartons so they take up less space!
            </span>
          </li>
        </ul>

        <p>
          <b>
            Glass and metal packaging are collected separately.
            <br />
            We usually keep them on the kitchen counter and take them down to
            the recycling room when we take out the trash. (There are not so
            many of these, so it's okay to collect them for a few days.)
          </b>
        </p>
        <h2>In the garbage room (by the garage)</h2>
        <p>
          When you take out the garbage, please put each bag in the correct
          container in the garbage room.
          <br />
          <b>
            The containers are labeled in Swedish – below you’ll find both
            English and Swedish names to help you find the right one:
          </b>
        </p>
        <ul>
          <li>
            <b>Compost/food waste</b> (<b>Matavfall</b>): Brown containers,
            usually smaller and often with the label facing the wall. Please use
            the brown compostable bags.
          </li>
          <li>
            <b>Plastic packaging</b> (<b>Plastförpackningar</b>): For empty,
            clean plastic packaging. Label is usually easy to see.
          </li>
          <li>
            <b>General waste/combustibles</b> (<b>Brännbart</b>): For items that
            cannot be recycled. Label is usually easy to see.
          </li>
          <li>
            <b>Paper and cardboard packaging</b> (<b>Pappersförpackningar</b>):
            For paper and cardboard packaging (flatten boxes first!).
          </li>
          <li>
            <b>Clear (uncoloured) glass</b> (<b>Ofärgat glas</b>): For jars and
            bottles made of clear glass only.
          </li>
          <li>
            <b>Coloured glass</b> (<b>Färgat glas</b>): For jars and bottles
            made of green or brown glass.
          </li>
          <li>
            <b>Metal packaging</b> (<b>Metallförpackningar</b>): For tin cans,
            lids, and other small metal packaging.
          </li>
        </ul>
        <p style={{ color: '#b22222', fontWeight: 'bold' }}>
          ⚠️ Please note: If waste is sorted incorrectly or put in the wrong
          container, the housing association (<b>bostadsföreningen</b>) may
          charge a penalty fee. Always double-check the labels and sort
          carefully. Thank you!
        </p>
        <p>
          <b>
            Please remember:
            <ul>
              <li>
                Compost containers (<b>Matavfall</b>) are smaller brown bins and
                are often placed with the label facing the wall. If you don't
                see the label, just check the inside for brown compostable bags.
              </li>
              <li>All other bins usually have the label facing outwards.</li>
              <li>
                Glass is sorted into two separate bins: clear glass (
                <b>Ofärgat glas</b>) and coloured glass (<b>Färgat glas</b>).
              </li>
              <li>
                Flatten paper and cardboard boxes before throwing them away!
              </li>
              <li>
                Never put packaging with food left inside (rinse lightly if
                needed).
              </li>
              <li>
                Hazardous waste (batteries, electronics, chemicals, etc.) must
                NOT go in any of the bins – see below.
              </li>
            </ul>
          </b>
        </p>
        <img
          className="garage-img"
          src="images/garagebild.png"
          alt="garbage room map"
        />
        <h2>Hazardous or special waste</h2>
        <p>
          <b>
            Please take the following items to the recycling center at Västra
            Törnekvior 10, 62141 Visby:
          </b>
        </p>
        <ul>
          <li>Batteries</li>
          <li>Electronics</li>
          <li>Furniture</li>
          <li>Clothes and textiles</li>
          <li>Chemicals, paint, bulbs, etc.</li>
        </ul>
      </div>
    </div>
  );
};
