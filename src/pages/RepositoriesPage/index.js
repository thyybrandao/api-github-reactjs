import React from 'react';

import { Sidebar, Main, Container } from './styles';
import Profile from './components/Profile';
import Filter from './components/Filter';
import Repositories from './components/Repositories';
import { getLanguagesFrom } from '../../services/api';

const RepositoriesPage = () => {
  const user = {
    login: 'thybrandao',
    name: 'Thyago Brandão de Paula',
    avatar_url: 'https://avatars.githubusercontent.com/u/25776134?v=4',
    followers: 0,
    following: 0,
    company: 'Freelancer',
    blog: null,
    location: 'Registro, São Paulo',
  };

  const repositories = [
    {
      id: '1',
      name: 'Repo 1',
      description: 'Desrição',
      html_url: 'https://github.com/',
      language: 'Javascript',
    },
    {
      id: '2',
      name: 'Repo 2',
      description: 'Desrição',
      html_url: 'https://github.com/',
      language: 'Html',
    },
    {
      id: '3',
      name: 'Repo 3',
      description: 'Desrição',
      html_url: 'https://github.com/',
      language: 'PHP',
    },
    {
      id: '5',
      name: 'Repo 4',
      description: 'Desrição',
      html_url: 'https://github.com/',
      language: 'Ruby',
    },
  ];

  const languages = getLanguagesFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
