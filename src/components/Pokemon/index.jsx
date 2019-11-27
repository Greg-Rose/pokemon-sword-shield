import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import TypeTooltip from '../TypeTooltip';
import styles from './styles.module.css';

const text = {
  abilities: 'Abilities:',
  tooltip: 'type-tooltip',
  typeImgAlt: 'pokemon type'
};

const typeFromUrl = url =>
  url
    .slice(40)
    .replace('.gif', '')
    .toLowerCase();


const Pokemon = ({ abilities, image, name, types }) => (
  <div className={styles.root}>
    <img src={image} alt={name} />
    <h2>{name}</h2>
    <div className={styles.typesContainer}>
      {types.map(url => (
        <img
          key={url}
          className={styles.typeImage}
          src={url}
          alt={text.typeImgAlt}
          data-for={text.tooltip}
          data-tip={typeFromUrl(url)}
        />
      ))}
    </div>
    <div>{text.abilities}</div>
    <ul className={styles.abilities}>
      {abilities.map(ability => (
        <li key={ability}>{ability}</li>
      ))}
    </ul>
    <ReactTooltip
      id={text.tooltip}
      place="bottom"
      effect="solid"
      border
      getContent={type => type && <TypeTooltip type={type} />}
    />
  </div>
);

Pokemon.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Pokemon;
