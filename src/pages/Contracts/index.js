import React from 'react';

//import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Box, Boxer } from './styles';

export default function Contracts() {
  return (
    <Container>
      <Header />
      <Boxer>
        <Box>
          <h3>Contratos</h3>
          <ul>
            <li></li>
          </ul>
        </Box>
        <Box>
          <h3>Partes</h3>
        </Box>
      </Boxer>
    </Container>
  );
}
