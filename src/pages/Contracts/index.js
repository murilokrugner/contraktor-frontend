import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import deleteIcon from '../../assets/eraser.svg';

import { Container, Boxer, ListContracts, List } from './styles';
import ViewContract from '../ViewContract';

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
            <Link to="viewcontract" Params={contract}>
              {contract.title}
            </Link>
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
