import React from 'react';
import PropTypes from 'prop-types';
import { typesData } from '../../constants/values';
import styles from './styles.module.css';

const text = {
  strong: 'Stong Against',
  weak: 'Weak Against'
};

const TypeTooltip = ({ type }) => {
  const { strongAgainst, weakAgainst } = typesData[type];

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headerCell}>{text.strong}</th>
          <th className={styles.headerCell}>{text.weak}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.cell}>{strongAgainst.join(', ')}</td>
          <td className={styles.cell}>{weakAgainst.join(', ')}</td>
        </tr>
      </tbody>
    </table>
  );
};

TypeTooltip.propTypes = {
  type: PropTypes.string.isRequired
};

export default TypeTooltip;
