import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeQueryType } from 'redux/search/searchSlice';
import { useLocation } from 'react-router-dom';
const typesList = [{ searchType: 'title' }, { searchType: 'ingredients' }];

export const SearchTypeSelector = () => {
  const location = useLocation();
  console.log(location.state);
  const [currentValue, setCurrentValue] = useState(
    location.state?.from || 'title'
  );
  console.log(currentValue);
  const dispatch = useDispatch();

  const changeType = e => {
    const type = e.target.value;
    setCurrentValue(type);
    dispatch(changeQueryType(type));
  };

  return (
    <div >
      <select
        name="select"
        value={currentValue}
        onChange={e => changeType(e)}
      >
        {typesList.map(({ searchType }) => (
          <option
            key={searchType}
            value={searchType}
          >
            {searchType}
          </option>
        ))}
      </select>
      <label
        htmlFor="select"
      >
        Search by:
      </label>
    </div>
  );
};
