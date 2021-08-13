/* eslint-disable max-len */
import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchRickAndMortyData from '../services/rickAndMortyAPI';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee'
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222'
    }
  };
  const [characters, setCharacters] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  useEffect(() => {
    return fetchRickAndMortyData()
      .then(res => setCharacters(res));
  }, []);

  const handleThemeChange = ({ target }) => {
    setCurrentTheme(themes[target.value]);
  };

  return (
    <CharacterContext.Provider value={{ characters, currentTheme, handleThemeChange }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useThemes = () => {
  const { currentTheme, handleThemeChange }  = useContext(CharacterContext);
  return { currentTheme, handleThemeChange };
};
