import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <img src='/perfil-1.jpg' alt='Foto de Perfil' />
        <h1>
          Olá, eu sou o <span>Walber</span>
        </h1>
      </Container>
    </>
  );
};

export default Home;
