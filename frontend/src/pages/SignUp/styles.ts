import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  form {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    width: 340px;
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;

  @media (min-width: 1280px) {
    > img {
      width: 75px;
    }

    > .lettering {
      width: 180px;
      margin-left: -10px;
    }
  }

  @media (max-width: 1279px) {
    > img {
      width: 70px;
    }

    > .lettering {
      width: 165px;
      margin-left: -50px;
    }
  }

  @media (max-width: 600px) {
    > img {
      width: 150px;
    }

    > .lettering {
      display: none;
    }
  }
`;
