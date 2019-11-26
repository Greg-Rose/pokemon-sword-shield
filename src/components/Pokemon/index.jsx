import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const text = {
  abilities: 'Abilities:',
  typeImgAlt: 'pokemon type'
};

const Pokemon = ({ abilities, image, name, type }) => (
  <div className={styles.root}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <img className={styles.typeImage} src={type} alt={text.typeImgAlt} />
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
  type: PropTypes.string.isRequired
};

export default Pokemon;
