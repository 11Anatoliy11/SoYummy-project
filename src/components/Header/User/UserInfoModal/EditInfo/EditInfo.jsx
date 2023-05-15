import {  useState } from 'react';
// import { useAuth } from '../../../../../hooks/useAuth';
import { Input, InputBox, Label } from './EditInfo.styled';
import { ReactComponent as User } from '../../../../../images/svg/user-modal.svg';
import { ReactComponent as Edit } from '../../../../../images/svg/edit.svg';

export const EditInfo = () => {
//   const {user: {name, email}} = useAuth();
  const [newName, setNewName] = useState("Olena");


  const onChange = (e) => {
    const { name, value } = e.target
    if (name === "name") setNewName(value);
  }

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
