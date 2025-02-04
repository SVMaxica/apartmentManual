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
              Take a washer tablet from the cabinet above the sink and put in
              the dishwasher
            </li>
            <li>Push the ON / OFF button and close the dishwasher</li>
            <li>Choose a program with the program button</li>
            <li>Push the start button</li>
          </ol>
          <p>
            Now the dishwasher is on and will give you a signal when its ready.
          </p>
          <img
            className="remotes-img"
            src="images/dishwasher.jpg"
            alt="image of tv remotes"
          />
        </div>
      </div>
    </div>
  );
};
