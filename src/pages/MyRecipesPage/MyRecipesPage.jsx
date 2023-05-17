import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';

const MyRecipesPage = () => {
  return (
    <>
      <PageTitleSection text={'My recipes'} />
      <MyRecipesList />
    </>
  );
};

export default MyRecipesPage;
