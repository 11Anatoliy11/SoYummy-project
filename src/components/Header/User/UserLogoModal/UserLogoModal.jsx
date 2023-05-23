import { ReactComponent as Edit } from 'images/svg/edit.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from 'components/Button/Button';

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { useIsMobileScreen } from 'hooks/useIsMobileScreen';
import { useIsSmallScreen } from 'hooks/useIsSmallScreen';
import { EditWrapper, EditText, ModalWrapper, PopoverWrapper, PopoverStyled } from './UserLogoModal.styled';


export const UserLogoModal = ({ onClose, onLogout, onEdit, anchorEl, open, id }) => {
  const isMobile = useIsMobileScreen();
  const isSmallScreen = useIsSmallScreen();
  const getMarginValues = () => {
    if (isMobile) {
      return {
        marginTop: '8px',
        marginLeft: '-44px',
      };
    } else if (isSmallScreen) {
      return {
        marginTop: '14px',
        marginLeft: '-80px',
      };
    }
    return {
      marginTop: '21px',
      marginLeft: '-80px',
    };
  };


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
          style={getMarginValues()}

      >
        <Typography sx={{ p: 0}}>
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
