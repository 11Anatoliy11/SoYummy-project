import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
width: 225px;
padding: 8px;
border-radius: 8px;
background-color: var(--background-color);
`;

export const TextWrapper = styled.div`
font-weight: 500;
font-size: 12px;
line-height: 1.5;
letter-spacing: -0.24px;
color: var(--fiord-color);
`;

export const Accent = styled.span`
color: var(--green-color);
`;


export const GoToRecipe = styled(NavLink)`
line-height: 1.2;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2px;
color: var(--choose-breakfast-color);
`;


