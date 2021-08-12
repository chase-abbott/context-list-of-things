import React from 'react';
import { useCharacters } from '../../../state/CharacterProvider';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();

  const listItems = characters.map(char => {
    return (
      <li key={char.id}>
        <Character name={char.name} image={char.image}/>
      </li>
    );
  });
  
  return <ul> {listItems}</ul>;
};

export default CharacterList;
