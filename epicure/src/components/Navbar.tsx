import React from 'react';
import '../ Assets /Navbar/Navbar.scss'; 


const Navbar: React.FC = () => {
  const path = '../images/Navbar/'

  return (
    <nav className="navbar">
      <div className="left-item">
        <img src= {`${path}Menu.svg`} alt="Hamburger" />
      </div>
      <div className="center-item">
        <img src= {`${path}About.svg`}alt="About" />
      </div>
      <div className="right-items">
        <img src= {`${path}Search.svg`} alt="Search" />
        <img src= {`${path}Vector.svg`} alt="Vector" />
        <img src= {`${path}Bag.svg`} alt="Bag" />
      </div>
    </nav>
  );
};

export default Navbar;
