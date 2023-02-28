import React, { useState, useEffect } from 'react';

import { Sidebar, Main, Container, Loading } from './styles';
import Profile from './components/Profile';
import Filter from './components/Filter';
import Repositories from './components/Repositories';
import { getLanguagesFrom, getUser, getRepos } from '../../services/api';

const RepositoriesPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState();
  const [user, setUser] = useState();
  const [languages, setLanguages] = useState();
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([
        getUser('thyybrandao'),
        getRepos('thyybrandao'),
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
      setLanguages(getLanguagesFrom(reposResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

  // const user = {
  //   login: 'thybrandao',
  //   name: 'Thyago Brandão de Paula',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/25776134?v=4',
  //   followers: 0,
  //   following: 0,
  //   company: 'Freelancer',
  //   blog: null,
  //   location: 'Registro, São Paulo',
  // };

  // const repositories = [
  //   {
  //     id: '1',
  //     name: 'Repo 1',
  //     description: 'Desrição',
  //     html_url: 'https://github.com/',
  //     language: 'Javascript',
  //   },
  //   {
  //     id: '2',
  //     name: 'Repo 2',
  //     description: 'Desrição',
  //     html_url: 'https://github.com/',
  //     language: 'Html',
  //   },
  //   {
  //     id: '3',
  //     name: 'Repo 3',
  //     description: 'Desrição',
  //     html_url: 'https://github.com/',
  //     language: 'PHP',
  //   },
  //   {
  //     id: '5',
  //     name: 'Repo 4',
  //     description: 'Desrição',
  //     html_url: 'https://github.com/',
  //     language: 'Ruby',
  //   },
  // ];

  // const languages = getLanguagesFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
