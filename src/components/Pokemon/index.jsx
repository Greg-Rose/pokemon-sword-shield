import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactTooltip from "react-tooltip";
import TypeTooltip from "../TypeTooltip";
import { pokemonData } from "../../constants/values";
import styles from "./styles.module.css";

const text = {
  abilities: "Abilities:",
  tooltip: "type-tooltip",
  typeImgAlt: "pokemon type"
};

const typeFromUrl = url =>
  url
    .slice(40)
    .replace(".gif", "")
    .toLowerCase();

const Pokemon = ({ match }) => {
  const { abilities, image, name, types } = pokemonData[match.params.name];

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [match]);

  return (
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
};

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Pokemon;
