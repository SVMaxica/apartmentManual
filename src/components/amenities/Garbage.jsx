import './Garbage.css';

export const Garbage = () => {
  return (
    <div className="garbage-wrapper">
      <div className="garbage">
        <h1>♻️ Waste Sorting Guide</h1>

        <p>
          Thank you for helping us keep the apartment clean and eco-friendly! 😊
          We take out the trash almost every day, so the kitchen bin area stays
          fresh.
        </p>

        <h2>🏠 In the kitchen</h2>

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

        <h2>🚪 Garbage room (by the garage)</h2>

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

        <h2>⚠️ Important</h2>

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

        <h2>🚫 Recycling centre</h2>

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
      </div>
    </div>
  );
};

// export const Garbage = () => {
//   return (
//     <div className="garbage-wrapper">
//       <div className="garbage">
//         <h1>Waste Sorting in the Apartment</h1>
//         <p>
//           Please help us keep the apartment clean and eco-friendly by sorting
//           your garbage! We take out the trash almost every day so the kitchen
//           bin area is always fresh.
//         </p>
//         <h2>In the kitchen</h2>

//         <img
//           className="garage-img"
//           src="images/trashbins.jpg"
//           alt="garbage room map"
//         />
//         <ul>
//           <li>
//             <b>Compost waste (food scraps):</b> Front bin with brown compostable
//             bags. Please use only for food waste (no packaging!).
//           </li>
//           <li>
//             <b>Plastic packaging:</b> Second bin (with ordinary grey plastic
//             bag). For empty, clean plastic packaging and containers.
//           </li>
//           <li>
//             <b>Combustible/general waste:</b> Third bin (with ordinary grey
//             plastic bag) for things that cannot be recycled (no food, no
//             packaging!).
//           </li>
//           <li>
//             <b>Paper packaging:</b> Bin with a paper bag, at the very back
//             inside the cabinet. For cardboard and paper packaging.
//             <br />
//             <span style={{ fontWeight: 'bold', color: '#3a7' }}>
//               Please flatten boxes and cartons so they take up less space!
//             </span>
//           </li>
//         </ul>

//         <p>
//           <b>
//             Glass and metal packaging are collected separately.
//             <br />
//             We usually keep them on the kitchen counter and take them down to
//             the recycling room when we take out the trash. (There are not so
//             many of these, so it's okay to collect them for a few days.)
//           </b>
//         </p>

//         <h2>In the garbage room (by the garage)</h2>
//         <p style={{ color: '#b22222', fontWeight: 'bold' }}>
//           🔑 The garbage room is locked and opens with the key tag. Hold the key
//           tag in the middle of the keypad, around number 5, and keep it there
//           longer than you might expect (about 5–10 seconds). The lock is quite
//           slow to respond, so please do not remove the tag too quickly. Wait
//           until you hear the lock click before opening the door.
//         </p>
//         <p>
//           When you take out the garbage, please put each bag in the correct
//           container in the garbage room.
//           <br />
//           <b>
//             The containers are labeled in Swedish – below you’ll find both
//             English and Swedish names to help you find the right one:
//           </b>
//         </p>

//         <p style={{ color: '#1f3b2e', fontWeight: 'bold' }}>
//           ♻️ A quick (important) note from the housing association:
//         </p>
//         <p style={{ color: '#b22222' }}>
//           The garbage room is <b>locked</b> and opens with a <b>key tag</b>.
//           There is also a <b>camera inside</b>. This is because we’ve had major
//           issues with incorrect sorting and people leaving items that don’t
//           belong there, which has caused high extra removal costs for the
//           association.
//           <br />
//           <b>
//             Please sort carefully and only leave waste in the correct bins.
//           </b>{' '}
//           If waste is sorted incorrectly or left in the wrong place, the
//           association can identify who accessed the room and may issue a{' '}
//           <b>penalty fee (invoiced)</b>.
//           <br />
//           Thanks a lot for helping us keep things tidy and fair for everyone ❤️
//         </p>

//         <ul>
//           <li>
//             <b>Compost/food waste</b> (<b>Matavfall</b>): Brown containers,
//             usually smaller and often with the label facing the wall. Please use
//             the brown compostable bags.
//           </li>
//           <li>
//             <b>Plastic packaging</b> (<b>Plastförpackningar</b>): For empty,
//             clean plastic packaging. Label is usually easy to see.
//           </li>
//           <li>
//             <b>General waste/combustibles</b> (<b>Brännbart</b>): For items that
//             cannot be recycled. Label is usually easy to see.
//           </li>
//           <li>
//             <b>Paper and cardboard packaging</b> (<b>Pappersförpackningar</b>):
//             For paper and cardboard packaging (flatten boxes first!).
//           </li>
//           <li>
//             <b>Clear (uncoloured) glass</b> (<b>Ofärgat glas</b>): For jars and
//             bottles made of clear glass only.
//           </li>
//           <li>
//             <b>Coloured glass</b> (<b>Färgat glas</b>): For jars and bottles
//             made of green or brown glass.
//           </li>
//           <li>
//             <b>Metal packaging</b> (<b>Metallförpackningar</b>): For tin cans,
//             lids, and other small metal packaging.
//           </li>
//         </ul>

//         {/* <p style={{ color: '#b22222', fontWeight: 'bold' }}>
//           ⚠️ Please note: If waste is sorted incorrectly, left outside the bins,
//           or put in the wrong container, the housing association (
//           <b>bostadsföreningen</b>) may charge a penalty fee. Always
//           double-check the labels and sort carefully. Thank you!
//         </p> */}

//         <p>
//           <b>
//             Please remember:
//             <ul>
//               <li>
//                 Compost containers (<b>Matavfall</b>) are smaller brown bins and
//                 are often placed with the label facing the wall. If you don't
//                 see the label, just check the inside for brown compostable bags.
//               </li>
//               <li>All other bins usually have the label facing outwards.</li>
//               <li>
//                 Glass is sorted into two separate bins: clear glass (
//                 <b>Ofärgat glas</b>) and coloured glass (<b>Färgat glas</b>).
//               </li>
//               <li>
//                 Flatten paper and cardboard boxes before throwing them away!
//               </li>
//               <li>
//                 Never put packaging with food left inside (rinse lightly if
//                 needed).
//               </li>
//               <li>
//                 Hazardous waste (batteries, electronics, chemicals, etc.) must
//                 NOT go in any of the bins – see below.
//               </li>
//             </ul>
//           </b>
//         </p>

//         <img
//           className="garage-img"
//           src="images/garagebild.png"
//           alt="garbage room map"
//         />

//         <h2>Hazardous or special waste</h2>
//         <p>
//           <b>
//             Please take the following items to the recycling center at Västra
//             Törnekvior 10, 62141 Visby:
//           </b>
//         </p>
//         <ul>
//           <li>Batteries</li>
//           <li>Electronics</li>
//           <li>Furniture</li>
//           <li>Clothes and textiles</li>
//           <li>Chemicals, paint, bulbs, etc.</li>
//         </ul>
//       </div>
//     </div>
//   );
// };
