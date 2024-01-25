import "./About.css";
import pool from "/images/splash.png";
import sunset from "/images/sunset3.jpeg";
import table from "/images/table.jpg";

export const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-img">
          <img src={sunset} alt="sunset from balcony" />
        </div>
        <div className="about-text">
          <h1>Amazing sunsets!</h1>
          <p>
            Do you dream of a vacation on gotland?<br></br>You can rent our
            oceanfront apartment and experience gotlands best sunsets directly
            from the balcony.
          </p>
          <a
            href="https://www.airbnb.se/rooms/992532450626961797?source_impression_id=p3_1706094392_6Kch1vmrUnUv6Pza"
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Book here!
          </a>
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-text">
          <h1>Morning swim in the pool!</h1>
          <p>
            Go for a morning swim in one of the pools or the ocean, there is a
            beach in walking distance and the area offers lots of activities for
            the whole family.
          </p>
          <button className="button">Button not in use yet</button>
        </div>
        <div className="about-img">
          <img src={pool} alt="pool on the roof" />
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-img">
          <img src={table} alt="sunset from balcony" />
        </div>
        <div className="about-text">
          <h1>Experience fantastic food.</h1>
          <p>
            Eat your dinner in the sunset on the balcony or go for a walk by the
            sea to visby old town and visit one of gotlands finest restaurants
            most of them are in 5km range.
          </p>
          <button className="button">Button not in use yet</button>
        </div>
      </div>
    </>
  );
};
