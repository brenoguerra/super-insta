import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 18px;
  background: #00a3ff;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  color: #fff;
  width: 100%;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.05, '#00a3ff')};
  }

  & + a {
    text-decoration: none;
    margin-top: 24px;
    font-size: 14px;
    transition: color 0.2s;
    color: #000;
    transition: 0.2s;

    &:hover {
      color: ${shade(0.2, '#00a3ff')};
    }
  }
`;
