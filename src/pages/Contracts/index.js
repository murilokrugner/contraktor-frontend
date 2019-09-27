import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import deleteIcon from '../../assets/eraser.svg';

import { Container, Boxer, ListContracts } from './styles';

export default function Contracts() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    async function loadContracts() {
      const response = await api.get('/contracts');

      setContracts(response.data);
    }

    loadContracts();
  }, []);

  return (
    <Container>
      <Header />
      <Boxer>
        <Link to="/newcontract">
          <button className="new" type="submit">
            Novo Contrato
          </button>
        </Link>
        <div>
          <input type="text" id="txtBusca" placeholder="Buscar..." />
          <button className="search" type="submit">
            Pesquisar
          </button>
        </div>
      </Boxer>

      <ListContracts>
        <h3>Todos os contratos</h3>
        {contracts.map(contract => (
          <li key={contract.id}>
            <span>
              <Link to="viewcontract" Params={contract}>
                Título: {contract.title}
              </Link>
            </span>
            <span>Data inicial: </span>
            <span>Data final: </span>
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
        ))}
      </ListContracts>
    </Container>
  );
}
/**<div className="divDelete">
                <button className="delete" title="Deletar contato">
                  <img src={deleteIcon} alt="delete icon" />
                </button>
              </div> */
