import React from 'react';
import './RestaurantsShopsList.css';

const restaurants = [
  {
    category: 'Fine Dining',
    items: [
      {
        name: 'Bakfickan',
        description: 'Famous for their fresh seafood dishes in a cozy setting.',
        location: 'https://maps.app.goo.gl/example1',
      },
      {
        name: 'Lilla Bjers Gårdskrog',
        description:
          'Organic farm-to-table dining with a focus on sustainability.',
        location: 'https://maps.app.goo.gl/94bkrAzeTzMhzopT7',
      },
      {
        name: 'Volare',
        description: 'European food with impressive vine menu',
        location: 'https://maps.app.goo.gl/inSC1EymxzePUvgN7',
      },
      {
        name: 'Surfers',
        description:
          'Popular retro restaurant and cocktail bar serving classic dishes from the Sichuan province in China.',
        location: 'https://maps.app.goo.gl/a2vfCJYHmqykFufYA',
      },
    ],
  },
  {
    category: 'Kids Favorites',
    items: [
      {
        name: 'Mels Diner',
        description: 'Visbys most popular burgers with a great Rockabilly wibe',
        location: 'https://maps.app.goo.gl/cz8MhKnxZXuxMX6E8',
      },
      {
        name: 'Crêperie & Logi',
        description:
          'One of visbys oldtowns most iconic buildings right in the center of visby old town',
        location: 'https://maps.app.goo.gl/dXV3adKG6e1NxvFE6',
      },
      {
        name: 'Taco på ängen',
        description:
          'Authentic mexican food with great tacos, if you make a trip to the northen part of the island you should make a stop here',
        location: 'https://maps.app.goo.gl/i5VecpaxMLqncQMP9',
      },
    ],
  },
];

const shops = [
  {
    category: 'Ice Cream',
    items: [
      {
        name: 'Glassmagasinet',
        description:
          'Every kids favorite, Offers over 300 sorts of ice cream right by the harbor.',
        location: 'https://maps.app.goo.gl/Ba1t1MCEFzHaCjiy5',
      },
      {
        name: 'Glassvillan',
        description:
          'A cozy ice cream shop located near the Botanical Garden in Visby. It serves a variety of ice cream desserts, making it the perfect spot for a fika on sunny days.',
        location: 'https://maps.app.goo.gl/tLTZkX18NayHDkyg6',
      },
      {
        name: 'Guteglass',
        description:
          'A local favorite for eco-friendly, organic ice cream crafted on Gotland. They also offer a tasting menu that kids often enjoy, making it a fun experience for the whole family!',
        location: 'https://maps.app.goo.gl/kEbNXY4mkENDdAxp9',
      },
    ],
  },
  {
    category: 'Locally Produced Treasures',
    items: [
      {
        name: 'Kränku',
        description:
          'A charming tea and coffee shop in the heart of Visby, known for its locally blended teas and high-quality coffee. Perfect for finding unique gifts, Gotland-inspired flavors, and a cozy shopping experience in the old town.',
        location: 'https://maps.app.goo.gl/jLzWcdn7sFUDNCuF6',
      },
      {
        name: 'STUK form & konst',
        description:
          'Local cooperative showcasing handmade crafts and souvenirs.',
        location: 'https://maps.app.goo.gl/Hadga7pzF9o7FRxK8',
      },

      {
        name: 'Stora Coop',
        description:
          'A large supermarket in Visby with an entire section dedicated to local products. You will find everything from regional foods to home decor, offering a great way to explore and support Gotlands local craftsmanship and flavors.',
        location: 'https://maps.app.goo.gl/sqThbVbq1DAukdnk7',
      },
    ],
  },
];

const RestaurantsShopsList = () => {
  return (
    <div className="restaurantsShopsList-wrapper">
      <h1>Explore Our Favorite Places to Eat</h1>
      {restaurants.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, i) => (
              <li key={i}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a
                  href={item.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on map
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h1>And our Favorite Shops</h1>
      {shops.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, i) => (
              <li key={i}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <a
                  href={item.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on map
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantsShopsList;
