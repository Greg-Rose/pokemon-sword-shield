import React, { useEffect, useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link, useLocation } from 'react-router-dom';
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

const Search = () => {  
  const [suggestions, updateSuggestions] = useState([]);
  const [value, updateValue] = useState('');
  const location = useLocation();

  const clearValue = () => updateValue('');
  const onChange = (event, { newValue }) => updateValue(newValue);
  const onSuggestionsClearRequested = () => updateSuggestions([]);
  const onSuggestionsFetchRequested = ({ value }) =>
    updateSuggestions(getSuggestions(value));
  const renderSuggestion = suggestion => (
    <Link className={styles.link} to={`/pokemon/${suggestion}`}>{suggestion}</Link>
  );

  const inputProps = {
    onChange,
    placeholder: text.placeholder,
    value
  };

   useEffect(() => {
     if (location.pathname === '/') clearValue();
   }, [location]);

  return (
    <div className={styles.root}>
      <Autosuggest
        inputProps={inputProps}
        getSuggestionValue={value => value}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        renderSuggestion={renderSuggestion}
        suggestions={suggestions}
      />
      <button className={styles.clearButton} onClick={clearValue} type="button">
        {text.clear}
      </button>
    </div>
  );
};

export default Search;
