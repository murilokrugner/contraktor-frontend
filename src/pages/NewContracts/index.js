import React, { Component } from 'react';
import Header from '../../components/Header';
import { Form, Input, FileInput, useField } from '@rocketseat/unform';
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

export default class NewContracts extends Component {
  state = {
    uploadedFiles: [],
  };

  handleUpload = files => {
    console.log(files);
  };

  handleSubmit = data => {
    const response = api.post('/contracts', {
      title: data.title,
      initialdate: data.initialdate,
      expirydate: data.expirydate,
    });
    const responsefile = api.post('/files', {
      file: data,
    });

    if (responsefile) {
      toast.success('Contrato cadastrado!');
    } else {
      toast.error('Não foi possível cadastrar o contrato!');
    }

    console.log(data.file);
  };

  render() {
    return (
      <Container>
        <Header />
        <Form schema={schema} >
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
              <input type="file" id="file" />
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
}
