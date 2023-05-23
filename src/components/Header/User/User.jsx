import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';

import userAvatar from 'images/avatar.png';
import { UserLogoModal } from './UserLogoModal';
import { UserLogoutModal } from './UserLogoutModal';
import { UserInfoModal } from './UserInfoModal';
import { isUrl } from './UserInfoModal/EditAvatar/EditAvatar';

import { UserWrapper, UserIconWr, UserNameTitle } from './User.styled';

export const User = () => {
  const [modal, setModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalName, setModalName] = useState('');
  const { user } = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const toggleLogoModal = () => {
    setModal(prevState => !prevState);
  };

  const handleCloseModal = () => {
    setModalName('');
  };
  const openEditUser = () => {
    toggleLogoModal();
    setModalName('edit');
  };
  const openLogoutApproval = () => {
    toggleLogoModal();
    setModalName('logout');
  };

  return (
    <>
      <UserWrapper onClick={handleClick}>
        <UserIconWr>
          <img
            src={isUrl(user?.avatar) ? user?.avatar : userAvatar}
            alt="user avatar"
          />
        </UserIconWr>
        <UserNameTitle>{user?.name ?? 'User'}</UserNameTitle>
      </UserWrapper>
        <UserLogoModal
          onClose={handleClose}
          onLogout={openLogoutApproval}
          onEdit={openEditUser}
          anchorEl={anchorEl}
          open={open}
          id={id}
        />


      {modalName === 'logout' && <UserLogoutModal onClose={handleCloseModal} />}
      {modalName === 'edit' && <UserInfoModal onClose={handleCloseModal} />}
    </>
  );
};
