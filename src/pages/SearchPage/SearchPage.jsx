import { useEffect, useState } from 'react';
import {
  getRecipesByQuery,
  getRecipesByIngredient,
} from 'redux/search/searchOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryType, selectQuery } from 'redux/search/selectors';
import { SearchedRecipesList } from 'components/Search/SearchedRecipesList/SearchedRecipesList';
import { Helmet } from 'react-helmet-async';
import { scrollToTop } from 'components/utils/scrollToTop';
import { SearchForm } from 'components/Search/SearchForm/SearchForm';
import { SearchTypeSelector } from 'components/Search/SearchTypeSelector/SearchTypeSelector';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import { SearchPageContainer } from './SearchPage.styled';
import { Paginator } from 'components/Common'
import { selectSearchedRecipesCount } from 'redux/search/selectors';

const SearchPage = () => {

  
  const query = useSelector(selectQuery);
  const queryType = useSelector(selectQueryType);
  const [paginationPage, setPaginationPage] = useState(1);
  const [per_page] = useState(12);
  const total = useSelector(selectSearchedRecipesCount);
  const pagesCount = Math.trunc(total / per_page);

  const dispatch = useDispatch();

  const sendRuqest = (query) => {
    if (!query) {
      return;
    }
    const payload = { query: query, page: paginationPage, pageSize: per_page }
    switch (queryType) {
      case 'title':
        dispatch(getRecipesByQuery(payload));
        break;
      case 'Ingredients':
        dispatch(getRecipesByIngredient(payload));
        break;
      default:
        return;
    }
  }

  useEffect(() => {
    if (!query) {
      return;
    }
    scrollToTop();
    if (paginationPage !== 1) {
      setPaginationPage(1);
      return;
    }
    sendRuqest(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, query, queryType]);

  useEffect(() => {
    if (!query) {
      return;
    }
    scrollToTop();
    sendRuqest(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationPage, per_page]);

  return (
    <>
      <Helmet>
        <title>Search</title>
      </Helmet>
      < PageTitleSection
        text={'Search'}
      />
      <SearchPageContainer id="SearchPageContainer">
        <SearchForm />
        <SearchTypeSelector />
        <SearchedRecipesList />
        <Paginator parendContainerId="SearchPageContainer"
          currentPage={paginationPage}
          pagesCout={pagesCount}
          onPaginate={setPaginationPage} />
      </SearchPageContainer>
    </>

  );
};

export default SearchPage;
