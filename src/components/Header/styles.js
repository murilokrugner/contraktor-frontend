import styled from 'styled-components';
//import { darken } from 'polished';

export const Container = styled.div`
  background: #ffffff;
  padding: 0 30px;
  border-bottom: solid 2px rgba(180, 180, 180, 0.24);
`;

export const Content = styled.div`
  height: 90px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      color: #00BFFF;
      font-size: 16px;
    }

    ul {
      display: flex;
      list-style: none;

    }

    li {
      display: flex;
      align-items: center;
      font-size: 13px;
      color: #667580;
      font-weight: bold;
      margin-left: 30px;
    }
  }
`;

