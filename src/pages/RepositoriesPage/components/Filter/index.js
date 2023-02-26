import React from 'react';

import { Cleaner, Container, Selector } from './styles';

const Filter = () => {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
  ];

  const selectors = langs.map((lang) => (
    <Selector key={lang.name.toLowerCase()} color={lang.color}>
      <span> {lang.name}</span>
      <span> {lang.count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
};

export default Filter;
