import React from 'react';

const ThemeSelector = () => {
  return (
    <>
      <input
        type="radio"
        name="theme"
        value="light"/>
      <input
        type="radio"
        name="theme"
        value="dark"/>
    </>
  );
};

export default ThemeSelector;
