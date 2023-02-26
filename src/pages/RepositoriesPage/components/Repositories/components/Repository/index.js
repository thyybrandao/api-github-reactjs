import React from 'react';

import { Container, Description, Footer, Lang, Name, Link } from './styles';

const Repository = () => (
  <Container color="#f37272">
    <Name>Repository Name</Name>
    <Description>Description</Description>
    <Footer color="#f37272">
      <Lang>Language</Lang>
      <Link href="http://google.com">Ver</Link>
    </Footer>
  </Container>
);

export default Repository;
