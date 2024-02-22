import React, { useEffect, useState } from "react";
import { HomePageDish } from "../../interfaces/HomePageDish";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../ Assets /HomePage/HomePageDish.scss";

interface Props {
  dishesData: {
    dishes: HomePageDish[];
  };
}

const HomePageDishComponent: React.FC<Props> = ({ dishesData }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="headline-dish-hub-div">
      <div className="dish-hub-div">
        <div className="dish-carousel-container">
          {dishesData.dishes.map((dish: HomePageDish) => (
            <div key={dish.id} className="custom-dish-carousel-item">
              <img
                src={dish.image}
                alt={dish.name}
                className="Carousel-dish-image"
              />
              <h2 className="Carousel-dish-name">{dish.name}</h2>
              {isDesktop ? (
                <>
                  <div className="dish-icon-container">
                    {dish.icons.map((icon: string, index: number) => (
                      <img
                        key={index}
                        src={`../images/Icons/${icon}.svg`}
                        alt={icon}
                        className="Carousel-dish-icon"
                      />
                    ))}
                  </div>
                  {/* <div className="Carousel-dish-ingredients">{dish.ingredients}</div> */}
                  <div
                    className="Carousel-dish-ingredients"
                    dangerouslySetInnerHTML={{
                      __html: dish.ingredients.replace("", "<br>"),
                    }}
                  />
                </>
              ) : (
                <>
                  <div
                    className="Carousel-dish-ingredients"
                    dangerouslySetInnerHTML={{
                      __html: dish.ingredients.replace(/\n/g, "<br>"),
                    }}
                  />
                  <div className="dish-icon-container">
                    {dish.icons.map((icon: string, index: number) => (
                      <img
                        key={index}
                        src={`../images/Icons/${icon}.svg`}
                        alt={icon}
                        className="Carousel-dish-icon"
                      />
                    ))}
                  </div>
                </>
              )}
              <div className="Price-container">
                <hr className="Price-divider" />
                <p className="Carousel-dish-price">₪{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageDishComponent;
