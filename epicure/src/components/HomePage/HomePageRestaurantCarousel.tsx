import React from "react";
import { Restaurant } from "../../interfaces/Restaurant";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../ Assets /HomePage/HomePageRestaurantCarousel.scss";
import { Link } from 'react-router-dom';

interface Props {
  restaurantsData: {
    restaurants: Restaurant[];
  };
}

const HomePageRestaurantCarousel: React.FC<Props> = ({ restaurantsData }) => {
  return (
    <div className="restaurant-carousel-container">
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
        {restaurantsData.restaurants.map((restaurant: Restaurant) => (
          <div key={restaurant.id} >
            <div className="Carousel-restaurant-card">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="Carousel-restaurant-image"
              />
              <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
                 <h2 className="Carousel-restaurant-name">{restaurant.name}</h2>
              </Link>
              <p className="Carousel-chef-name">{restaurant.chef}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePageRestaurantCarousel;
