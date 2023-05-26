import Modal from 'components/Modal/Modal';
import {SuccessImgWrapper, Text } from './SuccessModal.styled';
import {ReactComponent as RecipeBook} from '../../../images/svg/recipeBook.svg'

export const SuccessModal = ({ onClose }) => {
  
  return (
    <Modal className="logoutModal" onClose={onClose}>
        <Text>Your recipe is successfuly added </Text>
        <SuccessImgWrapper>
          <RecipeBook />
        </SuccessImgWrapper>
    </Modal>
  );
};
