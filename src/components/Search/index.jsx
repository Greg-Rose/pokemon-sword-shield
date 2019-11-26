import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import { pokemonList } from '../../constants/values';
import styles from './styles.module.css';

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();

  return inputValue.length === 0
    ? []
    : pokemonList.filter(name => name.toLowerCase().includes(inputValue));
};

const text = {
  clear: 'X',
  placeholder: 'Type a Pokemon name'
};

const Search = ({ selectPokemon }) => {
  const [suggestions, updateSuggestions] = useState([]);
  const [value, updateValue] = useState('');

  const clearValue = () => updateValue('');
  const onChange = (event, { newValue }) => updateValue(newValue);
  const onSuggestionsClearRequested = () => updateSuggestions([]);
  const onSuggestionsFetchRequested = ({ value }) =>
    updateSuggestions(getSuggestions(value));
  const onSuggestionSelected = (event, { suggestionValue }) =>
    selectPokemon(suggestionValue);

  const inputProps = {
    onChange,
    placeholder: text.placeholder,
    value
  };

  return (
    <div className={styles.root}>
      <Autosuggest
        inputProps={inputProps}
        getSuggestionValue={value => value}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionSelected={onSuggestionSelected}
        renderSuggestion={suggestion => suggestion}
        suggestions={suggestions}
      />
      <button
        className={styles.clearButton}
        onClick={clearValue}
        type="button"
      >
        {text.clear}
      </button>
    </div>
  );
};

Search.propTypes = {
  selectPokemon: PropTypes.func.isRequired
};

export default Search;
