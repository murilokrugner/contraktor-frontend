import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import uploadIcon from '../../assets/upload.svg';

import { Container, File } from './styles';

export default function Contracts() {
  return (
    <Container>
      <Header />
        <Form>
          <h3>Novo contrato</h3>
          <Input name="title" placeholder="Digite o titulo do contrato"/>
          <Input name="date" type="date" placeholder="Data inicial do contrato" />
          <Input name="finaldate" type="date" placeholder="Data final do contrato" />
          <File>
          <label htmlFor="avatar">
            <img
              src={
                uploadIcon
              }
              alt="Avatar"
            />

            <input
              type="file"
              id="avatar"
            />
          </label>
          </File>

          <button type="submit">Cadastrar</button>
          <Link to="/contracts">
          <button type="button">Cancelar</button>
          </Link>
        </Form>
    </Container>
  )
}
