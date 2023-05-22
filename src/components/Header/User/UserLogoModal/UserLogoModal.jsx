import { ReactComponent as Edit } from 'images/svg/edit.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import { EditWrapper, EditText, ModalWrapper } from './UserLogoModal.styled';

export const UserLogoModal = ({ onClose, onLogout, onEdit }) => {
  return (
    <Modal
      className="userLogoModal"
      overlayClassName="userLogoOverlayModal"
      onClose={onClose}
    >
      <ModalWrapper>
        <EditWrapper onClick={onEdit}>
          <EditText>Edit profile</EditText>
          <Edit />
        </EditWrapper>
        <Button
          className="btn"
          type="button"
          width="125px"
          height="43px"
          border="none"
          borderRadius="24px 44px"
          onClick={onLogout}
        >
          Log out <ArrowForwardIcon />
        </Button>
      </ModalWrapper>
    </Modal>
  );
};
