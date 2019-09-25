import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    max-width: 400px;
    margin: 50px auto;

    h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font: 20px 'Roboto', sans-serif;
    font-weight: bold;
    color: #00bfff;
  }

    input  {
      background-color: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #00bfff;
      margin: 0 0 10px;
      &::placeholder {
        color: #00bfff;
      }
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #fff;
      font-weight: bold;
      color: #00bfff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.04, '#fff')};
      }
    }
  }

   button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #008B8B;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.1, '#008B8B')};
    }
  }
`;

export const File = styled.div`
  align-self: center;
  margin-bottom: 30px;
  label {
    cursor: pointer;
    &::hover {
      opacity: 0.7;
    }
    img {
      height: 80px;
      width: 80px;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }
    input {
      display: none;
    }

    input.type.file {
      color: #000;
    }
  }
`;
