import React from 'react';
import { useDispatch} from 'react-redux';
import { setTheme } from 'redux/theme/themeSlice';
import { ThemeWrapper } from './ThemeToggler.styled';
import { useEffect, useState } from 'react';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState( window.localStorage.getItem("theme") ?? 'light');


  const handleSwitchChange = () => {
    const newThemeMode = mode === 'light' ? 'dark' : 'light';
    setMode(newThemeMode);
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
