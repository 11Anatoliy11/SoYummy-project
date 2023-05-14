import styled from '@emotion/styled';

const setBackgroundColor = props => {
  if (props.backgroundColor==="var(--green-color)") {
    return 'var(--search-black-color)';
  }else if(props.border !== "2px solid var(--background-color)"){
    return 'var(--green-color)';
  }
  return props.backgroundColor;
};
const setBorderColor = props => {
  if (props.border === "2px solid var(--background-color)") {
    return '2px solid var(--green-color)';
  }
  return props.border;
};
const setTextColor = props => {
  if (props.border === "2px solid var(--background-color)") {
    return 'var(--green-color)';
  }
  return props.textColor;
};

export const StyledBtn = styled.button`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  width: ${props => props.width};
  height:${props => props.height};
  color: ${props => props.textColor};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.border};
  background-color: ${props => props.backgroundColor};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  filter: ${props => props.filter};
  cursor: pointer;

    &:hover {
   background-color: ${setBackgroundColor};
   transform: scale(0.95);
   border: ${setBorderColor};
   color: ${setTextColor};
  }
 `;
