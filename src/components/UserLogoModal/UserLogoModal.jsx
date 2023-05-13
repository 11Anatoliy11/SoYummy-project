import {
  ButtonEdit,
  ButtonLogout,
  EditBox,
  EditText,
} from './UserLogoModal.styled';
import { ReactComponent as Edit } from '../../images/svg/edit.svg';
import { ReactComponent as ArrowRight } from '../../images/svg/arrow-right.svg';

import Modal from '../Modal';
import Button from '../Button';

export const UserLogoModal = ({ onClose, onLogout, onEdit }) => {
  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // });

  // const handleKeyDown = e => {
  //   if (e.code === 'Escape') {
  //     onClose();
  //   }
  // };

  return (
    <Modal onClose={onClose}>
      <EditBox>
        <EditText>Edit profile</EditText>
        <ButtonEdit
          type="button"
          width="125px"
          height="43px"
          onClick={onEdit}
          backgroundColor="var(--green-color)"
          border="none"
          borderRadius="24px 44px"
          textColor="var(--background-color)"
        >
          <Edit />
        </ButtonEdit>
      </EditBox>
      <Button onClick={onLogout}>
        Log Out <ArrowRight />
      </Button>
    </Modal>
  );
};
