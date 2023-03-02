import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Sidebar, Main, Container, Loading } from './styles';
import Profile from './components/Profile';
import Filter from './components/Filter';
import Repositories from './components/Repositories';
import { getLanguagesFrom, getUser, getRepos } from '../../services/api';

const RepositoriesPage = () => {
  const { login } = useParams();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [user, setUser] = useState();
  const [languages, setLanguages] = useState();
  const [repositories, setRepositories] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(reposResponse.data);
      setLanguages(getLanguagesFrom(reposResponse.data));

      setLoading(false);
    };

    loadData();
  }, []);

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
