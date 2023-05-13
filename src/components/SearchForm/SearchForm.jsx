import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { changeQuery } from 'redux/search/searchSlice';
import Button from '../Button/Button';
import { Form } from './SearchForm.style'

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleInputChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query === '') {
      toast.error(`Enter your query`, {
        position: 'top-center',
      });
      setSearchQuery();
    }

    setSearchQuery(query);
    dispatch(changeQuery(searchQuery));
    return navigate(`/search?query=${query}`);
  }

  return (
    // <SearchFormContainer>
    <Form
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        text="Search"
      />
    </Form>
    // </SearchFormContainer>
  );
};
