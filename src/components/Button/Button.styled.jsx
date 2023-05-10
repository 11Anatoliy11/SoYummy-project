import styled from '@emotion/styled';

const setBackgroundColor = props => {
  if (props.backgroundColor==="#8BAA36") {
    return '#22252A';
  }else if(props.border !== "2px solid #FAFAFA"){
    return '#8BAA36';
  }
  return props.backgroundColor;
};
const setBorderColor = props => {
  if (props.border === "2px solid #FAFAFA") {
    return '2px solid #8BAA36';
  }
  return props.border;
};
const setTextColor = props => {
  if (props.border === "2px solid #FAFAFA") {
    return '#8BAA36';
  }
  return props.textColor;
};

export const StyledBtn = styled.button`
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  width: ${props => props.width};
  height:${props => props.height};
  font-weight: 400;
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
