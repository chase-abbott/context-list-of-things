import React from 'react';
import { CharacterProvider } from '../../state/CharacterProvider';
import CharacterList from './character/CharacterList';
import ThemeSelector from './ThemeSelector';

export default function App() {
  return (
    <CharacterProvider>
      <ThemeSelector/>
      <CharacterList/>
    </CharacterProvider>
  );
}
