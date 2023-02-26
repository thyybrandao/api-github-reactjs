import React from 'react';

import { Sidebar, Main, Container } from './styles';
import Profile from './components/Profile';
import Filter from './components/Filter';
import Repositories from './components/Repositories';

const RepositoriesPage = () => (
  <Container>
    <Sidebar>
      <Profile />
      <Filter />
    </Sidebar>
    <Main>
      <Repositories />
    </Main>
  </Container>
);

export default RepositoriesPage;
