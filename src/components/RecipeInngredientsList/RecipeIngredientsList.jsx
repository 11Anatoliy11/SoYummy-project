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
  const [ingredient, setIngredient] = useState(ingredientsData);

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
          const { ttl, thb, desc } = ingredient.find(
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
                <Checkbox></Checkbox>
              </ItemWrapper>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}
