import { useEffect } from 'react';
import {
  ButtonEdit,
  EditBox,
  EditText,
  ModalWrapper,
} from './UserLogoModal.styled';
import { ReactComponent as Edit } from '../../images/svg/edit.svg';
import { ReactComponent as ArrowRight } from '../../images/svg/arrow-right.svg';

import Button from '../Button/Button';
import Modal from '../Modal/Modal';

export const UserLogoModal = ({ onClose, onLogout, onEdit }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  return (

    <ModalWrapper>
      <Modal onClose={handleKeyDown}>
      <EditBox>
        <EditText>Edit profile</EditText>
        <ButtonEdit>
          <Edit />
        </ButtonEdit>
      </EditBox>
      <Button
        type="button"
        width="125px"
        height="43px"
        backgroundColor="var(--green-color)"
        border="none"
        borderRadius="24px 44px"
        textColor="var(--background-color)"
        onClick={onLogout}
        >
      Log Out <ArrowRight />
      </Button>
      </Modal>
    </ModalWrapper>
 
  );
};
