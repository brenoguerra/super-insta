import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & + div {
    margin-top: 18px;
  }

  input {
    background: #f7f7f7;
    border-radius: 6px;
    border: 2px solid #f7f7f7;
    padding: 12px;
    width: 100%;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: #ff5555;
      `}

    &:focus {
      background: ${darken(0.05, '#f7f7f7')};
    }
  }
`;

export const Error = styled.div`
  display: block;
  left: 0;
  color: #ff5555;
  font-size: 15px;
  margin-top: 3px;
  margin-left: 5px;
`;
