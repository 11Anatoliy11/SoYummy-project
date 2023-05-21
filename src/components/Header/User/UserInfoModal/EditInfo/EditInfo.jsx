import { useState } from 'react';
import { useAuth } from 'hooks/useAuth';

import { ReactComponent as User } from 'images/svg/user-modal.svg';
import { ReactComponent as Edit } from 'images/svg/edit.svg';

import { Input, InputBox, Label } from './EditInfo.styled';

export const EditInfo = ({ updateName }) => {
  const { user } = useAuth();
  const [newName, setNewName] = useState(user.name);

  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setNewName(value);
    updateName();
  };

  return (
    <InputBox>
      <Label htmlFor="name">
        <User className="userIcon" />
        <Edit className="editIcon" />
      </Label>

      <Input
        name="name"
        id="name"
        placeholder="Name"
        value={newName}
        onChange={onChange}
      />
    </InputBox>
  );
};
