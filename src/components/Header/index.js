import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
        <Content>
          <nav>
            <ul>
              <li>
                <Link to="/contracts">INICIO</Link>
              </li>
              <li>
                <Link to="/">SAIR</Link>
              </li>
            </ul>
          </nav>
        </Content>
    </Container>
  );
}
