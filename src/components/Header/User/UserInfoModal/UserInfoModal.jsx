import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { updateAvatar, updateName } from 'redux/auth/auth-operations';

import { Form } from './UserInfoModal.styled';
import {EditInfo} from './EditInfo/EditInfo'
import { EditAvatar } from './EditAvatar/EditAvatar';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';


export const UserInfoModal = ({onClose}) => {
  const [newAvatar, setNewAvatar] = useState(null);
  const [isNewName, setIsNewName] = useState(false);

  useEffect(() => {
    setNewAvatar(null);
    setIsNewName(false);
  }, []);

  const dispatch = useDispatch();
  const { isLoading } = useAuth();

  const changeAvatar = () => {
    const formData = new FormData();
    formData.append('avatar', newAvatar);
    // dispatch(updateAvatar(formData));
  };
  const changeName = e => {
    const updatedName = e.target.name.value;
    // dispatch(updateName(updatedName));
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
      <Form>
        <EditAvatar/>
        <EditInfo/>
        <Button
        className="changeBtn"
        onClick={handleSubmit}
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
