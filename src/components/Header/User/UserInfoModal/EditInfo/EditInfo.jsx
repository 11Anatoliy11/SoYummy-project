import {  useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Input, InputBox, Label } from './EditInfo.styled';
import { ReactComponent as User } from 'images/svg/user-modal.svg';
import { ReactComponent as Edit } from 'images/svg/edit.svg';

export const EditInfo = ({updateName}) => {
  const { user } = useAuth();
  const [newName, setNewName] = useState(user.name);

  const onChange = (e) => {
    const { name, value } = e.target
    if (name === "name") setNewName(value);
    updateName();
  }
 console.log(newName);
 return (
      <InputBox>
      <Label htmlFor="name">
      <User className='userIcon'/>
      <Edit className='editIcon'/>
      </Label>

        <Input
          name="name"
          id="name"
          placeholder="Name"
          value={newName}
          onChange={onChange}
        />

      </InputBox>
  )
}
