/* eslint-disable max-len */
import React from 'react';
import { useThemes } from '../../state/CharacterProvider';
import CharacterList from './character/CharacterList';
import ThemeSelector from './ThemeSelector';

export default function App() {
  const  { currentTheme }  = useThemes();
  console.log('from App.js', currentTheme);

  return (
    <div style={{ backgroundColor: currentTheme.background, color: currentTheme.foreground }}>
      <ThemeSelector/>
      <CharacterList/>
    </div>
  );
}
