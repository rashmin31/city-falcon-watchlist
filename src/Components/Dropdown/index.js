import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import './dropdown.scss';

const Dropdown = (props) => {
  const {
    panelValue,
    panelBtnLabel,
    dropdownLabel,
    options,
    openDropdown,
    onDropdownBtnClick,
    btnName,
    onCheckBoxClick,
    showCheckBox,
  } = props;

  useEffect(() => {
    console.log('Inside Dropdown.js!');
    return () => {
      console.log('Unmounting Dropdown.js!');
    };
  }, []);

  return (
    <div className='dropdown_panel'>
      <button className='dropdown_panel-btn'>
        <div className='dropdown_panel-btn-inner'>
          <p className='dropdown_panel-btn-value'>{panelValue}</p>
          <p className='dropdown_panel-btn-label'>{panelBtnLabel}</p>
        </div>
        <i className='dropdown_panel-arrow' onClick={onDropdownBtnClick}>
          {openDropdown && btnName === panelBtnLabel ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </i>
      </button>
      <div
        className={`dropdown_options ${
          openDropdown && btnName === panelBtnLabel
            ? 'show-' + panelBtnLabel
            : ''
        }`}
        id='options'
      >
        <div className='dropdown_options-panel'>
          <span className='dropdown_label'>{dropdownLabel}</span>
          <div className='dropdown_menu-list'>
            {options
              ? options.map((option) => (
                  <span
                    className='dropdown-item'
                    key={option.key}
                    onClick={() => onCheckBoxClick(option.key)}
                  >
                    {showCheckBox ? (
                      <span
                        className={`dropdown-checkbox ${
                          option.isChecked ? 'active' : ''
                        }`}
                      ></span>
                    ) : null}
                    <span
                      className='dropdown-checkbox-title'
                      value={option.key}
                    >
                      {option.val}
                    </span>
                  </span>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
