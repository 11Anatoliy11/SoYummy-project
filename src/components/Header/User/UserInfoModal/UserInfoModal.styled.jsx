import styled from 'styled-components';

export const Form = styled.form`
display:block;
.changeBtn{
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
  }
&:hover{
color: var(--search-black-color);
background-color: var(--green-color);
}
}
`;
