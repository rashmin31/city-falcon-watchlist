import { faFilter, faRedo } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown';
import WatchlistBtn from '../WatchlistBtn';
import './watchlistHeader.scss';

const WatchlistHeader = (props) => {
  const {
    languages,
    order,
    selectedLanguages,
    setLanguages,
    setSelectedLanguages,
    setSelectedOrder,
  } = props;

  const [openFilterPanel, setOpenFilterPanel] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [btnName, setBtnName] = useState(null);

  useEffect(() => {
    console.log('Inside WatchlistHeader.js!');
  }, []);

  const onFilterBtnClick = () => {
    setOpenFilterPanel(!openFilterPanel);
  };

  const onRefreshBtnClick = () => {
    window.location.reload();
  };
  const onDropdownBtnClick = () => {
    setOpenDropdown(!openDropdown);
  };

  const onBtnClick = (btnName) => {
    setBtnName(btnName);
  };

  const onCheckBoxClick = (key) => {
    setLanguages(
      languages.map((lang) =>
        lang.key === key
          ? {
              ...lang,
              isChecked: !lang.isChecked,
            }
          : lang
      )
    );
    if (btnName === 'languages') {
      if (selectedLanguages.includes(key)) {
        setSelectedLanguages((prevSelectedLanguages) => {
          return prevSelectedLanguages.filter((el) => el !== key);
        });
      } else {
        setSelectedLanguages((prevSelectedLanguages) => {
          return [...prevSelectedLanguages, key];
        });
      }
    } else if (btnName === 'order') {
      setSelectedOrder(key);
    }
  };

  return (
    <div className='watchlist_stories_header'>
      <div className='watchlist_stories_header_title'>Watchlist Name</div>
      <div className='watchlist_filter-panel'>
        <div className='filter_container'>
          <div className='filter_btn_content'>
            <WatchlistBtn
              className='refresh_btn btn'
              iconName={faRedo}
              btnText='Refresh'
              onIconBtnClick={onRefreshBtnClick}
            />
            <WatchlistBtn
              className={`filter_btn btn ${openFilterPanel ? 'active' : ''}`}
              iconName={faFilter}
              btnText='Filter'
              onIconBtnClick={onFilterBtnClick}
            />
          </div>
        </div>
      </div>
      {openFilterPanel ? (
        <div className='filter_panel'>
          <Dropdown
            panelValue='1 min'
            panelBtnLabel='autorefresh'
            dropdownLabel='Autorefresh'
          />
          <Dropdown
            panelValue='Top Rated'
            panelBtnLabel='order'
            dropdownLabel='Order:'
            options={order}
            openDropdown={openDropdown}
            onDropdownBtnClick={() => {
              onDropdownBtnClick();
              onBtnClick('order');
            }}
            btnName={btnName}
            onCheckBoxClick={onCheckBoxClick}
            showCheckBox={false}
          />
          <Dropdown
            panelValue='All Languages'
            panelBtnLabel='languages'
            dropdownLabel='Languages:'
            options={languages}
            openDropdown={openDropdown}
            onDropdownBtnClick={() => {
              onDropdownBtnClick();
              onBtnClick('languages');
            }}
            btnName={btnName}
            onCheckBoxClick={onCheckBoxClick}
            showCheckBox={true}
          />
          {/* Reset Button */}
          <button type='button' className='filter_panel-btn-reset reset-btn'>
            <p className='reset_btn-content'>reset</p>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WatchlistHeader;
