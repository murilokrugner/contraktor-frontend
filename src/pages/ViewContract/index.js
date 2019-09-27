import React from 'react';
import Header from '../../components/Header';
//import api from '../../services/api';
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
          <button className="add" title="adicionar partes">
            <img src={addIcon} alt="delete icon" />
          </button>
          <li>
            teste
            <div className="divDelete">
              <button className="delete" title="Deletar contato">
                <img src={deleteIcon} alt="delete icon" />
              </button>
            </div>
          </li>
        </div>

        <div className="contract">
          <h3>Contrato de aluguel</h3>
          <li>
            <button className="view" title="Vizualizar contrato">
              <img src={contractIcon} alt="Vizualizar contrato" />
            </button>
          </li>
        </div>
      </div>

    </Container>
  );
}

