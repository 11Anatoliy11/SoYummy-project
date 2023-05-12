import { FavoriteRecipes } from 'components/FavoriteRecipes/FavoriteRecipes';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { scrollToTop } from 'components/utils/scrollToTop';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection'

const FavoritePage = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <Helmet>
        <title>My favorites</title>
      </Helmet>
      <PageTitleSection
        text={'Favorites'}
      />
      <FavoriteRecipes />
    </>
  );
};

export default FavoritePage;
