/* eslint-disable react/prop-types */
import './Pool.css';

export const Pool = () => {
  return (
    <div className="pool-wrapper">
      <div className="pool">
        <h1>Pool area</h1>
        <p>
          The pools are located at the roof, to get there you take the stairs or
          elevator to floor 6 and then you take the stairs up to the roof.
          Remember that you need to have the keytag with you to get into the
          building again.
        </p>
        <p>
          The pools are open and heated during the summer months from june to
          august. There is two areas with outdoor showers 1 with cold water next
          to the main pool and 1 with warm water next to the playground and
          babypool, these showerheads are mounted on the wall of the little
          white building.<br></br>The mainpool and baby pool is open everyday
          and the smaller pool is open every other day. Open hours is mornings
          betweeen 7.00-08.30 only for recreational swimming, from 8.30 to 20.30
          its open for everyone with access to pool area.<br></br>These are the
          rules for the pool area:
        </p>
        <ul>
          <li>
            Everyone is responsible for their own safety, parents are
            responsible for their kids safety.
          </li>
          <li>Kids under 3 years must have a bathdiaper on.</li>
          <li>Everyone must shower before they get into the pool</li>
          <li>Keep order and leave NO garbage when you leave</li>
        </ul>
        <img
          className="mainpool-img"
          src="images/storapoolen.jpg"
          alt="main pool"
        />
        <img
          className="smaller-pool"
          src="images/lillapoolen.jpg"
          alt="smaller pool"
        />
      </div>
    </div>
  );
};
