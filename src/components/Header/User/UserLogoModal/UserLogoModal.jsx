import { ReactComponent as Edit } from 'images/svg/edit.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from 'components/Button/Button';

import Typography from '@mui/material/Typography';

import {
  EditWrapper,
  EditText,
  ModalWrapper,
  PopoverWrapper,
  PopoverStyled,
} from './UserLogoModal.styled';

export const UserLogoModal = ({
  onClose,
  onLogout,
  onEdit,
  anchorEl,
  open,
  id,
}) => {
  return (
    <PopoverWrapper>
      <PopoverStyled
        anchorReference="buttonPosition"
        anchorPosition={{ top: 20, left: 30 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 0 }}>
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
        </Typography>
      </PopoverStyled>
    </PopoverWrapper>
  );
};
