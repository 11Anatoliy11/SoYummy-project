import { useDispatch, useSelector } from 'react-redux';

import Food from '../../images/svg/food.svg';

import {
  addToShopping,
  deleteFromShopping,
} from 'redux/shoppingRecipes/shopping-operation';
import { shopRecipesSelector } from 'redux/shoppingRecipes/shopping';

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

export default function RecipeIngredientsList({
  requiredIngredients,
  recipeId,
}) {
  const ingredients = useSelector(shopRecipesSelector.getShoppingList);

  const dispatch = useDispatch();

  const handleCheckboxChange = (ingredientId, isChecked) => {
    const data = { recipeId, ingredientId };

    if (!isChecked) {
      dispatch(addToShopping(data));
    } else {
      dispatch(deleteFromShopping(ingredientId));
    }
  };

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
        {requiredIngredients.filter(it => !!it._id).map(({ _id, measure, ttl, desc, thb }) => {
          const isChecked = ingredients.some(item => item.id === _id);
          return (
            <Item key={_id}>
              <Ingredient>
                {/* {thb ? <div></div> : } */}
                <Image src={thb || Food} alt={desc} />
                <IngredientTitle>{ttl}</IngredientTitle>
              </Ingredient>
              <ItemWrapper>
                <Measure>{measure}</Measure>
                <Checkbox
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(_id, isChecked)}
                />
              </ItemWrapper>
            </Item>
          );
        })}
      </List>
    </>
  );
}
