import React, { useEffect, useState } from 'react';
import { Restaurant } from '../interfaces/Restaurant';
import '../ Assets /Restuarants.scss'
import { Link } from 'react-router-dom';

interface Props {
  restaurantsData: { restaurants: Restaurant[] };
}

const Restaurants: React.FC<Props> = ({ restaurantsData }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); 
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
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

// render the starts rating 
const renderRatingStars = (rating: number) => {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = maxStars - fullStars;
  
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={`full-${i}`} src='../../images/HomePage/full-star.png' alt="Full Star" style={{ width: '30px', height: '30px' }}/>);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<img key={`empty-${i}`} src='../../images/HomePage/empty-star.png' alt="Empty Star" style={{ width: '30px', height: '30px' }}/>);
  }
  return stars;
};

// Render filtered restaurants
const renderRestaurants = () => {
  const filtered = filteredRestaurants();
  const restaurantsPerRow = isDesktop ? 3 : 1; 
  const rows = [];
  for (let i = 0; i < filtered.length; i += restaurantsPerRow) {
    const rowRestaurants = filtered.slice(i, i + restaurantsPerRow);
    rows.push(
      <div className="restaurant-row" key={i}>
        {rowRestaurants.map(restaurant => (
          <div className="restaurant-card" key={restaurant.id}>
            <img src={restaurant.image} alt={restaurant.name} />
            <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
              <p className="res-name-card">{restaurant.name}</p>
            </Link>
            <p className="res-chef-card">{restaurant.chef}</p>
            {isDesktop && (
              <div className="res-Carousel-rating">
                {renderRatingStars(restaurant.rating)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  return rows;
};


return (
  <div>
     {isDesktop && (
      <hr style={{ width: '100%', margin: 0 , marginTop:'10px', border: 'none', borderBottom: '1px solid #ccc'}}/> 
    )} <br/>
  <div className="restaurant-container">
    <p className='res-res-label'>RESTAURANTS</p>
    <div className="filter-buttons">
      <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
      <button onClick={() => setFilter('new')} className={filter === 'new' ? 'active' : ''}>New</button>
      <button onClick={() => setFilter('popular')} className={filter === 'popular' ? 'active' : ''}>Most Popular</button>
      <button onClick={() => setFilter('openNow')} className={filter === 'openNow' ? 'active' : ''}>Open Now</button>
      {isDesktop && (
        <button>Map View</button>
      )}
    </div>
    {/* {isDesktop && (
      <div className='filter-nav-desktop'>
          <ul>
            <li>Price Range</li>
            <li>Distance</li>
            <li>Rating</li>
          </ul>
      </div>
    )} */}

    <div className="restaurant-grid">
      {renderRestaurants()}
    </div>
  </div> <br/><br/><br/>
  {isDesktop && (
      <hr style={{ width: '100%', margin: 0 , marginTop:'10px', border: 'none', borderBottom: '1px solid #ccc'}}/> 
    )} <br/>
  </div>
);
};

export default Restaurants;