import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Restaurant } from "../interfaces/Restaurant";
import "../ Assets /RestaurantPage.scss";
import DishPageDesk from "./DishPageDesk";
import data from "../data/data.json";

interface Props {
  restaurantsData: { restaurants: Restaurant[] };
}

const RestaurantPage: React.FC<Props> = ({ restaurantsData }) => {
  // define for the responsive option
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDishId, setSelectedDishId] = useState<number>(0);

  const handleToggleDishPopup = (dishId: number) => {
    console.log('ass')
    setSelectedDishId(dishId);
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024); 
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { id } = useParams<{ id: string }>();
  const [selectedMeal, setSelectedMeal] = useState<"breakfast" | "lunch" | "dinner">("breakfast");

  const restaurant: Restaurant | undefined = restaurantsData.restaurants.find(
    (restaurant) => restaurant.id.toString() === id
  );

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const isOpenNow = () => {
    const currentDay = new Date().getDay();
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const todayOpeningHours = restaurant.openingHours[currentDay];
    return (
      todayOpeningHours &&
      todayOpeningHours.open !== null &&
      todayOpeningHours.close !== null &&
      todayOpeningHours.open <= currentTime &&
      todayOpeningHours.close >= currentTime
    );
  };

  const handleMealChange = (meal: "breakfast" | "lunch" | "dinner") => {
    setSelectedMeal(meal);
  };

  return (
    <div className="res-page-general">
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      <p className="res-page-res-name">{restaurant.name}</p>
      <p className="res-page-chef-name ">{restaurant.chef}</p>
      {isOpenNow() ? (
        <p className="res-page-clock">
          <img src="../../images/clock.svg " alt="" />{" "} 
          Open Now
        </p>
      ) : (
        <p className="res-page-clock ">
           <img src="../../images/clock.svg " alt="" />{" "} 
          Closed Now
        </p>
      )} <br/>
      <div className="meals-buttons">
        <button
          onClick={() => handleMealChange("breakfast")}
          className={selectedMeal === "breakfast" ? "active" : ""}
        >
          Breakfast
        </button>
        <button
          onClick={() => handleMealChange("lunch")}
          className={selectedMeal === "lunch" ? "active" : ""}
        >
          Lunch
        </button>
        <button
          onClick={() => handleMealChange("dinner")}
          className={selectedMeal === "dinner" ? "active" : ""}
        >
          Dinner
        </button>
        
      </div> 
      <div className="restaurant-dishes">
        {restaurant.dishes[selectedMeal].map((dish) => (
          <div className="restaurant-dish-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} />
            <div>
              <p className="res-page-crad-dish-name">
                {!isDesktop &&(
                  <Link to={`/restaurant/${restaurant.id}/dish/${selectedMeal}/${dish.id}`}>{dish.name}</Link>
                )} 
                {isDesktop && (
                  <p onClick={() => handleToggleDishPopup(dish.id)}>{dish.name}</p>
                )}
              </p>

              <p className="res-page-crad-dish-ingredients">{dish.ingredients}</p>

              {!isDesktop && (
                  <div className="price-line">
                  <p style={{fontSize: '13px', marginBottom:'8px'}}>₪</p>
                  <p className="res-page-card-price">{dish.price}</p>
                  <div className="line"></div>
                </div>
              )} 
              {isDesktop && (
                  <div className="price-line">
                  <p style={{fontSize: '13px', marginBottom:'8px'}}>₪</p>
                  <p className="res-page-card-price">{dish.price}</p>
                  <div className="line"></div>
                </div>
              )}
            
            </div>
          </div>
        ))}
      </div>
      <br /><br />
      <hr style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }} />

      {showPopup && (
          <DishPageDesk
              handleClose={() => handleToggleDishPopup(selectedDishId)}
              isOpen={showPopup}
              restaurantId={restaurant.id} 
              selectedMeal={selectedMeal} 
              dishId={selectedDishId}
              restaurantsData={data} 
            />
)}
    </div>
  );
};

