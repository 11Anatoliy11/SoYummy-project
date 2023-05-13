import { useEffect } from 'react';
import {
  ButtonEdit,
  EditWrapper,
  EditText,
  ModalWrapper,
} from './UserLogoModal.styled';
import { ReactComponent as Edit } from '../../images/svg/edit.svg';
import { ReactComponent as ArrowNarrowRight } from '../../images/svg/arrow-narrow-right.svg';

import Button from '../Button/Button';

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
      <EditWrapper>
        <EditText>Edit profile</EditText>
        <ButtonEdit>
          <Edit />
        </ButtonEdit>
      </EditWrapper>
      <Button className="btn"
        type="button"
        width="125px"
        height="43px"
        backgroundColor="var(--green-color)"
        border="none"
        borderRadius="24px 44px"
        textColor="var(--background-color)"
        onClick={onLogout}
        >
      Log out <ArrowNarrowRight />
      </Button>

      </ModalWrapper>
  );
};
