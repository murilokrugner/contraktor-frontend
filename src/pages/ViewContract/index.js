import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container } from './styles';

import Header from '../../components/Header';

export default function ViewContract() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    async function loadContracts() {
      const response = await api.get(`/contracts/`);

      setContracts(response.data);
    }

    loadContracts();
  }, []);

  return (
    <Container>
      <Header />
    </Container>
  );
}
