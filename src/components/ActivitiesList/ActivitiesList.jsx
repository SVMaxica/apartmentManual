import React from 'react';
import './ActivitiesList.css';

const beaches = [
  {
    name: 'Snäckviken',
    description:
      'Our nearest beach just a few hundred meters away, always well-maintained, family-friendly, shallow water and with a nice restaurant.',
    location: 'https://maps.app.goo.gl/nuGR5NKvCMtUs4E58',
  },
  {
    name: 'Ihreviken',
    description:
      'A tranquil beach surrounded by scenic walking trails and stunning views, ideal for a peaceful day by the sea.',
    location: 'https://maps.app.goo.gl/S3QQeqcSm23ffnA8A',
  },
  {
    name: 'Fårö',
    description:
      'Offers Long, sandy beaches with crystal-clear waters and a serene atmosphere. Perfect for relaxation and enjoying Gotlands natural beauty.',
    location: 'https://maps.app.goo.gl/KCMBjbvrxcsjxbkH8',
  },
  {
    name: 'Tofta Beach',
    description:
      'One of Gotlands most popular beaches, known for its lively atmosphere, fine sand, and several great restaurants.',
    location: 'https://maps.app.goo.gl/WKozPcmBCSMWrhmv6',
  },
  {
    name: 'Blue Lagoon',
    description:
      'A unique turquoise water-filled limestone quarry, perfect for swimming and picnicking in a one-of-a-kind setting.',
    location: 'https://maps.app.goo.gl/gcsrsNnfL583vjYe6',
  },
];

const hikes = [
  {
    name: 'Hälsans stig',
    description:
      'A lovely trail that takes you from Snäck to Visby and back, offering great variety with both forest and sea views.',
    location: 'https://www.naturkartan.se/sv/gotlands-lan/halsans-stig-visby',
  },
  {
    name: 'Ihreåslingan',
    description:
      'A wonderful trail with great variety. There is also a smaller accessible trail by the sea.',
    location: 'https://www.naturkartan.se/sv/gotlands-lan/ireaslingan',
  },
  {
    name: 'Södra Hällarna',
    description: 'Spectacular cliffs offering expansive views of the sea.',
    location:
      'https://www.naturkartan.se/sv/gotlands-lan/klintstigen-170e1ae3-b58c-4a88-a021-b9150876d4ee',
  },
  {
    name: 'Kinner stugan',
    description:
      'For a greater challenge, the 5 km trail offers plenty of hills. Several trails are available to choose from.',
    location: 'https://maps.app.goo.gl/MVYMZUTxrvaTZ77i8',
  },
  {
    name: 'VOK stugan',
    description:
      'Well-maintained forest trails suitable for all weather conditions. Multiple trails are available.',
    location:
      'https://www.naturkartan.se/sv/gotlands-lan/gula-sparet-6316e3e4-7ccf-4957-9676-0093765bfb38',
  },
];

const familyActivities = [
  {
    name: 'Kneippbyn Sommar- och Vattenland',
    description:
      'An amusement park and water park just south of Visby, famous for Villa Villekulla from the Pippi Longstocking movies. Kids can meet Pippi, enjoy rides, and splash in water slides.',
    location: 'https://maps.app.goo.gl/8eM9CTZ1gB3q7Pre8',
  },
  {
    name: 'Lummelundagrottan',
    description:
      'An exciting cave north of Visby offering guided tours through impressive limestone formations and underground chambers. Perfect for adventurous kids and adults.',
    location: 'https://maps.app.goo.gl/D7odERbW2t4ZFQJ69',
  },
  {
    name: 'Fenomenalen Science Center',
    description:
      'An interactive science center in Visby where children can explore and learn about science through play and experiments.',
    location: 'https://maps.app.goo.gl/6qNiyFuWxv5UMAr28',
  },
  {
    name: 'Högt & Lågt Klätterpark',
    description:
      'A climbing park in Klintehamn with high-altitude courses for all ages. Perfect for families seeking adventure and challenges together.',
    location: 'https://maps.app.goo.gl/37FgvicPo9pUx82U9',
  },
  {
    name: 'Gotlands djurpark',
    description:
      'A cozy zoo near Boge with a mix of farm and exotic animals. Enjoy interactive experiences, play areas for kids, and a café. Perfect for a fun and relaxing family outing',
    location: 'https://maps.app.goo.gl/WksbNjMATMTbHU898',
  },
];

const landmarks = [
  {
    name: 'Visby Ringmur',
    description:
      'A UNESCO World Heritage Site, this medieval wall surrounds the old town of Visby and offers a glimpse into Gotland’s rich history. Perfect for a scenic walk.',
    location: 'https://maps.app.goo.gl/vhoYWB92bejfB49Y6',
  },
  {
    name: 'S:t Nicolai Ruin',
    description:
      'A stunning medieval church ruin, often used for concerts and events. Located in the heart of Visby.',
    location: 'https://maps.app.goo.gl/qGNyZdbYxQmNw7td6',
  },
  {
    name: 'Stora och lilla Karlsö',
    description:
      'One of the world’s oldest nature reserves, this islands offers unique flora, fauna, and breathtaking views. A short boat trip from Klintehamn.',
    location: 'https://maps.app.goo.gl/dHfV1mBauioTxBD37',
  },
  {
    name: 'Gotlands Museum',
    description:
      'A must-visit for history enthusiasts. Learn about Gotland’s Viking heritage, medieval artifacts, and geological wonders.',
    location: 'https://maps.app.goo.gl/47X5vP4o2KvZvugy6',
  },
  {
    name: 'Langhammars Raukar',
    description:
      'Impressive limestone sea stacks located on Fårö. One of Gotland’s most iconic natural landmarks.',
    location: 'https://maps.app.goo.gl/MWrEp3avFVY15pqZ9',
  },
];

const ActivitiesList = () => {
  return (
    <div className="activitiesList-wrapper">
      <h1>Our Top Activities Suggestions</h1>
      <h2>Amazing Beaches</h2>
      <ul>
        {beaches.map((beach, index) => (
          <li key={index}>
            <h3>{beach.name}</h3>
            <p>{beach.description}</p>
            <a href={beach.location} target="_blank" rel="noopener noreferrer">
              View on map
            </a>
          </li>
        ))}
      </ul>
      <h2>Go for a Hike</h2>
      <ul>
        {hikes.map((hike, index) => (
          <li key={index}>
            <h3>{hike.name}</h3>
            <p>{hike.description}</p>
            <a href={hike.location} target="_blank" rel="noopener noreferrer">
              View on map
            </a>
          </li>
        ))}
      </ul>
      <h2>Family favorites</h2>
      <ul>
        {familyActivities.map((activity, index) => (
          <li key={index}>
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <a
              href={activity.location}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on map
            </a>
          </li>
        ))}
      </ul>

      <h2>History and landmarks</h2>
      <ul>
        {landmarks.map((landmark, index) => (
          <li key={index}>
            <h3>{landmark.name}</h3>
            <p>{landmark.description}</p>
            <a
              href={landmark.location}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on map
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivitiesList;
