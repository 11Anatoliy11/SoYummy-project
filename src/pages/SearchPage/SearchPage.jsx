import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { useEffect } from 'react';
import {
  getRecipesByQuery,
  getRecipesByIngredient,
} from 'redux/search/searchOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryType, selectQuery } from 'redux/search/selectors';
import { SearchedRecipesList } from 'components/SearchedRecipesList/SearchedRecipesList';
import { Helmet } from 'react-helmet-async';
import { scrollToTop } from 'components/utils/scrollToTop';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/SearchTypeSelector/SearchTypeSelector';

const SearchPage = () => {
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) {
      return;
    }
    switch (queryType) {
      case 'title':
        dispatch(getRecipesByQuery(query));
        break;
      case 'ingredients':
        dispatch(getRecipesByIngredient(query));
        break;
      default:
        return;
    }

    scrollToTop();
  }, [dispatch, query, queryType]);

  return (
    <main>
      <div className="container">
        <Helmet>
          <title>Search</title>
        </Helmet>
        <MainPageTitle pageTitle="Search" className="main-title mb-[50px]" />
        <SearchForm />
        <SearchTypeSelector />
        <SearchedRecipesList />
      </div>
    </main>
  );
};

export default SearchPage;
