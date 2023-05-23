import { ReactComponent as DeleteBtn } from 'images/svg/cross.svg';
import {
  OneItem,
  ImageWrapper,
  Title,
  MeasureWrapper,
  Delete,
} from './ShoppingList.styled';

export const IngredientItem = ({ ingredient, handleDelete }) => {
  const {id, ttl, measure, thb} = ingredient;

  return (
    <OneItem key={id}>
      <ImageWrapper>
        <img src={thb} alt="ttl" />
      </ImageWrapper>
      <Title>{ttl}</Title>
      <MeasureWrapper>
        <p>{measure}</p>
      </MeasureWrapper>
      <Delete type="button" onClick={() => handleDelete(id)}>
        <DeleteBtn />
      </Delete>
    </OneItem>
  );
};
