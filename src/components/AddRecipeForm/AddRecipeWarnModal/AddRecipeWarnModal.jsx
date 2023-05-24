import Modal from 'components/Modal/Modal';
import {Text } from './AddRecipeWarnModal.styled';

export const AddRecipeWarnModal = ({ onClose }) => {
  
  return (
    <Modal className="logoutModal" onClose={onClose}>
        <Text>Please fill in all fields </Text>
    </Modal>
  );
};
