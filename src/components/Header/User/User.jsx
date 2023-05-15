
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

export const User = () => {
  const [modal, setModal] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const { user } = useAuth();

  const toggleLogoModal = () => {
    setModal(prevState => !prevState);
  };
  // const toggleModal = () => {
  //   setIsModalOpen(current => !current);
  // };
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
// console.log(user);
  return (
    <>
        <UserWrapper onClick={toggleLogoModal}>
          <UserIconWr>
          <img src={user?.avatar ?? userAvatar} alt="user avatar" />
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
