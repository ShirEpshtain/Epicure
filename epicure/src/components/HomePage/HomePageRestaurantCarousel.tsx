import React, { useEffect, useState } from "react";
import { Restaurant } from "../../interfaces/Restaurant";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../ Assets /HomePage/HomePageRestaurantCarousel.scss";
import { Link } from 'react-router-dom';

interface Props {
  restaurantsData: {
    restaurants: Restaurant[];
  };
}

const HomePageRestaurantCarousel: React.FC<Props> = ({ restaurantsData }) => {
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
  
  return (
    <div className='headline-restaurant-hub-div'>
      <div className="restaurant-hub-div">
        <div className="custom-carousel-container">
          {restaurantsData.restaurants.map((restaurant: Restaurant) => (
            <div key={restaurant.id} className="custom-carousel-item">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="Carousel-restaurant-image"
              />
              <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
                <h2 className="Carousel-restaurant-name">{restaurant.name}</h2>
              </Link>
              <p className="Carousel-chef-name">{restaurant.chef}</p>
              {isDesktop && (
                <div className="Carousel-rating">
                 {renderRatingStars(restaurant.rating)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageRestaurantCarousel;

