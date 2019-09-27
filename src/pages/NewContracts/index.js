import React from 'react';
import Header from '../../components/Header';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import uploadIcon from '../../assets/upload.svg';
import { Container, File } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  initialdate: Yup.string().required('A data inicial é obrigatória'),
  expirydate: Yup.string().required('A data final é obrigatória'),
});

export default function NewContracts() {
  function handleSubmit(data) {
    const response = api.post('/contracts', {
      data,
    });
    console.log(data);
    if (response) {
      toast.success('Contrato cadastrado!');
    } else {
      toast.error('Não foi possível cadastrar o contrato!');
    }
  }

  return (
    <Container>
      <Header />
      <Form schema={schema} onSubmit={handleSubmit}>
        <h3>Novo contrato</h3>
        <Input name="title" placeholder="Digite o titulo do contrato" />
        <Input
          name="initialdate"
          type="text"
          format="dd/MM/yyyy"
          placeholder="Data inicial do contrato - dd/mmm/yyyy"
        />
        <Input
          name="expirydate"
          type="text"
          placeholder="Data final do contrato - dd/mmm/yyyy"
        />
        <File>
          <label htmlFor="file">
            <img src={uploadIcon} alt="file" />
            <Input name="file" type="file" id="file" accept="pdf/*" />
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
