
import { useState} from 'react';
import { ReactComponent as UserIcon } from 'images/svg/user.svg';

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

  const toggleLogoModal = () => {
    setModal(prevState => !prevState);
  };
  // const toggleModal = () => {
  //   setIsModalOpen(current => !current);
  // };
  const handleCloseModal = () => {

    toggleLogoModal();
    setModalName('');
    console.log("closeModal");
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
        <UserWrapper onClick={toggleLogoModal}>
          <UserIconWr>
            <UserIcon style={{ fill: 'none' }} />
          </UserIconWr>
          <UserNameTitle>Olena</UserNameTitle>
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
