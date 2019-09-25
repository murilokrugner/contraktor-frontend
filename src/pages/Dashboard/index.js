import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Box, Boxer } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header />
      <Boxer>
        <Link to="/contracts">
          <Box>
            <h3>Contratos</h3>
          </Box>
        </Link>
      </Boxer>
    </Container>
  );
}
