import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';

const WatchlistBtn = (props) => {
  const { className, iconName, btnText, onIconBtnClick } = props;

  useEffect(() => {
    console.log('Inside WatchlistBtn.js!');
  }, []);

  return (
    <button className={className} onClick={onIconBtnClick}>
      <i>
        <FontAwesomeIcon icon={iconName} />
      </i>
      <span>{btnText}</span>
    </button>
  );
};

export default WatchlistBtn;
