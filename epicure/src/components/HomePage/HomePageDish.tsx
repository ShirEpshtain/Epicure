import React from "react";
import { HomePageDish } from "../../interfaces/HomePageDish";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../ Assets /HomePage/HomePageDish.scss";

interface Props {
  dishesData: {
    dishes: HomePageDish[];
  };
}

const HomePageDishComponent: React.FC<Props> = ({ dishesData }) => {
  return (
    <div className="dishes-carousel-container">
      <Carousel
        showThumbs={false}
        showArrows={true}
        swipeable={true}
        emulateTouch={true}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={50}
        className="dishes-carousel"
      >
        {dishesData.dishes.map((dish: HomePageDish) => (
          <div key={dish.id} className="Carousel-dish-card">
            <img src={dish.image} alt={dish.name} className="Carousel-dish-image" />
            <h2 className="Carousel-dish-name">{dish.name}</h2>
            {/* Rendering ingredients using dangerouslySetInnerHTML */}
            <div
              className="Carousel-dish-ingredients"
              dangerouslySetInnerHTML={{
                __html: dish.ingredients.replace(/\n/g, "<br>"),
              }}
            /> <br/>
            <div className="dish-footer">
            <div className="icon-container">
              {dish.icons.map((icon: string, index: number) => (
                <img
                  key={index}
                  src={`../images/Icons/${icon}.svg`}
                  alt={icon}
                  className="Carousel-dish-icon"
                />
              ))}
            </div> 
            <h3 className="Carousel-dish-price">₪{dish.price}</h3>
            </div>
           
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomePageDishComponent;
