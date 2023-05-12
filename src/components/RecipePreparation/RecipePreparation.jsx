import {
  Container,
  Image,
  Item,
  List,
  Number,
  Text,
  Title,
} from './RecipePreparation.module';

export default function RecipePreparation({ instructions, thumb, title }) {
  const instructionsArray = instructions.split('\r\n');
  console.log(instructionsArray);

  let counter = 0;

  return (
    <Container>
      <Title>Recipe Preparation</Title>
      <List>
        {instructionsArray.map((el, index) => {
          if (el.trim() === '') {
            return null;
          }
          counter += 1;
          return (
            <Item key={index}>
              <Number>{counter}</Number>
              <Text>{el}</Text>
            </Item>
          );
        })}
      </List>
      <Image src={thumb} alt={title} />
    </Container>
  );
}
