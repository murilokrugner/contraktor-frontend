import React from 'react';
import Header from '../../components/Header';
//import api from '../../services/api';
import { Container } from './styles';

export default function ViewContract() {


  return (
    <Container>
      <Header />
      <h1>Contrato: </h1>

      <div className="partes">
        <h3>Partes referetes ao contrato</h3>

        <li>teste</li>

      </div>
    </Container>
  );
}

