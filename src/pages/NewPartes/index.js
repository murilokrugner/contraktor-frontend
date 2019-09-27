import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  lastname: Yup.string().required('O sobrenome é obrigatório'),
  cpf: Yup.string().required('O CPF é obrigatório'),
  phone: Yup.string().required('O telefone é obrigatório'),
});

export default function NewPartes() {
  return (
    <Container>
      <Header />
      <Form schema={schema}>
        <h3>Novo contrato</h3>
        <Input name="name" placeholder="Digite o nome" />
        <Input name="lastname" placeholder="Digite o sobrenome" />
        <Input name="cpf" placeholder="Digite o CPF" />
        <Input name="phone" placeholder="Digite o telefone" />

        <button type="submit">Cadastrar</button>

        <Link to="/viewcontract">
          <button type="button">Cancelar</button>
        </Link>
      </Form>
    </Container>
  );
}
