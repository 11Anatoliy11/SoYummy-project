import { MyRecipes } from 'components/MyRecipes/MyRecipes';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';

const MyRecipesPage = () => {
  return (
    <>
      <PageTitleSection text={'My recipes'} />
      <MyRecipes />
    </>
  );
};

export default MyRecipesPage;
