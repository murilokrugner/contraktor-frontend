import React from 'react';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <button type="submit">Cadastrar Contrato</button>;
    </Container>
  );
}
