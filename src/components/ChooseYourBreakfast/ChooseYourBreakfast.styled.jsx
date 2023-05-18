import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
width: 225px;
padding: 8px;
border-radius: 8px;
background-color: var(--background-color);

@media (min-width: 768px) {
  padding: 12px;
  max-width: 261px;
  }
  @media (min-width: 1280px) {
    padding: 16px;
    max-width: 298px;
  }
`;

export const TextWrapper = styled.div`
margin-bottom: 7px;
font-weight: 500;
font-size: 12px;
line-height: 1.5;
letter-spacing: -0.24px;
color: var(--fiord-color);
@media (min-width: 768px) {
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.29;
  }
  @media (min-width: 1280px) {
    line-height: 1.43;
  }
`;

export const Accent = styled.span`
color: var(--green-color);
`;


export const GoToRecipe = styled(NavLink)`
display: flex;
align-items: center;
justify-content: end;
gap:4px;
font-size: 10px;
line-height: 1.2;
letter-spacing: 0.2px;
color: var(--fiord-color);
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
>svg{
width: 18px;
height: 18px;
stroke: currentColor;
transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover{
stroke: currentColor;
}
}
&:hover{
color: #2196f3;
}
`;


