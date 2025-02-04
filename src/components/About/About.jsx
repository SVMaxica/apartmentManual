import './About.css';
import { useState, useRef } from 'react';
import pool from '/images/splash.png';
import sunset from '/images/sunset3.jpeg';
import table from '/images/table.jpg';
import ActivitiesList from '../activitiesList/ActivitiesList';
import RestaurantsShopsList from '../restaurantsShopsList/RestaurantsShopsList';

export const About = () => {
  // State to manage the visibility of ActivitiesList
  const [showActivities, setShowActivities] = useState(false);
  const [showRestaurantsShops, setShowRestaurantsShops] = useState(false);
  const restaurantsRef = useRef(null);

  // Function to toggle the activity list visibility
  const toggleActivities = () => {
    setShowActivities(!showActivities);
    setShowRestaurantsShops(false); // Stäng andra sektionen
  };

  // Function to toggle the restaurants and shops list visibility
  const toggleRestaurantsShops = () => {
    setShowRestaurantsShops(!showRestaurantsShops);
    setShowActivities(false); // Stäng andra sektionen

    // Scroll to the RestaurantsShopsList when it is opened
    if (!showRestaurantsShops) {
      setTimeout(() => {
        restaurantsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);
    }
  };

  return (
    <>
      <div className="about-wrapper">
        <div className="about-img">
          <img src={sunset} alt="sunset from balcony" />
        </div>
        <div className="about-text">
          <h1>Amazing sunsets!</h1>
          <p>
            Do you dream of a vacation on Gotland?
            <br />
            You can rent our oceanfront apartment and experience Gotland’s best
            sunsets directly from the balcony.
          </p>
          <div className="book-btn-wrapper">
            <a
              href="https://www.airbnb.se/rooms/992532450626961797?source_impression_id=p3_1706094392_6Kch1vmrUnUv6Pza"
              className="book-btn"
              target="_blank"
              rel="noreferrer"
            >
              Book here!
            </a>
          </div>
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
          <div className="button-wrapper">
            <button className="button" onClick={toggleActivities}>
              {showActivities ? 'Hide Activities' : 'Explore Other Activities'}
            </button>
          </div>
        </div>
        <div className="about-img">
          <img src={pool} alt="pool on the roof" />
        </div>
      </div>
      {showActivities && <ActivitiesList />}
      <div className="about-wrapper">
        <div className="about-img">
          <img src={table} alt="sunset from balcony" />
        </div>
        <div className="about-text">
          <h1>Experience fantastic food.</h1>
          <p>
            Eat your dinner in the sunset on the balcony or go for a walk by the
            sea to Visby old town and visit one of Gotland’s finest restaurants,
            most of them are in a 5km range.
          </p>
          <div className="button-wrapper">
            <button className="button" onClick={toggleRestaurantsShops}>
              {showRestaurantsShops
                ? 'Hide Restaurants and Shops'
                : 'Explore Restaurants & Shops'}
            </button>
          </div>
        </div>
      </div>
      {showRestaurantsShops && (
        <div ref={restaurantsRef}>
          <RestaurantsShopsList />
        </div>
      )}
    </>
  );
};
