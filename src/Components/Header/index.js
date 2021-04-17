import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import headerLogo from '../../assets/images/logo-1366.png';
import profilePic from '../../assets/images/Rashmin_Photo.jpeg';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='header_content'>
        <div className='header_logo'>
          <a href='/'>
            <img src={headerLogo} alt='logo' />
          </a>
        </div>
        <div className='user_block'>
          <div className='user_avatar'>
            <a href='/'>
              <img src={profilePic} alt='logo' className='profilePic' />
            </a>
          </div>
        </div>
        <button className='menu_btn'>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};

export default Header;
