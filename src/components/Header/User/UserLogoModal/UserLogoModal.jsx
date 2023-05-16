import {
  EditWrapper,
  EditText,
  ModalWrapper,
} from './UserLogoModal.styled';
import { ReactComponent as Edit } from '../../../../images/svg/edit.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../../Button/Button';
import Modal from '../../../Modal/Modal';


export const UserLogoModal = ({ onClose, onLogout, onEdit }) => {

  return (
    <Modal className="userLogoModal" overlayClassName="userLogoOverlayModal" onClose={onClose}>
    <ModalWrapper>
      <EditWrapper onClick={onEdit}>
        <EditText>Edit profile</EditText>
          <Edit />
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
      Log out <ArrowForwardIcon/>
      </Button>
      </ModalWrapper>
      </Modal>
  );
};
