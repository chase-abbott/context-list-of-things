import React from 'react';
import { useThemes } from '../../state/CharacterProvider';

const ThemeSelector = () => {
  const { handleThemeChange } = useThemes();
 
  return (
    <>
      <label> Light Theme </label>
      <input
        type="radio"
        name="theme"
        value="light"
        onChange={handleThemeChange}/>
      <label> Dark Theme</label>
      <input
        type="radio"
        name="theme"
        value="dark"
        onChange={handleThemeChange}/>
    </>
  );
};

export default ThemeSelector;
