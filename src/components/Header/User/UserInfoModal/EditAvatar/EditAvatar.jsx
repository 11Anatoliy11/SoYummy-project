import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { AvatarBox, AvatarInput, Label } from './EditAvatar.styled';

import userAvatar from 'images/avatar.png';
import { ReactComponent as AddIcon } from 'images/svg/plus-in-circle.svg';
export const EditAvatar = ({updateAvatar}) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const { user } = useAuth();

  const handleAvatarChange = event => {
    const avatar = event.target.files[0];
    setAvatarPreview(URL.createObjectURL(avatar));
    updateAvatar(avatar);
  };

  return (
    <AvatarBox>
      <Label htmlFor="avatar">
      {avatarPreview ? (
          <img src={avatarPreview} alt="Avatar preview" />
        ) : (
          <img src={user?.avatar ?? userAvatar} alt="avatar" />
        )}
        <AddIcon className='addIcon' />
      </Label>
      <AvatarInput
        type="file"
        id="avatar"
        name="avatar"
        onChange={handleAvatarChange}
      />
    </AvatarBox>
  );
};
