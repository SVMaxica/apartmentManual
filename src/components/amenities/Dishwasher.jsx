import './Dishwasher.css';

export const Dishwasher = () => {
  return (
    <div className="dishwasher-wrapper">
      <div className="dishwasher-info">
        <h1>Dishwasher</h1>
        <div className="dishwasher-instructions">
          <p>To start the dishwasher</p>
          <ol>
            <li>
              Take a dishwasher tablet from the cabinet above the sink and place
              it in the dishwasher.
            </li>
            <li>Press the ON/OFF button and close the dishwasher.</li>
            <li>Select a program using the program button.</li>
            <li>Press the Start button.</li>
          </ol>

          <p>
            The dishwasher will start and give a signal when the program has
            finished.
          </p>

          <div className="manual-note">
            <strong>Important during the summer:</strong>

            <p>
              During the peak summer season, Gotland sometimes experiences water
              shortages. To conserve water, <strong>Region Gotland</strong> may
              temporarily reduce the water pressure across the island.
            </p>

            <p>
              If the water pressure becomes too low, the dishwasher may stop and
              display the <strong>i20</strong> error code. If this happens,
              simply restart the dishwasher and select a different program. In
              most cases, it will continue to work normally.
            </p>

            <p>
              This is caused by the temporarily reduced water pressure and is
              not a fault with the dishwasher. Normal operation will return once{' '}
              <strong>Region Gotland</strong> restores the normal water
              pressure, usually after the summer season.
            </p>
          </div>

          <img
            className="remotes-img"
            src="images/dishwasher.jpg"
            alt="Dishwasher control panel"
          />
        </div>
      </div>
    </div>
  );
};
// export const Dishwasher = () => {
//   return (
//     <div className="dishwasher-wrapper">
//       <div className="dishwasher-info">
//         <h1>Dishwasher</h1>
//         <div className="dishwasher-instructions">
//           <p>To start the dishwasher</p>
//           <ol>
//             <li>
//               Take a washer tablet from the cabinet above the sink and put in
//               the dishwasher
//             </li>
//             <li>Push the ON / OFF button and close the dishwasher</li>
//             <li>Choose a program with the program button</li>
//             <li>Push the start button</li>
//           </ol>
//           <p>
//             Now the dishwasher is on and will give you a signal when its ready.
//           </p>
//           <img
//             className="remotes-img"
//             src="images/dishwasher.jpg"
//             alt="image of tv remotes"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
