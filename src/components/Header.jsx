import React from 'react';
import codingImage from "../images/coding-image.jpg";


const Header = () => {
  return ( 
    <header>
      <span className="header-icon">growing<span>Coders</span></span>
      <img src={codingImage} alt="headerImage" />
    </header>
  );
}

export default Header;