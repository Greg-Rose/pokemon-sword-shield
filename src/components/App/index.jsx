import React, { useState } from 'react';
import Pokemon from '../Pokemon';
import Search from '../Search';
import { pokemonData } from '../../constants/values';
import styles from './styles.module.css';

const text = {
  headerImg:
    'https://gamespot1.cbsistatic.com/uploads/original/1578/15787979/3558337-sword%20shield%20legendaries.png',
  headerImgAlt: 'Pokemon Sword and Shield'
};

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className={styles.root}>
      <img
        className={styles.headerImg}
        src={text.headerImg}
        alt={text.headerImgAlt}
      />
      <Search selectPokemon={setSelectedPokemon} />
      {selectedPokemon && <Pokemon {...pokemonData[selectedPokemon]} />}
    </div>
  );
};

export default App;
