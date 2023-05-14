// import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateAvatar, updateInfo } from 'redux/auth/authOperations';

// import { Box, Form } from './UserEdit.styled';
// import { Button } from '../UserLogout/UserLogout.styled';
// import { AvatarEdit } from './AvatarEdit/AvatarEdit';
// import { InfoEdit } from './InfoEdit/InfoEdit';
// import { useAuth } from '../../../../hooks/useAuth';
import {
  Form,
  // EditWrapper,
  // EditText,
  // ModalWrapper,
} from './UserInfoModal.styled';
import { useState } from 'react';
import Button from '../../../Button/Button';
import Modal from '../../../Modal/Modal';
import {EditInfo} from './EditInfo/EditInfo'
import { EditAvatar } from './EditAvatar/EditAvatar';

export const UserInfoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [newAvatar, setNewAvatar] = useState(null);
  // const [isNewInfo, setIsNewInfo] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(current => !current);
  };
  // useEffect(() => {
  //   setNewAvatar(null);
  //   setIsNewInfo(false);
  // }, []);

  // const dispatch = useDispatch();
  // const { isLoading } = useAuth();

  // const changeAvatar = () => {
  //   const formData = new FormData();
  //   formData.append('avatar', newAvatar);
  //   dispatch(updateAvatar(formData));
  // };
  // const changeInfo = e => {
  //   const updatedInfo = {
  //     name: e.target.name.value,
  //     email: e.target.email.value,
  //   };
  //   dispatch(updateInfo(updatedInfo));
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (newAvatar) changeAvatar();
  //   if (isNewInfo) changeInfo(e);
  // };
  return (
    <>
    <Modal className="userInfoModal" onClose={toggleModal}>
      <Form>
        <EditAvatar/>
        <EditInfo/>
        <Button
        className="changeBtn"
        type="submit"
        width="282px"
        height="49px"
        backgroundColor="var(--green-color)"
        border="none"
        borderRadius="6px"
        textColor="var(--background-color)"
        >Save changes</Button>
      </Form>
    </Modal>
    </>
  );
};
