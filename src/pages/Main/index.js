import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <Container>
      <h1>SEJA BEM VINDO</h1>
      <Link to="/contracts">
        <button type="button">ENTRAR</button>
      </Link>
    </Container>
  );
}
