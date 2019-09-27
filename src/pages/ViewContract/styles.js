import styled from 'styled-components';

export const Container = styled.div`

  div.box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1350 px;
    max-height: auto;
  }

  div.partes{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    list-style: none;
    font: 15px 'Roboto', sans-serif;
    font-weight: bold;
    padding: 20px;
    color: #00bfff;
    margin: 60px;
    width: 30rem;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    position: relative;

    h3 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #00bfff;
    }

    button.add {
      border: 0;
      background-color: #ffffff;
      margin-top: 15px;
    }

    li {
      text-decoration: none;
      list-style: none;
      font: 15px 'Roboto', sans-serif;
      font-weight: bold;
      padding: 20px;
      color: #00bfff;
      margin: 30px;
      width: 25rem;
      height: 9.3rem;
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      background-color: #ffffff;
      position: relative;

      span {
        display: block;
        margin: 5px;
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
}

  div.contractdiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    div.contract {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      text-decoration: none;
      list-style: none;
      font: 15px 'Roboto', sans-serif;
      font-weight: bold;
      padding: 20px;
      color: #00bfff;
      margin: 30px;
      width: 20rem;
      height: 20rem;
      border-radius: 8px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      background-color: #ffffff;
      position: relative;

      button.view {
        border: 0;
        background-color: #ffffff;
      }
    }
  }
`;
