import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WatchlistBtn = (props) => {
  const { className, iconName, btnText, onIconBtnClick } = props;

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
