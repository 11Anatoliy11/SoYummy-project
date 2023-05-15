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
  Container,
} from './RecipeIngredientsList.module';

export default function RecipeIngredientsList({ requiredIngredients }) {
  const [allIngredient, setAllIngredient] = useState(ingredientsData);
  const [shoppingList, setShoppingList] = useState([]);
  console.log(`🚀 ~ RecipeIngredientsList ~ shoppingList:`, shoppingList);

  const handleCheckboxChange = (id, measure) => {
    console.log(`🚀 ~ handleCheckboxChange ~ id:`, id);
    const ingredient = allIngredient.find(({ _id }) => _id.$oid === id.$oid);
    const { ttl, thb, desc } = ingredient;
    const item = { id: id.$oid, measure, ttl, thb, desc };

    if (shoppingList.some(item => item.id === id.$oid)) {
      return setShoppingList(shoppingList.filter(item => item.id !== id.$oid));
    }

    setShoppingList([...shoppingList, item]);
  };

  return (
    <Container>
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
                <img src={thb} alt={desc} width="65px" height="65px" />
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
    </Container>
  );
}
