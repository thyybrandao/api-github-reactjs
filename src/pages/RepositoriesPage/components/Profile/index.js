import React from 'react';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Avatar, Header, Login, Name, Data, Inner } from './styles';

const Profile = () => (
  <Container>
    <Header>
      <Avatar src="https://codeslayers.com.br/rei/dash/assets/logoReiChurrasquinho.31aeb2a1.svg" />
      <Login>thyybrandao</Login>
      <Name>Thyago Brandao</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20} /> 30 seguidores - 10 seguindo
      </Data>
      <Data>
        {' '}
        <MdWork size={20} /> Dev Samurai{' '}
      </Data>
      <Data>
        {' '}
        <MdLocationCity size={20} /> Registro
      </Data>
      <Data>
        <MdLink size={20} />
        <a href="http://google.com.br">thyagobrandao.com.br</a>
      </Data>
    </Inner>
  </Container>
);

export default Profile;
