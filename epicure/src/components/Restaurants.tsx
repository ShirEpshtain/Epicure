import React, { useState } from 'react';
import { Restaurant } from '../interfaces/Restaurant';
import '../ Assets /Restuarants.scss'
import { Link } from 'react-router-dom';

interface Props {
  restaurantsData: { restaurants: Restaurant[] };
}

const Restaurants: React.FC<Props> = ({ restaurantsData }) => {
  const [filter, setFilter] = useState<string>('all');
  const { restaurants } = restaurantsData;

  // Filter restaurants based on the selected filter
const filteredRestaurants = () => {
  switch (filter) {
    case 'new':
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      return restaurants.filter(restaurant => {
        const openingDate = new Date(restaurant.openingDay);
        return openingDate >= sixMonthsAgo;
      });
    case 'popular':
      return restaurants.slice().sort((a, b) => b.rating - a.rating);
    case 'openNow':
      const currentDay = new Date().getDay();
      const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      return restaurants.filter(restaurant => {
        const todayOpeningHours = restaurant.openingHours[currentDay];
        return todayOpeningHours && todayOpeningHours.open !== null && todayOpeningHours.close !== null &&
          todayOpeningHours.open <= currentTime && todayOpeningHours.close >= currentTime;
      });
    default:
      return restaurants;
  }
};

 // Render filtered restaurants
 const renderRestaurants = () => {
  const filtered = filteredRestaurants();
  return filtered.map(restaurant => (
      <div className="restaurant-card" key={restaurant.id}>
        <img src={restaurant.image} alt={restaurant.name} />
        <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
        <h3>{restaurant.name}</h3>
        </Link>
        <p>{restaurant.chef}</p>
      </div>
  ));
};

return (
  <div className="restaurant-container">
    <h1>RESTAURANTS</h1>
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => setFilter('new')} className={filter === 'new' ? 'active' : ''}>New</button>
      <button onClick={() => setFilter('popular')} className={filter === 'popular' ? 'active' : ''}>Most Popular</button>
      <button onClick={() => setFilter('openNow')} className={filter === 'openNow' ? 'active' : ''}>Open Now</button>
    </div>

    <div className="restaurant-grid">
      {renderRestaurants()}
    </div>
  </div>
);
};

export default Restaurants;