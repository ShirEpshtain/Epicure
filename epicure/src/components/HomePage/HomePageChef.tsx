import React, { useState, useEffect } from 'react';
import { Chef } from '../../interfaces/Chef';
import '../../ Assets /HomePage/HomePageChef.scss';
import { Carousel } from 'react-responsive-carousel';

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
    <div>
      <div key={currentChef.id}>
        <img className="chef-image" src={currentChef.image} alt={currentChef.name} style={{ alignItems: 'center' }} />
        <div
          className="chef-description"
          dangerouslySetInnerHTML={{
            __html: currentChef.description.replace(/\n/g, '<br>'),
          }}
        />
        <br />
        <p style={{ position: 'relative', left: '10px', fontWeight: 200 }}>
          {currentChef.private}'S RESTAURANTS:
        </p>
      </div>
      <div className="restaurant-carousel-container">
        <div className="chef-restaurants-container" style={{ width: '100%' }}>
          <Carousel
            showThumbs={false}
            showArrows={true}
            swipeable={true}
            emulateTouch={true}
            infiniteLoop={true}
            centerMode={true}
            centerSlidePercentage={50}
            className="chef-restaurant-carousel"
          >
            {currentChef.restaurants.map((restaurant, index) => (
              <div key={index} className="chef-restaurant-card">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="chef-restaurant-image"
                />
                <h3 className="chef-restaurant-name">{restaurant.name}</h3>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HomePageChefComponent;
