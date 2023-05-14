import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQueryType } from 'redux/search/searchSlice';
import { useLocation } from 'react-router-dom';
import { SearchTypeSelectorContainer } from './SearchTypeSelector.styled'

const typesList = [{ searchType: 'Title' }, { searchType: 'Ingredients' }];

export const SearchTypeSelector = () => {
  const location = useLocation();
  console.log(location.state);
  const [currentValue, setCurrentValue] = useState(
    location.state?.from || 'Title'
  );
  console.log(currentValue);
  const dispatch = useDispatch();

  const changeType = e => {
    const type = e.target.value;
    setCurrentValue(type);
    dispatch(changeQueryType(type));
  };

  return (
    <SearchTypeSelectorContainer >
      <label className='SearchTypeSelectorLabel'
        htmlFor="select"
      >
        Search by:
      </label>
      <select className='SearchTypeSelectorSelect'
        name="select"
        value={currentValue}
        onChange={e => changeType(e)}
      >
        {typesList.map(({ searchType }) => (
          <option
            key={searchType}
            value={searchType}
            className='SearchTypeSelectorOption'
          >
            {searchType}
          </option>
        ))}
      </select>

    </SearchTypeSelectorContainer>
  );
};
