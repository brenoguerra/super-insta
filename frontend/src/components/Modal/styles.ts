import styled, { keyframes } from 'styled-components';

export const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  transition: opacity 2s linear, max-height 0s linear 0s;

  animation: ${animation} 0.15s;
`;

export const Content = styled.div`
  background-color: white;
  width: 355px;
  max-height: 383px;

  border-radius: 20px;

  button {
    display: flex;
    position: relative;
    align-items: center;

    background-color: transparent;
    outline: none;
    border-style: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 30px);
    top: 10px;
    cursor: pointer;

    &::before,
    &::after {
      content: ' ';
      position: absolute;
      width: 2px;
      height: 24px;
      background-color: #999;
    }

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px 50px 30px;
  font-size: 22px;
  color: #444;
`;
