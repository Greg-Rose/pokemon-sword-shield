import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const text = {
  abilities: 'Abilities:',
  typeImgAlt: 'pokemon type'
};

const Pokemon = ({ abilities, image, name, types }) => (
  <div className={styles.root}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <div className={styles.typesContainer}>
      {types.map(url => (
        <img key={url} className={styles.typeImage} src={url} alt={text.typeImgAlt} />
      ))}
    </div>
    <div>{text.abilities}</div>
    <ul className={styles.abilities}>
      {abilities.map(ability => (
        <li key={ability}>{ability}</li>
      ))}
    </ul>
  </div>
);

Pokemon.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Pokemon;
