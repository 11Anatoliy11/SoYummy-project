import ingredients from 'data/ingredients.json';
import { ReactComponent as DeleteBtn } from 'images/svg/cross.svg';
import {
  OneItem,
  ImageWrapper,
  Title,
  MeasureWrapper,
  Delete,
} from './ShoppingList.styled';

export const IngredientItem = ({ id, measure, handleDelete }) => {
  const { _id, ttl, thb } = ingredients.find(el => el._id.$oid === id.$oid);
  //   console.log(ingredient);

  const deleteIngredient = id => {
    handleDelete(id);
  };

  return (
    <OneItem key={_id.$oid}>
      <ImageWrapper>
        <img src={thb} alt="ttl" />
      </ImageWrapper>
      <Title>{ttl}</Title>
      <MeasureWrapper>
        <p>{measure}</p>
      </MeasureWrapper>
      <Delete type="button" onClick={() => deleteIngredient(_id.$oid)}>
        <DeleteBtn />
      </Delete>
    </OneItem>
  );
};
