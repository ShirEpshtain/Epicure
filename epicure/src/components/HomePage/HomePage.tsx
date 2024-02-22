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
import '../../ Assets /HomePage/HomePage.scss'

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
    <div className='main'>
        <HomepageSearchBox />
      <br />

      <div className='second-main' >
        <p className='homepageLabels'>POPULAR RESTAURANT IN EPICURE:</p>
        <RestaurantCarousel restaurantsData={restaurantsData} />
      <br/>

      <div >
        <Link to='/our-restaurants'>
        <button className='all-res-btn'>
          <img src="../images/HomePage/ResBtn.jpg" alt="" />
        </button>
        </Link>
      </div><br/><br/>

        <p className='homepageLabels'>SIGNATURE DISH OF:</p>
        <DishComponent dishesData={{ dishes }} />
   

      <Link to='/our-restaurants'>
        <button className='all-res-btn'>
          <img src="../images/HomePage/ResBtn.jpg" alt="" />
        </button>
        </Link>
    

      <Icons /><br />

      <div>
        <p className='homepageLabels'>CHEF OF THE WEEK:</p>
        <ChefComponent chefsData={chefs} /> 
      </div> <br/><br/><br/>
      
      <div style={{marginLeft:'10px'}}>
      <HomePageFooter/>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
