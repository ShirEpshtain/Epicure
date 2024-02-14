// Navbar.tsx
import React, { useState } from 'react';
import '../ Assets /Navbar/Navbar.scss'; 
import SideMenu from './SideMenu';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleToggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleCloseSideMenu = () => {
    setShowSideMenu(false); 
  };

  return (
    <nav className="navbar">

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
         <img src={`${process.env.PUBLIC_URL}/images/Navbar/Search.svg`} alt="Search" /> 
        <img src={`${process.env.PUBLIC_URL}/images/Navbar/Vector.svg`} alt="Vector" />

        <Link to="/my-order">
        <button style={{ border: 'none', background: 'none' }}>
        <img src={`${process.env.PUBLIC_URL}/images/Navbar/Bag.svg`} alt="Bag" />
        </button>
        </Link>
      </div>

      
    {showSideMenu && <SideMenu  handleClose={handleCloseSideMenu} isOpen={showSideMenu} />} 

    </nav>
  );
};

export default Navbar;
