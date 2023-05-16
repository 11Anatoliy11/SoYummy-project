import {
  Image,
  Item,
  List,
  Number,
  Text,
  Title,
} from './RecipePreparation.module';

export default function RecipePreparation({ instructions, thumb, title }) {
  let instructionsArray = [];

  // Разделение инструкций по числам и символам
  const stepSeparatedInstructions = instructions.split(/^\d+[.)]\s*/gm);

  stepSeparatedInstructions.forEach(step => {
    if (step.trim() === '') {
      return;
    }

    // Разделение каждого шага по новым строкам
    const lineSeparatedSteps = step.split('\n').map(el => el.trim());
    instructionsArray = instructionsArray.concat(lineSeparatedSteps);
  });

  let counter = 0;

  return (
    <>
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
    </>
  );
}
