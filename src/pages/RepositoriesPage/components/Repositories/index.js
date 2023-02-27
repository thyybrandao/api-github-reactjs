import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Repository from './components/Repository';

const Repositories = ({ repositories }) => {
  const repos = repositories.map((repository) => (
    <Repository key={repository.id} repository={repository} />
  ));

  return <Container>{repos}</Container>;
};

Repositories.PropTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired,
      language: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default Repositories;
