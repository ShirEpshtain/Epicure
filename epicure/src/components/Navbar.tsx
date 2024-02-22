import React, { useState, useEffect } from 'react';
import '../ Assets /Navbar/Navbar.scss';
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom';
import { useOrder } from '../contexts/OrderContext';
import MyOrder from './MyOrder';
import SearchComponent from './Search';

const Navbar: React.FC = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const { order } = useOrder();
  const [orderItemCount, setOrderItemCount] = useState(0);
  const [showMyOrder, setShowMyOrder] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (order) {
      let totalItems = 0;
      order.forEach((item) => {
        totalItems += item.dishQuantity;
      });
      setOrderItemCount(totalItems);
    }
  }, [order]);

  const handleToggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCloseSideMenu = () => {
    setShowSideMenu(false);
  };

  const handleToggleMyOrder = () => {
    setShowMyOrder(!showMyOrder);
  };

  const handleToggleSearchBox = () => {
    setShowSearch(!showSearch);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <nav>
  
    {isDesktop && (
        <div className='desk-nav'>
        <div className="left-items-desk">
          <Link to="/home">
            <img
              style={{ marginBottom: '-5px', marginLeft: '85px' }}
              src={`${process.env.PUBLIC_URL}/images/Navbar/About.svg`}
              alt="About"
            />
            <button
              className={`epc-desk-btn ${activeButton === 'epicure' ? 'active' : ''}`}
              style={{ border: 'none', background: 'none' }}
              onClick={() => handleButtonClick('epicure')}
            >
              EPICURE
            </button>
          </Link>

          <Link to="/our-restaurants">
            <button
              className={`desk-btn ${activeButton === 'restaurants' ? 'active' : ''}`}
              style={{ border: 'none', background: 'none' }}
              onClick={() => handleButtonClick('restaurants')}
            >
              Restaurants
            </button>
          </Link>

          <Link to="/our-chefs">
            <button
              className={`desk-btn ${activeButton === 'chefs' ? 'active' : ''}`}
              style={{ border: 'none', background: 'none' }}
              onClick={() => handleButtonClick('chefs')}
            >
              Chefs
            </button>
          </Link>
        </div>

          <div className="right-items">
          <img src={`${process.env.PUBLIC_URL}/images/Navbar/Vector.svg`} alt="Vector" />

          <button
            onClick={handleToggleSearchBox}
            style={{ border: 'none', background: 'none', position: 'relative' }}
          >
            <img src={`${process.env.PUBLIC_URL}/images/Navbar/Search.svg`} alt="Search" />
          </button>

          <button
            onClick={handleToggleMyOrder}
            style={{ border: 'none', background: 'none', position: 'relative' }}
          >
            <img src={`${process.env.PUBLIC_URL}/images/Navbar/Bag.svg`} alt="Bag" />
            {/* {orderItemCount > 0 && <span className="order-item-count">{orderItemCount}</span>} */}
          </button>
          </div>
          </div>
      )}

      {!isDesktop && (
        <div className='nav-mobile'>
        <div className="left-item">
          <button onClick={handleToggleSideMenu} style={{ border: 'none', background: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/Navbar/Menu.svg`} alt="Hamburger" />
          </button>
        </div>

        <div className="center-item">
        <Link to="/home">
          <button style={{ border: 'none', background: 'none' }}>
            <img src={`${process.env.PUBLIC_URL}/images/Navbar/About.svg`} alt="About" />
          </button>
        </Link>
        </div>

        <div className="right-items">
        <img src={`${process.env.PUBLIC_URL}/images/Navbar/Vector.svg`} alt="Vector" />

        <button
          onClick={handleToggleSearchBox}
          style={{ border: 'none', background: 'none', position: 'relative' }}
        >
          <img src={`${process.env.PUBLIC_URL}/images/Navbar/Search.svg`} alt="Search" />
        </button>

        <button
          onClick={handleToggleMyOrder}
          style={{ border: 'none', background: 'none', position: 'relative' }}
        >
          <img src={`${process.env.PUBLIC_URL}/images/Navbar/Bag.svg`} alt="Bag" />
          {/* {orderItemCount > 0 && <span className="order-item-count">{orderItemCount}</span>} */}
        </button>
      </div>
        </div>
)}
    

      {showSideMenu && <SideMenu handleClose={handleCloseSideMenu} isOpen={showSideMenu} />}
      {showMyOrder && <MyOrder handleClose={handleToggleMyOrder} />}
      {showSearch && <SearchComponent handleClose={handleToggleSearchBox} isOpen={showSearch} />}
 
    </nav>
  );
};

export default Navbar;


