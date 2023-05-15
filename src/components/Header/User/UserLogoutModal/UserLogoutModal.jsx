import { useDispatch } from 'react-redux';
import { logout } from '../../../../redux/auth/auth-operations';

import Modal from '../../../Modal/Modal';
import Button from 'components/Button/Button';
import { ButtonBox, Text } from './UserLogoutModal.styled';

export const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
    onClose();
  };
  return (
      <Modal className="logoutModal" onClose={onClose}>
      <Text>Are you sure you want to log out?</Text>
        <ButtonBox>
        <Button className="logoutBtn"
        onClick={onLogout}
        type="button"
        width="137px"
        height="49px"
        backgroundColor="var(--green-color)"
        border="none"
        borderRadius="6px"
        textColor="var(--background-color)"
        >
      Log out
      </Button>
      <Button className="cancelBtn"
        onClick={onClose}
        type="button"
        width="137px"
        height="49px"
        backgroundColor="var(--grey-color)"
        border="none"
        borderRadius="6px"
        textColor="var(--edit-modal-text-color)"
        >
      Cancel
      </Button>
        </ButtonBox>
        </Modal>

  );
};
