import React from 'react';
import {
  faBookmark,
  faThumbsDown,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cardFooter.scss';

const CardFooter = () => {
  return (
    <div className='card-footer'>
      <div className='footer-content'>
        <div className='footer-props'>
          <div className='footer-props-item'>
            <span className='footer-item-icon'>
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            <span className='footer-item-content'>Like</span>
          </div>
          <div className='footer-props-item'>
            <span className='footer-item-icon'>
              <FontAwesomeIcon icon={faThumbsDown} />
            </span>
            <span className='footer-item-content'>Dislike</span>
          </div>
          <div className='footer-props-item'>
            <span className='footer-item-icon'>
              <FontAwesomeIcon icon={faBookmark} />
            </span>
            <span className='footer-item-content'>Bookmark</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
