import React, { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchRickAndMortyData from '../services/rickAndMortyAPI';



const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

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

  useEffect(() => {
    return fetchRickAndMortyData()
      .then(res => setCharacters(res));
  }, []);

  return (
    <CharacterContext.Provider value={{ themes, characters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  console.log(characters);
  return characters;
};


