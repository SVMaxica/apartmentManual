import './Garbage.css';
import { AmenityPage } from './AmenityPage';

export const Garbage = () => {
  return (
    <AmenityPage
      title="♻️ Waste Sorting Guide"
      wrapperClassName="garbage-wrapper"
      infoClassName="garbage"
    >
      <p>
        Thank you for helping us keep the apartment clean and eco-friendly! 😊
        We take out the trash almost every day, so the kitchen bin area stays
        fresh.
      </p>

      <h3>🏠 In the kitchen</h3>

      <img
        className="garage-img"
        src="images/trashbins.jpg"
        alt="Kitchen waste bins"
      />

      <ul>
        <li>
          🟤 <b>Food waste (Compost)</b>
          <br />
          Front bin with brown compostable bags.
          <br />
          <i>Food only – no packaging.</i>
        </li>

        <li>
          🧴 <b>Plastic packaging</b>
          <br />
          Second bin with a grey bag.
          <br />
          <i>Empty and clean plastic packaging.</i>
        </li>

        <li>
          🩶 <b>General waste (Brännbart)</b>
          <br />
          Third bin with a grey bag.
          <br />
          <i>Things that cannot be recycled.</i>
        </li>

        <li>
          📦 <b>Paper & cardboard</b>
          <br />
          Paper bag at the very back of the cabinet.
          <br />
          <i>Please flatten boxes and cartons.</i>
        </li>
      </ul>

      <p>
        🍾 <b>Glass and metal</b> are usually collected on the kitchen counter
        and taken to the garbage room every few days.
      </p>

      <h3>🚪 Garbage room (by the garage)</h3>

      <p style={{ color: '#b22222', fontWeight: 'bold' }}>
        🔑 The garbage room is locked and opens with the key tag.
        <br />
        Hold the tag in the middle of the keypad (around number 5).
        <br />
        ⚠️ The lock is slow! Keep the tag there for about 5–10 seconds, even
        if nothing seems to happen at first. Wait until you hear the lock
        click before opening the door.
      </p>

      <p>
        Please place each bag in the correct container. The labels are in
        Swedish, so here are the English translations:
      </p>

      <ul>
        <li>
          🟤 <b>Matavfall</b> – Food waste
        </li>
        <li>
          🩶 <b>Brännbart</b> – General waste
        </li>
        <li>
          🧴 <b>Plastförpackningar</b> – Plastic packaging
        </li>
        <li>
          📦 <b>Pappersförpackningar</b> – Paper & cardboard packaging
        </li>
        <li>
          🍾 <b>Ofärgat glas</b> – Clear glass
        </li>
        <li>
          🍷 <b>Färgat glas</b> – Coloured glass
        </li>
        <li>
          🥫 <b>Metallförpackningar</b> – Metal packaging
        </li>
      </ul>

      <img
        className="garage-img"
        src="images/garagebild.png"
        alt="Garbage room map"
      />

      <h3>⚠️ Important</h3>

      <p>
        📹 There is a camera in the garbage room because the housing
        association has previously had problems with incorrect sorting and
        items being left there that do not belong.
      </p>

      <ul>
        <li>✅ Please use the correct bins.</li>
        <li>✅ Do not leave items on the floor.</li>
        <li>✅ Rinse packaging if needed.</li>
        <li>✅ Flatten cardboard boxes.</li>
        <li>
          ❌ Batteries, electronics and chemicals must not be thrown in any of
          the bins.
        </li>
      </ul>

      <p style={{ color: '#b22222', fontWeight: 'bold' }}>
        Incorrect sorting or leaving items in the garbage room may result in
        an invoiced penalty fee from the housing association.
      </p>

      <p>
        ❤️ Thank you for helping us keep the garbage room clean and pleasant
        for everyone.
      </p>

      <h3>🚫 Recycling centre</h3>

      <p>
        Please take the following items to:
        <br />
        <b>Västra Törnekvior 10, 62141 Visby</b>
      </p>

      <ul>
        <li>🔋 Batteries</li>
        <li>💻 Electronics</li>
        <li>🪑 Furniture</li>
        <li>👕 Clothes and textiles</li>
        <li>🧪 Chemicals, paint and light bulbs</li>
      </ul>
    </AmenityPage>
  );
};
