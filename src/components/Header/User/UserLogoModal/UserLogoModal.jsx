import { ReactComponent as Edit } from 'images/svg/edit.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { EditWrapper, EditText, ModalWrapper } from './UserLogoModal.styled';



export const UserLogoModal = ({ onClose, onLogout, onEdit }) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
    {(popupState) => (
      <div>
        <Button variant="contained" {...bindTrigger(popupState)}>
          Open Popover
        </Button>
        <Popover
          {...bindPopover(popupState)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    )}
  </PopupState>
  );
};
{/* <Modal
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
</Modal> */}
