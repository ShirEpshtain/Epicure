import React from 'react';
import { Restaurant } from '../../interfaces/Restaurant';
import { HomePageDish } from '../../interfaces/HomePageDish';
import { Chef } from '../../interfaces/Chef';
import RestaurantCarousel from './HomePageRestaurantCarousel';
import DishComponent from './HomePageDish';
import Icons from './HomePageIcons';
import ChefComponent from './HomePageChef';
import HomepageSearchBox from './HomePageSearchBox';
import HomePageFooter from './HomepageFooter';
import { Link } from 'react-router-dom';

interface Props {
  restaurantsData: {
    restaurants: Restaurant[];
    dishes: HomePageDish[];
    chefs: Chef[];
  };
}

const HomePage: React.FC<Props> = ({ restaurantsData }) => {
  const { restaurants, dishes, chefs } = restaurantsData;
  return (
    <div >
      <div>
        <HomepageSearchBox />
      </div>
      <br />
      <div style={{ position: "relative", left: "10px", fontWeight: "200"}}>
        <h2>POPULAR RESTAURANT IN EPICURE:</h2>
        <RestaurantCarousel restaurantsData={restaurantsData} />
      </div>
      <div style={{ position: "relative", left: "10px", fontWeight: "200"}}>
        <Link to='/our-restaurants'>
        <button style={{ border: 'none', background: 'none' }}>
          <img src="../images/HomePage/ResBtn.jpg" alt="" />
        </button>
        </Link>
      </div>
      <br />
      <div style={{ position: "relative", left: "10px", fontWeight: "200"}}>
        <h2>SIGNATURE DISH OF:</h2>
        <DishComponent dishesData={{ dishes }} />
      </div>
      <div style={{ position: "relative", left: "10px", fontWeight: "200"}}>
      <Link to='/our-restaurants'>
        <button style={{ border: 'none', background: 'none' }}>
          <img src="../images/HomePage/ResBtn.jpg" alt="" />
        </button>
        </Link>
      </div>
      <br />
      <Icons />
      <br />
      <div style={{ position: "relative", left: "20px", fontWeight: "200"}}>
        <h2 >CHEF OF THE WEEK:</h2>
        <ChefComponent chefsData={chefs} /> 
      </div> 
      <div style={{ position: "relative", left: "20px", fontWeight: "200"}}>
      {/* <ChefRestaurants chefs={chefs} /> */}
      <div style={{ position: "relative", left: "10px", fontWeight: "200"}}>
        <button onClick={() => console.log('res')} style={{ border: 'none', background: 'none' }}>
          {/* <img src="../images/HomePage/ResBtn.jpg" alt="" /> */}
        </button>
      </div> <br/>
      </div>
      <HomePageFooter></HomePageFooter>
    </div>
  );
};

export default HomePage;
