import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import recipe from 'data/recipes.json';
import { IngredientItem } from './IngredientItem';
import {
  ShoppingListContainer,
  Head,
  HeadWrapper,
  IngredientsList,
} from './ShoppingList.styled';

export const ShoppingList = () => {

  let oneRecipe = recipe[25].ingredients;

  const randomNumber = Math.random().toString();

  const handleDelete = _id => {

    // console.log(_id);

  };

  return (
    <>
      <PageTitleSection text="Shopping list" />
      <ShoppingListContainer>
        <Head>
          <p>Products</p>
          <HeadWrapper>
            <p>Number</p>
            <p>Remove</p>
          </HeadWrapper>
        </Head>
        <IngredientsList>
          {oneRecipe.map(({ id, measure }) => (
            <IngredientItem
              id={id}
              measure={measure}
              handleDelete={handleDelete}
              key={`${id.$oid}${randomNumber}`}
            />
          ))}
        </IngredientsList>
      </ShoppingListContainer>
    </>
  );
};
