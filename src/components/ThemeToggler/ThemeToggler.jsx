// import React, { useState } from 'react';
// import styled from '@emotion/styled';

// const Container = styled.div`
//   display: none;
//   padding: 3px;
//   align-items: center;
//   cursor: pointer;

//   width: 61px;
//   height: 27px;
//   border-radius: 50px;
//   box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
//   background-color: ${props =>
//     props.isActive
//       ? props.theme.colors.green[200]
//       : props.theme.colors.white[300]};
// `;

// const Circle = styled.div`
//   display: none;
//   width: 21px;
//   height: 21px;
//   background: linear-gradient(180deg, var(--white-color) 0%, var(--black-haze-color) 100%);
//   border-radius: 50%;
//   margin-left: ${({ isActive }) => (isActive ? 'calc(100% - 20px)' : '2px')};
//   transition: ${({ theme }) => theme.transitions.create(['all'])};
//   filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
// `;

// const ThemeToggle = ({ onChange }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleToggle = () => {
//     setIsActive(!isActive);
//     onChange(!isActive);
//   };

//   return (
//     <Container isActive={isActive} onClick={handleToggle}>
//       <Circle isActive={isActive} />
//     </Container>
//   );
// };

// export default ThemeToggle;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'redux/theme/themeSlice';
import { getMode } from 'redux/theme/themeSelector';
import { ThemeWrapper } from './ThemeToggler.styled';
import { useEffect, useState } from 'react';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const selectedMode = useSelector(getMode);
  const [mode, setMode] = useState(selectedMode.mode ?? 'light');
  console.log(mode);

  const handleSwitchChange = () => {
    const newThemeMode = mode === 'light' ? 'dark' : 'light';
    setMode(newThemeMode);
    console.log(newThemeMode);
    console.log({ mode: newThemeMode });
  };

  useEffect(() => {
    dispatch(setTheme({ mode }));
    window.localStorage.setItem('theme', mode);
  }, [dispatch, mode]);

  return (
    <ThemeWrapper>
      <label className="switch">
        <input
          type="checkbox"
          checked={mode === 'dark'}
          onChange={handleSwitchChange}
        />
        <span className="slider round"></span>
      </label>
    </ThemeWrapper>
  );
};
