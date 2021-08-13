import React from 'react';
import { useThemes } from '../../state/CharacterProvider';

const ThemeSelector = () => {
  const { handleThemeChange } = useThemes();
 
  return (
    <>
      <input
        type="radio"
        name="theme"
        value="light"
        onChange={handleThemeChange}/>
      <input
        type="radio"
        name="theme"
        value="dark"
        onChange={handleThemeChange}/>
    </>
  );
};

export default ThemeSelector;
