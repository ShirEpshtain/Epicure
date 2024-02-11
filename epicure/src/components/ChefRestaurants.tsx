import React from 'react';
import { Chef } from '../interfaces/Chef';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../ Assets /ChefRestaurants.scss';

interface Props {
  chefs: Chef[];
}

const ChefRestaurants: React.FC<Props> = ({ chefs }) => {
  return (
    <div className="restaurant-carousel-container">
      {chefs.map((chef) => (
        <div key={chef.id} className="chef-restaurants-container" style={{ width: '100%' }}>
          <Carousel
            showThumbs={false}
            showArrows={true}
            swipeable={true}
            emulateTouch={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={50}
            className="restaurant-carousel"
          >
            {chef.restaurants.map((restaurant, index) => (
              <div key={index} className="restaurant-card">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="restaurant-image"
                />
                <h3 className="restaurant-name">{restaurant.name}</h3>
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default ChefRestaurants;
