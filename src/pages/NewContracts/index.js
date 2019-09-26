import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import uploadIcon from '../../assets/upload.svg';
import { Container, File } from './styles';
import { Form, Input } from '@rocketseat/unform';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  date: Yup.date().required('A data inicial é obrigatória'),
  finaldate: Yup.date().required('A data final é obrigatória'),
});

export default function Contracts() {
  return (
    <Container>
      <Header />
      <Form schema={schema}>
        <h3>Novo contrato</h3>
        <Input name="title" placeholder="Digite o titulo do contrato" />
        <Input
          name="date"
          type="date"
          format="dd/MM/yyyy"
          placeholder="Data inicial do contrato"
        />
        <Input
          name="finaldate"
          type="date"
          placeholder="Data final do contrato"
        />
        <File>
          <label htmlFor="file">
            <img src={uploadIcon} alt="file" />
            <Input name="file" type="file" />
          </label>
        </File>

        <button type="submit">Cadastrar</button>
        <Link to="/contracts">
          <button type="button">Cancelar</button>
        </Link>
      </Form>
    </Container>
  );
}
