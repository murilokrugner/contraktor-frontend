import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const Boxer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    input {
      flex-direction: row;
      justify-content: flex-end;
      width: 220px;
      border: 1px solid #e6ecf0;
      height: 35px;
      padding: 0 30px 0 12px;
      border-radius: 16px;
      color: #667581;
      font-size: 12px;
      background: #f5f8fa url('/images/search.svg') no-repeat 190px center;
    }
  }
  button.search {
    margin: 35px 10px 0;
    height: 30px;
    width: 100px;
    background: #fff;
    font-weight: bold;
    color: #00bfff;
    border: 0;
    border-radius: 7px;
    font-size: 13px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.04, '#fff')};
    }
  }
  button.new {
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

  h3 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px;
    font: 20px 'Roboto', sans-serif;
    font-weight: bold;
    color: #00bfff;
  }

  li {
    text-decoration: none;
    list-style: none;
    font: 15px 'Roboto', sans-serif;
    font-weight: bold;
    padding: 20px;
    color: #00bfff;
    margin: 30px;
    width: 30rem;
    height: 5rem;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    position: relative;

    a {
      color: #00bfff;
      text-decoration: none;
    }
    div.divDelete {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      button.delete {
        border: 0;
        background-color: #ffffff;
      }
      img.title {
        color: #fff;
      }
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
