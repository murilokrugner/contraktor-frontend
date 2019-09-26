import styled from 'styled-components';

export const Container = styled.ul`

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    color: #00bfff;
  }

  div.partes{
    text-decoration: none;
    list-style: none;
    font: 15px 'Roboto', sans-serif;
    font-weight: bold;
    padding: 20px;
    color: #00bfff;
    margin: 60px;
    width: 30rem;
    height: 25rem;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    position: relative;

    h3 {
      margin-left: 160px;
      color: #00bfff;
    }

    li {
      margin-top: 70px;
      margin-left: 160px;
      color: #00bfff;
    }
  }
`;
