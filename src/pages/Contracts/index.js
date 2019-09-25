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
        <Link to="/newcontract">
          <button className="new" type="submit">Novo Contrato</button>
        </Link>
        <div>
          <input type="text" id="txtBusca" placeholder="Buscar..."/>
          <button className="search" type="submit">Pesquisar</button>
        </div>
      </Boxer>
      <ListContracts>
        <h3>Todos os contratos</h3>
          <li>
            <Link to="viewcontract">
              Contrato
            </Link>
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
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
