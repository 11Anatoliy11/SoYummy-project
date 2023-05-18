import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';

import userAvatar from 'images/avatar.png';
import { ReactComponent as AddIcon } from 'images/svg/plus-in-circle.svg';
import { AvatarBox, AvatarWrapper, AvatarInput, Label } from './EditAvatar.styled';

export const isUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (_) {
    return false;
  }
}

export const EditAvatar = ({ updateAvatar }) => {
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
        <AvatarWrapper>
          {avatarPreview ? (
            <img src={avatarPreview} alt="Avatar preview" />
          ) : (
            <img src={isUrl(avatarPreview) ? user?.avatar : userAvatar} alt="avatar" />
          )}
        </AvatarWrapper>
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
