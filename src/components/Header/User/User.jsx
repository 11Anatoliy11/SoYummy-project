
import { useState} from 'react';
import { useAuth } from 'hooks/useAuth';
import userAvatar from 'images/avatar.png';

import {
  UserWrapper,
  UserIconWr,
  UserNameTitle,
} from './User.styled';
import{UserLogoModal} from './UserLogoModal';
import { UserLogoutModal } from './UserLogoutModal';
import { UserInfoModal } from './UserInfoModal';
import {isUrl} from './UserInfoModal/EditAvatar/EditAvatar'

export const User = () => {
  const [modal, setModal] = useState(false);

  const [modalName, setModalName] = useState('');
  const { user } = useAuth();

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
  console.log(user.avatar);
  console.log(user.name);
  return (
    <>
        <UserWrapper onClick={toggleLogoModal}>
          <UserIconWr>
          <img src={isUrl(user?.avatar) ? user?.avatar : userAvatar} alt="user avatar" />
          </UserIconWr>
          <UserNameTitle>{user?.name ?? 'User'}</UserNameTitle>
        </UserWrapper>
        {modal && (
        <UserLogoModal
        onClose={toggleLogoModal}
        onLogout={openLogoutApproval}
        onEdit={openEditUser}/>
      )}
       {modalName === 'logout' && <UserLogoutModal onClose={handleCloseModal} />}
       {modalName === 'edit' && <UserInfoModal onClose={handleCloseModal} />}
    </>
  );
};
