import React from "react";
import { Restaurant } from "../interfaces/Restaurant";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../ Assets /Restaurants/RestaurantCarousel.scss";

interface Props {
  restaurantsData: {
    restaurants: Restaurant[];
  };
}

const RestaurantCarousel: React.FC<Props> = ({ restaurantsData }) => {
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
            <div className="restaurant-card">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="restaurant-image"
              />
              <h2 className="restaurant-name">{restaurant.name}</h2>
              <p className="chef-name">{restaurant.chef}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RestaurantCarousel;
