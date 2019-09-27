import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
//import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import deleteIcon from '../../assets/eraser.svg';
import addIcon from '../../assets/add.svg';
import contractIcon from '../../assets/contract.svg';
import arrowIcon from '../../assets/arrow.svg';
import api from '../../services/api';

export default function ViewContract() {
  const [partes, setPartes] = useState([]);

  useEffect(() => {
    async function loadPartes() {
      const response = await api.get('/partes');

      setPartes(response.data);
    }

    loadPartes();
  }, []);

  return (
    <Container>
      <Header />
      <div className="box">
        <div className="partes">
          <h3>Partes referentes ao contrato</h3>
          <Link to="newpartes">
            <button className="add" title="adicionar partes">
              <img src={addIcon} alt="delete icon" />
            </button>
          </Link>
          {partes.map(parte => (
            <li key={parte.id}>
              <span>Nome: {parte.name}</span>
              <span>Sobrenome: {parte.lastname}</span>
              <span>
                CPF: {parte.cpf.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3-')}
              </span>
              <span>
                Telefone: {parte.phone.replace(/(\d{2})(\d{5})/, '$1 $2-')}
              </span>
              <div className="divDelete">
                <button className="delete" title="Deletar contato">
                  <img src={deleteIcon} alt="delete icon" />
                </button>
              </div>
            </li>
          ))}
        </div>
        <div className="contractdiv">
          <img src={arrowIcon} alt="seta" />
          <div className="contract">
            <h3>Contrato de aluguel</h3>
            <li>
              <button className="view" title="Visualizar contrato">
                <img src={contractIcon} alt="Visualizar contrato" />
              </button>
            </li>
          </div>
        </div>
      </div>
    </Container>
  );
}
