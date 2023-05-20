import { useState } from 'react';

import ingredientsData from '../../mocks/ingredients.json';

import {
  Checkbox,
  Head,
  HeadText,
  Ingredient,
  IngredientTitle,
  Item,
  Wrapper,
  Measure,
  ItemWrapper,
  List,
  Image,
} from './RecipeIngredientsList.styled';
// import { useSelector } from 'react-redux';
// import { recipeSelector } from 'redux/recipes/recipe-select';
// import { shopRecipesSelector } from 'redux/shoppingRecipes/shopping';

export default function RecipeIngredientsList({ requiredIngredients }) {
  // eslint-disable-next-line no-unused-vars
  const [allIngredient, setAllIngredient] = useState(ingredientsData);
  const [shoppingList, setShoppingList] = useState([]);
  // console.log(`🚀 ~ RecipeIngredientsList ~ shoppingList:`, shoppingList);

  const handleCheckboxChange = (id, measure) => {
    const ingredient = allIngredient.find(({ _id }) => _id.$oid === id.$oid);
    const { ttl, thb, desc } = ingredient;
    const item = { id: id.$oid, measure, ttl, thb, desc };

    if (shoppingList.some(item => item.id === id.$oid)) {
      return setShoppingList(shoppingList.filter(item => item.id !== id.$oid));
    }

    setShoppingList([...shoppingList, item]);
  };

  // const ingredients = useSelector(recipeSelector.getIngredientList);
  // console.log(`🚀 ~ RecipeIngredientsList ~ ingredients:`, ingredients);
  // const shoppingListNew = useSelector(shopRecipesSelector.getShoppingList);
  // console.log(`🚀 ~ RecipeIngredientsList ~ shoppingList:`, shoppingListNew);

  return (
    <>
      <Head>
        <HeadText>Ingredients</HeadText>
        <Wrapper>
          <HeadText>Number</HeadText>
          <HeadText>Add to list</HeadText>
        </Wrapper>
      </Head>
      <List>
        {requiredIngredients.map(({ id, measure }) => {
          const { ttl, thb, desc } = allIngredient.find(
            ({ _id }) => _id.$oid === id.$oid
          );
          return (
            <Item key={id.$oid}>
              <Ingredient>
                <Image src={thb} alt={desc} />
                <IngredientTitle>{ttl}</IngredientTitle>
              </Ingredient>
              <ItemWrapper>
                <Measure>{measure}</Measure>
                <Checkbox
                  type="checkbox"
                  checked={shoppingList.some(item => item.id === id.$oid)}
                  onChange={() => handleCheckboxChange(id, measure)}
                />
              </ItemWrapper>
            </Item>
          );
        })}
      </List>
    </>
  );
}
