import {
  Checkbox,
  Head,
  HeadText,
  Ingredient,
  IngredientTitle,
  Item,
  Wrapper,
  Number,
} from './RecipeIngredientsList.module';

export default function RecipeIngredientsList() {
  return (
    <div>
      <Head>
        <HeadText>Ingredients</HeadText>
        <Wrapper>
          <HeadText>Number</HeadText>
          <HeadText>Add to list</HeadText>
        </Wrapper>
      </Head>
      {/* Здесь мапнуть список ингридиентов */}
      <div>
        <Item>
          <Ingredient>
            <img src="#" alt="" width="65px" height="65px" />
            <IngredientTitle>Salmon</IngredientTitle>
          </Ingredient>
          <Wrapper>
            <Number>2 chopped</Number>
            <Checkbox></Checkbox>
          </Wrapper>
        </Item>
      </div>
    </div>
  );
}
