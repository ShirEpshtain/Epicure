import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Restaurant } from "../interfaces/Restaurant";
import "../ Assets /DishPage.scss";
import { useOrder } from '../contexts/OrderContext';

interface Props {
  restaurantsData: { restaurants: Restaurant[] };
}

const DishPage: React.FC<Props> = ({ restaurantsData}) => {
   

   // define for the responsive option
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

  const { addToOrder, order , clearOrder} = useOrder();

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSide, setSelectedSide] = useState<string>("");
  const [selectedChanges, setSelectedChanges] = useState<string[]>([]);

  const { restaurantId, mealType, dishId } = useParams<{
    restaurantId: string;
    mealType: string;
    dishId: string;
  }>();

  // Find the selected restaurant
  const selectedRestaurant = restaurantsData.restaurants.find(
    (restaurant) => restaurant.id.toString() === restaurantId
  );

  if (!selectedRestaurant) {
    return <div>Restaurant not found</div>;
  }

  // Find the selected dish based on the meal type and dish ID
  const selectedDishes =
    selectedRestaurant.dishes[
      mealType as keyof typeof selectedRestaurant.dishes
    ];
  const selectedDish = selectedDishes
    ? selectedDishes.find((dish) => dish.id.toString() === dishId)
    : undefined;

  if (!selectedDish) {
    return <div>Dish not found</div>;
  }

  const addToBagHandler = () => {
    if (order.length > 0) {
      const existingOrderRestaurantId = order[0].restaurantId;
      if (existingOrderRestaurantId !== restaurantId) {
        // If the user tries to add a dish from a different restaurant, prompt for confirmation
        const confirmation = window.confirm(`You can order only from one restaurant at a time. Do you want to change the order from ${order[0]?.restaurantName} to ${selectedRestaurant.name}?`);
        if (confirmation) {
          clearOrder();
          addToOrderHandler();
        }
        return;
      }
    }

    addToOrderHandler();
  };

  const addToOrderHandler = () => {
    // Add the dish details to the order
    const orderItem = {
      restaurantId: selectedRestaurant.id.toString(),
      restaurantName: selectedRestaurant.name,
      dishName: selectedDish.name,
      dishImage: selectedDish.image,
      dishQuantity: quantity,
      dishChanges: selectedChanges,
      dishSide: selectedSide,
      dishPrice: selectedDish.price * quantity,
    };

    addToOrder(orderItem);
  };

  // Render the selected dish
  return (
    
    <div className="dish-page-main">
    <div className="dish-popup-container">  
      <img
        className="dishPage-image"
        src={`${process.env.PUBLIC_URL}${selectedDish.image}`}
        alt={selectedDish.name}
      />
      <p className="dish-page-dish-name">{selectedDish.name}</p>
      <p className="dish-page-dish-ingredients">{selectedDish.ingredients}</p>
     
        {isDesktop && (
          <div>
             {selectedDish.icon.map((icon: string, index: number) => (
            <img
              key={index}
              src={`../../public/images/Icons/${icon}.svg`}
              alt={icon}
              className="Carousel-dish-icon"
            />
             ))}
          </div>
        )}

      <h3 className="dish-page-dish-price" style={{marginLeft: '15px'}}>₪{selectedDish.price}</h3><br />
      
      <div className="dish-page-second-container">
      <div>
        <p className="label-line">Choose a side</p><br/>
        <div className="dish-pages-all-sides">
          {selectedDish.sides.map((side, index) => (
            <div className="side-option" key={index}>
              <input
                type="radio"
                id={`side${index}`}
                name="side"
                value={side}
                onChange={() => setSelectedSide(side)}
              />
              <label htmlFor={`side${index}`}>{side}</label>
            </div>
          ))}
        </div>
      </div> <br/>

      <div>
        <p className="label-line">Changes:</p>
        <div className="dish-page-all-changes">
          {selectedDish.changes.map((change, index) => (
            <div className="change-option" key={index}>
              <input
                type="checkbox"
                id={`change${index}`}
                name="change"
                value={change}
                onChange={(e) => {
                  const selectedChange = e.target.value;
                  if (selectedChanges.includes(selectedChange)) {
                    setSelectedChanges((prev) =>
                      prev.filter((change) => change !== selectedChange)
                    );
                  } else {
                    setSelectedChanges((prev) => [...prev, selectedChange]);
                  }
                }}
              />
              <label htmlFor={`change${index}`}>
                <span className="checkbox"></span>
                {change}
              </label>
            </div>
          ))}
        </div>
      </div><br/>

      <div>
        <p className="label-line">Quantity:</p> <br />
        <div className="signs">
          <button onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
            -
          </button>
          <h1>{quantity}</h1>
          <button
            style={{ fontSize: "30px" }}
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
      </div>
      <br />

      <button className="add-to-bag-btn" onClick={addToBagHandler}>
        ADD TO BAG
      </button>
      <br />
      <br />
      <br />
      <hr style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }} />
    </div>
    </div>
  );
};

export default DishPage;
