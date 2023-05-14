
import { useState} from 'react';
import { ReactComponent as UserIcon } from 'images/svg/user.svg';

import {
  UserWrapper,
  UserIconWr,
  UserNameTitle,
} from './User.styled';
import{UserLogoModal} from './UserLogoModal';

export const User = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(prevState => !prevState);
  };

  return (
    <>
        <UserWrapper onClick={toggleModal}>
          <UserIconWr>
            <UserIcon style={{ fill: 'none' }} />
          </UserIconWr>
          <UserNameTitle>Olena</UserNameTitle>
        </UserWrapper>
        {modal && (
        <UserLogoModal onClose={toggleModal}/>
      )}
    </>
  );
};
