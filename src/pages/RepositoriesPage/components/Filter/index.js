import React from 'react';
import PropTypes from 'prop-types';

import { Cleaner, Container, Selector } from './styles';

const Filter = ({ languages, currentLanguage, onClick }) => {
  const selectors = languages.map((lang) => (
    <Selector
      key={lang.name.toLowerCase()}
      color={lang.color}
      className={currentLanguage === lang.name ? 'selected' : ''}
      onClick={() => onClick && onClick(lang.name)}
    >
      <span> {lang.name}</span>
      <span> {lang.count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
    </Container>
  );
};

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.PropTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    })
  ),
  currentLanguage: PropTypes.string,
  onClick: PropTypes.func,
};

export default Filter;
