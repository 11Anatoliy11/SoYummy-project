import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { uploadAvatar } from 'redux/auth/auth-operations';
import { EditInfo } from './EditInfo/EditInfo';
import { EditAvatar } from './EditAvatar/EditAvatar';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import { Form } from './UserInfoModal.styled';

export const UserInfoModal = ({ onClose }) => {
  const [newAvatar, setNewAvatar] = useState(null);
  const [isNewName, setIsNewName] = useState(false);

  useEffect(() => {
    setNewAvatar(null);
    setIsNewName(false);
  }, []);

  const dispatch = useDispatch();

  const changeAvatar = () => {
    const formData = new FormData();
    formData.append('avatar', newAvatar);
    dispatch(uploadAvatar(formData));
  };
  const changeName = e => {
    const formData = new FormData();
    const updatedName = e.target.name.value;
    formData.append('name', updatedName);
    dispatch(uploadAvatar(formData));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (newAvatar) changeAvatar();
    if (isNewName) changeName(e);
    onClose();
  };

  return (
    <>
      <Modal className="userInfoModal" onClose={onClose}>
        <Form onSubmit={handleSubmit}>
          <EditAvatar updateAvatar={avatar => setNewAvatar(avatar)} />
          <EditInfo updateName={() => setIsNewName(true)} />
          <Button
            className="changeBtn"
            type="submit"
            width="282px"
            height="49px"
            border="none"
            borderRadius="6px"
          >
            Save changes
          </Button>
        </Form>
      </Modal>
    </>
  );
};
