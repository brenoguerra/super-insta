import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 18px;
  }

  input {
    background: #f7f7f7;
    border-radius: 6px;
    border: 2px solid #f7f7f7;
    padding: 12px;
    width: 100%;
  }
`;
