import Modal from 'components/Modal/Modal';
import {Text } from './SuccessModal.styled';
import {ReactComponent as RecipeBook} from '../../../images/svg/recipeBook.svg'

export const SuccessModal = ({ onClose }) => {
  
  return (
    <Modal className="logoutModal" onClose={onClose}>
        <Text>Your recipe is successfuly added </Text>
        <RecipeBook width="450px"/>
    </Modal>
  );
};
