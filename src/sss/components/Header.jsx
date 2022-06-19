import React from 'react';
import headerIcon from "../images/header-icon.jpg";
import headerImage from "../images/lady.jpg";


const Header = () => {
  return ( 
    <header>
      <img className="header-icon" src={headerIcon} alt="headerImage" />
      <span className='header-text'> Learn Tech Skills For Free!</span>
      <img className="header-image" src={headerImage} alt="headerImage" />
    </header>
  );
}

export default Header;