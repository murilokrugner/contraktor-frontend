import React from 'react';
import Header from '../../components/Header';
//import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import deleteIcon from '../../assets/eraser.svg';
import addIcon from '../../assets/add.svg';
import contractIcon from '../../assets/contract.svg';

export default function ViewContract() {


  return (
    <Container>
      <Header />
      <div className="box">

        <div className="partes">
          <h3>Partes referetes ao contrato</h3>
          <Link to="newpartes">
            <button className="add" title="adicionar partes">
              <img src={addIcon} alt="delete icon" />
            </button>
          </Link>
          <li>
              <span>Nome: </span>
              <span>Sobrenome: </span>
              <span>CPF: </span>
              <span>Telefone: </span>
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
          <li>
              <span>Nome: </span>
              <span>Sobrenome: </span>
              <span>CPF: </span>
              <span>Telefone: </span>
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
          <li>
              <span>Nome: </span>
              <span>Sobrenome: </span>
              <span>CPF: </span>
              <span>Telefone: </span>
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
          <li>
              <span>Nome: </span>
              <span>Sobrenome: </span>
              <span>CPF: </span>
              <span>Telefone: </span>
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
          <li>
              <span>Nome: </span>
              <span>Sobrenome: </span>
              <span>CPF: </span>
              <span>Telefone: </span>
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
        </div>

        <div className="contractdiv">
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

