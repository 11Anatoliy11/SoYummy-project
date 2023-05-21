import PageTitleSection from 'components/PageTitleSection/PageTitleSection';
import { IngredientItem } from './IngredientItem';
import {
  ShoppingListContainer,
  Head,
  HeadWrapper,
  IngredientsList,
} from './ShoppingList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { shopRecipesSelector } from 'redux/shoppingRecipes/shopping';
import { deleteFromShopping } from 'redux/shoppingRecipes/shopping-operation';
import { getAllShopping } from 'redux/shoppingRecipes/shopping-operation';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';

export const ShoppingList = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector(shopRecipesSelector.getShoppingList);
  console.log(shoppingList)

  useEffect(() => {
    dispatch(getAllShopping());
  }, [dispatch]);


  const handleDelete = id => {
    dispatch(deleteFromShopping(id));
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
          {shoppingList?.map(ingredients => (
            <IngredientItem
              ingredient={ingredients}
              handleDelete={handleDelete}
              key={nanoid()}
            />
          ))}
        </IngredientsList>
      </ShoppingListContainer>
    </>
  );
};
