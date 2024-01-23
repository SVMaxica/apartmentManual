/* eslint-disable react/prop-types */

import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div
        className="small-text-title"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <h2 className="hero-title">Welcome to</h2>
      </div>
      <div
        className="big-text-title"
        style={{ fontFamily: "Satisfy, cursive" }}
      >
        <h1>Snäck!</h1>
      </div>
    </header>
  );
};