export default RestaurantPage;












// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { Restaurant } from "../interfaces/Restaurant";
// import "../ Assets /RestaurantPage.scss";

// interface Props {
//   restaurantsData: { restaurants: Restaurant[] };
// }

// const RestaurantPage: React.FC<Props> = ({ restaurantsData }) => {
//   // define for the responsive option
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
//   const [showPopup, setShowPopup] = useState(false);

//   const handleToggleDishPopup = () => {
//     setShowPopup(!showPopup);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 1024); 
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const { id } = useParams<{ id: string }>();
//   const [selectedMeal, setSelectedMeal] = useState<"breakfast" | "lunch" | "dinner">("breakfast");

//   const restaurant: Restaurant | undefined = restaurantsData.restaurants.find(
//     (restaurant) => restaurant.id.toString() === id
//   );

//   if (!restaurant) {
//     return <div>Restaurant not found</div>;
//   }

//   const isOpenNow = () => {
//     const currentDay = new Date().getDay();
//     const currentTime = new Date().toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//     const todayOpeningHours = restaurant.openingHours[currentDay];
//     return (
//       todayOpeningHours &&
//       todayOpeningHours.open !== null &&
//       todayOpeningHours.close !== null &&
//       todayOpeningHours.open <= currentTime &&
//       todayOpeningHours.close >= currentTime
//     );
//   };

//   const handleMealChange = (meal: "breakfast" | "lunch" | "dinner") => {
//     setSelectedMeal(meal);
//   };

//   return (
//     <div className="res-page-general">
//       <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
//       <p className="res-page-res-name">{restaurant.name}</p>
//       <p className="res-page-chef-name ">{restaurant.chef}</p>
//       {isOpenNow() ? (
//         <p className="res-page-clock">
//           <img src="../../images/clock.svg " alt="" />{" "} 
//           Open Now
//         </p>
//       ) : (
//         <p className="res-page-clock ">
//            <img src="../../images/clock.svg " alt="" />{" "} 
//           Closed Now
//         </p>
//       )} <br/>
//       <div className="meals-buttons">
//         <button
//           onClick={() => handleMealChange("breakfast")}
//           className={selectedMeal === "breakfast" ? "active" : ""}
//         >
//           Breakfast
//         </button>
//         <button
//           onClick={() => handleMealChange("lunch")}
//           className={selectedMeal === "lunch" ? "active" : ""}
//         >
//           Lunch
//         </button>
//         <button
//           onClick={() => handleMealChange("dinner")}
//           className={selectedMeal === "dinner" ? "active" : ""}
//         >
//           Dinner
//         </button>
//       </div> 
//       <div className="restaurant-dishes">
//         {restaurant.dishes[selectedMeal].map((dish) => (
//           <div className="restaurant-dish-card" key={dish.id}>
//             <img src={dish.image} alt={dish.name} />
//             <div>
//               <p className="res-page-crad-dish-name">
//                   <Link to={`/restaurant/${restaurant.id}/dish/${selectedMeal}/${dish.id}`}>{dish.name}</Link>
//               </p>
//               <p className="res-page-crad-dish-ingredients">{dish.ingredients}</p>

//               {!isDesktop && (
//                   <div className="price-line">
//                   <p style={{fontSize: '13px', marginBottom:'8px'}}>₪</p>
//                   <p className="res-page-card-price">{dish.price}</p>
//                   <div className="line"></div>
//                 </div>
//               )} 
//               {isDesktop && (
//                   <div className="price-line">
//                   <p style={{fontSize: '13px', marginBottom:'8px'}}>₪</p>
//                   <p className="res-page-card-price">{dish.price}</p>
//                   <div className="line"></div>
//                 </div>
//               )}
            
//             </div>
//           </div>
//         ))}
//       </div>
//       <br /><br />
//       <hr style={{ border: "1px solid rgba(0, 0, 0, 0.05)" }} />
//     </div>
//   );
// };

// export default RestaurantPage;


