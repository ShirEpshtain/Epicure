import React, { useState, useEffect } from 'react';
import { Chef } from '../../interfaces/Chef';
import '../../ Assets /HomePage/HomePageChef.scss';

interface Props {
  chefsData: Chef[];
}

const HomePageChefComponent: React.FC<Props> = ({ chefsData }) => {
  const [currentChefIndex, setCurrentChefIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Check if it's Sunday and time is 12:00
      if (now.getDay() === 0 && now.getHours() === 12 && now.getMinutes() === 0) {
        setCurrentChefIndex(prevIndex => {
          // Reset index to 0 if it's at the last item in the array
          if (prevIndex === chefsData.length - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }
    }, 60000); // Check every minute
    return () => clearInterval(timer);
  }, [chefsData.length]);

  const currentChef = chefsData[currentChefIndex];

  if (!currentChef) {
    return <div>No chefs available</div>;
  }

  return (
    <div >
      <div key={currentChef.id}>
        <div className='chef-data'>
        <img className="chef-image" src={currentChef.image} alt={currentChef.name}/>
        <div
          className="chef-description"
          dangerouslySetInnerHTML={{
            __html: currentChef.description.replace(/\n/g, '<br>'),
          }}
        />
        </div>
        {/* <p className='chef-description'>{currentChef.description}</p> */}
        <br />
        <p className='chef-rests-label'>
          {currentChef.private}'S RESTAURANTS:
        </p>
      </div>
      <div className='headline-chef-hub-div'>
      <div className="homepage-chef-hub-div ">
      <div className="custom-homepage-chef-container">
            {currentChef.restaurants.map((restaurant, index) => (
              <div key={index} className="custom-chef-res-item">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="Carousel-chef-res-image"
                />
                <p className="Carousel-chef-res-name">{restaurant.name}</p>
              </div>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePageChefComponent;
