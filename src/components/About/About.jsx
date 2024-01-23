import "./About.css";
import pool from "/images/lillapoolen.jpg";

export const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-img">
        <img src={pool} alt="pool on the roof" />
      </div>
      <div className="about-text">
        <h1>Live by the sea!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          dignissimos illum ea ducimus adipisci quis deserunt unde labore
          doloribus id.
        </p>
      </div>
    </div>
  );
};
