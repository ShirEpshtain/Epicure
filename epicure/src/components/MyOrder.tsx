// import React, { useEffect, useState } from "react";
// import { useOrder } from "../contexts/OrderContext";
// import "../ Assets /MyOrder.scss";

// interface MyOrderProps {
//   handleClose: () => void;
// }

// const MyOrder: React.FC<MyOrderProps> = ({ handleClose }) => {
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 1024);
//     };
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const { order } = useOrder();
//   const isEmptyOrder = order.length === 0;
//   const popupHeight = 400;

//   const uniqueRestaurantNames = Array.from(
//     new Set(order.map((item) => item.restaurantName))
//   );

//   // Calculate total price
//   const totalPrice = order.reduce((total, item) => {
//     return total + (item.dishPrice * item.dishQuantity);
//   }, 0);

//   return (
//     <div className="popup" style={{ height: `${popupHeight}px` }}>
//       <div className="my-order-content" onClick={(e) => e.stopPropagation()}>
//         {!isEmptyOrder && <p className="my-order-title">MY ORDER</p>}
//         <div className="order-list" style={{ maxHeight: `${popupHeight - 50}px`, overflowY: 'auto' }}>
//           {isEmptyOrder ? (
//             <div className="empty-bag-container">
//               <img
//                 src={`${process.env.PUBLIC_URL}/images/emptyBag.png`}
//                 alt="Empty Bag"
//                 className="empty-bag-image"
//               />
//             </div>
//           ) : (
//             uniqueRestaurantNames.map((restaurantName, index) => (
//               <div key={index}>
//                 <h2 className="order-restaurant-name">{restaurantName}</h2> <br/>
//                 <ul>
//                   {order
//                     .filter((item) => item.restaurantName === restaurantName)
//                     .map((item, index) => (
//                       <li key={index} className="dish-card">
//                         <div>
//                           <img
//                             className="order-dish-img"
//                             src={item.dishImage}
//                             alt={item.dishName}
//                           />
//                         </div>
//                         <div >
//                           <h2 className="order-dish-name">
//                             <span className="order-dish-quantity">
//                               {item.dishQuantity}x
//                             </span>{" "}
//                             {item.dishName}{" "}
//                           </h2>
//                           <p className="order-dish-changes">
//                             {item.dishSide} | {item.dishChanges.join(", ")}
//                           </p>
//                         </div>

//                         <div className="price-container">
//                           <p className="currency-sign">₪</p>
//                           <p className="order-dish-price">{item.dishPrice}</p>
//                         </div>

//                       </li>
//                     ))}
//                 </ul>
//               </div>
//             ))
//           )} <br/><br/>
//              {!isEmptyOrder && (
//           <div className="total">
//             <p>TOTAL - ₪{totalPrice.toFixed(2)}</p>
//           </div>
//         )}
//             {!isEmptyOrder && (
//              <button className="checkout-btn">CHECKOUT</button>
//         )} <br/><br/>
//         {isDesktop && (
//           <div>
//             <button className="Order-history"> ORDER HISTORY</button>
//           </div>
//         )}

//         </div>
//       </div>
//       <div className="overlay" onClick={handleClose}></div>
//     </div>
//   );
// };

// export default MyOrder;

import React, { useEffect, useState } from "react";
import { useOrder } from "../contexts/OrderContext";
import "../ Assets /MyOrder.scss";

interface MyOrderProps {
  handleClose: () => void;
}

const MyOrder: React.FC<MyOrderProps> = ({ handleClose }) => {
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

  const { order } = useOrder();
  const isEmptyOrder = order.length === 0;
  const popupHeight = 400;

  const uniqueRestaurantNames = Array.from(
    new Set(order.map((item) => item.restaurantName))
  );

  // Calculate total price
  const totalPrice = order.reduce((total, item) => {
    return total + item.dishPrice * item.dishQuantity;
  }, 0);

  return (
    <div className="popup" style={{ height: `${popupHeight}px` }}>
      <div className="my-order-content" onClick={(e) => e.stopPropagation()}>
        {!isEmptyOrder && !isDesktop && (
          <p className="my-order-title">MY ORDER</p>
        )}
        {!isEmptyOrder && isDesktop && (
          <p className="my-order-title">YOUR ORDER</p>
        )}
        <div
          className="order-list"
          style={{ maxHeight: `${popupHeight - 50}px`, overflowY: "auto" }}
        >
          {isEmptyOrder ? (
            <div className="empty-bag-container">
              <img
                src={`${process.env.PUBLIC_URL}/images/emptyBag.png`}
                alt="Empty Bag"
                className="empty-bag-image"
              />
            </div>
          ) : (
            uniqueRestaurantNames.map((restaurantName, index) => (
              <div key={index}>
                <h2 className="order-restaurant-name">{restaurantName}</h2>{" "}
                <br />
                <ul>
                  {order
                    .filter((item) => item.restaurantName === restaurantName)
                    .map((item, index) => (
                      <li key={index} className="dish-card">
                        <div>
                          <img
                            className="order-dish-img"
                            src={item.dishImage}
                            alt={item.dishName}
                          />
                        </div>
                        <div>
                          <h2 className="order-dish-name">
                            <span className="order-dish-quantity">
                              {item.dishQuantity}x
                            </span>{" "}
                            {item.dishName}{" "}
                          </h2>
                          <p className="order-dish-changes">
                            {item.dishSide} | {item.dishChanges.join(", ")}
                          </p>
                        </div>

                        <div className="price-container">
                          <p className="currency-sign">₪</p>
                          <p className="order-dish-price">{item.dishPrice}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))
          )}{" "}
      
                      
          {isDesktop && (
            <div>
              <hr style={{width: '30%'}}/>
            <p className="desk-comment-label"> Add A Comment </p>
            <input type="text" className="desk-input-comment" placeholder="Special requests, allergies, detary restrictions, etc."></input>
            </div>
          )}  <br />
          <br />

          {!isEmptyOrder && !isDesktop && (
            <div className="total">
              <p>TOTAL - ₪{totalPrice.toFixed(2)}</p>
            </div>
          )}
          <div className="div-checkout-order-history">
            {!isEmptyOrder && !isDesktop && (
              <button className="checkout-btn">CHECKOUT</button>
            )}

            {!isEmptyOrder && isDesktop && (
              <button className="checkout-btn">CHECKOUT  ₪{totalPrice}</button>
            )}

            {isDesktop && (
              <div>
                <button className="Order-history"> ORDER HISTORY</button>
              </div>
            )}
          </div>
          <br />
        </div>
      </div>
      <div className="overlay" onClick={handleClose}></div>
    </div>
  );
};

export default MyOrder;
