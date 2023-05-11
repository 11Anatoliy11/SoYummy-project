import {
  Image,
  Item,
  List,
  Number,
  Text,
  Title,
} from './RecipePreparation.module';

export default function RecipePreparation() {
  return (
    <div>
      <Title>RecipePreparation</Title>
      <List>
        <Item>
          <Number>1</Number>
          <Text>Season the salmon, then rub with oil.</Text>
        </Item>
      </List>
      <Image src="" alt="" width="100%" height="250px" />
    </div>
  );
}
