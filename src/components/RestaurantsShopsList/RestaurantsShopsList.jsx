import React from 'react';
import './RestaurantsShopsList.css';
import pinIcon from '../../assets/pin.svg';

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
        name: 'Food market',
        description:
          'At Visby strandby they have a foodmarket with 6-8 foodtrucks that serve dishes from all over the world.',
        location:
          'https://www.google.com/maps/place/Visby+Strandby/@57.654919,18.2887054,14z/data=!4m13!1m2!2m1!1snorderstrands+camping!3m9!1s0x46f7a94e00bf9ba7:0xda97a26d0fb3ee1d!5m2!4m1!1i2!8m2!3d57.6549349!4d18.3078872!15sChVub3JkZXJzdHJhbmRzIGNhbXBpbmdaFyIVbm9yZGVyc3RyYW5kcyBjYW1waW5nkgEPY290dGFnZV92aWxsYWdlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU0zT1ZsTFRsRkJFQUWqAUsQASoLIgdjYW1waW5nKA8yHxABIhts4boNG-mVVCk1fm1YXEXAeXZJN-GRGXXm8xUyGRACIhVub3JkZXJzdHJhbmRzIGNhbXBpbmfgAQD6AQQIABAt!16s%2Fg%2F1tgh67t5?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D',
      },
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
      <h1>Explore Our Favorite Places to Eat and Shop</h1>
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
                  aria-label={`View ${category.name} on the map`}
                >
                  View on map
                  <img
                    src={pinIcon}
                    alt="Link to map"
                    style={{ width: '16px', height: '16px' }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

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
                  aria-label={`View ${item.name} on the map`}
                >
                  View on map
                  <img
                    src={pinIcon}
                    alt="Link to map"
                    style={{ width: '16px', height: '16px' }}
                  />
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
