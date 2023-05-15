import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQueryType } from 'redux/search/searchSlice';
import { useLocation } from 'react-router-dom';
import { SearchTypeSelectorContainer } from './SearchTypeSelector.styled';
import { ReactComponent as СhevronIcon } from 'images/svg/chevron.svg';

const typesList = [{ searchType: 'Title' }, { searchType: 'Ingredients' }];

const CustomSelect = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="CustomSelect">
      <div className={`CustomSelectValue ${isOpen ? 'isOpen' : ''}`} onClick={toggleSelect}>
        {value}
        <СhevronIcon style={{ fill: 'none' }} className="CustomSelectArrow" />
      </div>
      {isOpen && (
        <div className="CustomSelectOptions">
          {options.map(({ searchType }) => (
            <div
              key={searchType}
              className="CustomSelectOption"
              onClick={() => handleOptionClick(searchType)}
            >
              {searchType}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const SearchTypeSelector = () => {
  const location = useLocation();
  const [currentValue, setCurrentValue] = useState(location.state?.from || 'Title');
  const dispatch = useDispatch();

  const changeType = (type) => {
    setCurrentValue(type);
    dispatch(changeQueryType(type));
  };

  return (
    <SearchTypeSelectorContainer>
      <label className="SearchTypeSelectorLabel" htmlFor="select">
        Search by:
      </label>
      <CustomSelect
        value={currentValue}
        onChange={changeType}
        options={typesList}
      />
    </SearchTypeSelectorContainer>
  );
};