import { AddRecipeForm } from 'components/AddRecipeForm/AddRecipeForm';
import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import { PopularRecipes } from 'components/PopularRecipes/PopularRecipes';
import { WrapperAddRecipes } from './AddRecipesPage.styled';

const AddRecipesPage = () => {

  return (
    <>
      <PageTitleSection text="Add recipe" />
      <WrapperAddRecipes>
        <AddRecipeForm />
        <PopularRecipes />
      </WrapperAddRecipes>
    </>);
};

export default AddRecipesPage;
