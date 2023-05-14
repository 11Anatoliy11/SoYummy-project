// import { useDispatch } from 'react-redux';
// import { logOut } from '../../../../redux/auth/authOperations';

import Modal from '../Modal/Modal';
import Button from 'components/Button/Button';
import { ButtonBox, Text } from './UserLogoutModal.styled';

export const UserLogoutModal = ({ onClose }) => {
  // const dispatch = useDispatch();

  // const onLogout = () => {
  //   dispatch(logOut());
  // };
  return (

      <Modal className="logoutModal">
      <Text>Are you sure you want to log out?</Text>
        <ButtonBox>
        <Button className="logoutBtn"
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
