import React from 'react';
import Header from '../../components/Header';

import { Form, Input } from '@rocketseat/unform';

import { Container, ContainerForm } from './styles';

export default function Contracts() {
  return (
    <Container>
      <Header />
      <ContainerForm>
        <Form>
          <Input name="name" placeholder="Titulo do Contrato" />
          <Input name="date" type="date" placeholder="Data inicial" />
          <Input name="finaldate" type="date" placeholder="Data final" />
          <hr />
          <button type="submit">Cadastrar</button>
          <button type="button" onClick={() => {}}>
            Cancelar
          </button>
        </Form>
      </ContainerForm>
    </Container>
  )
}
