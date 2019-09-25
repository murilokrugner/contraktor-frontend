import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import deleteIcon from '../../assets/eraser.svg';

import { Container, Box, Boxer, ListContracts } from './styles';

export default function Contracts() {
  return (
    <Container>
      <Header />
      <Boxer>
        <Link to="/newcontracts">
          <button type="submit">Novo Contrato</button>
        </Link>
      </Boxer>
      <ListContracts>
        <li>
          Contrato
          <div>
            <img src={deleteIcon} alt="delete icon" />
          </div>
        </li>
        <li>Contrato</li>
        <li>Contrato</li>
        <li>Contrato</li>
        <li>Contrato</li>
        <li>Contrato</li>
        <li>Contrato</li>
      </ListContracts>
    </Container>
  );
}

/**<Box>
            <h3>Novo</h3>
          </Box>*/
