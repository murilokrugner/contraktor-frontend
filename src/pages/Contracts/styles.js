import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Boxer = styled.div`
  display: flex;

  button {
    margin: 50px 70px 0;
    height: 44px;
    width: 150px;
    background: #fff;
    font-weight: bold;
    color: #00bfff;
    border: 0;
    border-radius: 7px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.04, '#fff')};
    }
  }
`;

export const Box = styled.div`
  display: flex;
  margin: 50px;
  width: 20rem;
  height: 10rem;
  border-radius: 8px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  position: relative;

  h3 {
    display: flex;
    padding: 20px;
    font: 30px 'Roboto', sans-serif;
    font-weight: bold;
    color: #00bfff;
  }

  ul {
  }
`;

export const ListContracts = styled.ul`
  display: flex;
  margin: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  li {
    list-style: none;
    font: 15px 'Roboto', sans-serif;
    font-weight: bold;
    color: #00bfff;
    margin: 30px;
    width: 30rem;
    height: 5rem;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    position: relative;
  }
`;
