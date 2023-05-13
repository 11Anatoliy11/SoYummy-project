// import { useDispatch } from 'react-redux';
// import { logOut } from '../../../../redux/auth/authOperations';
import { Wrapper, Button, ButtonBox, Text } from './UserLogoutModal.styled';

export const UserLogout = ({ onClose }) => {
  // const dispatch = useDispatch();

  // const onLogout = () => {
  //   dispatch(logOut());
  // };
  return (
    <Wrapper>
      <Text>Are you sure you want to log out?</Text>
        <ButtonBox>
          <Button

            // onClick={onLogout}
          >
            Log out
          </Button>
          <Button

            onClick={onClose}
          >
            Cancel
          </Button>
        </ButtonBox>
    </Wrapper>
  );
};
