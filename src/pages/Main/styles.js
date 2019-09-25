import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  display: flex;
  padding: 140px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font: 50px 'Roboto', sans-serif;
    font-weight: bold;
    color: #00bfff;
  }

  button {
    height: 44px;
    width: 100px;
    margin: 30px;
    background: #fff;
    font-weight: bold;
    color: #00bfff;
    border: 0;
    border-radius: 7px;
    font-size: 20px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.04, '#fff')};
    }
  }
  }

`;
