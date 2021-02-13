import React from 'react';

import logoImg from '../../assets/logo.svg';
import fullLogoImg from '../../assets/full-logo.svg';
import letteringImg from '../../assets/lettering.svg';

import { Container, Content, Logo } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <Logo>
        <img src={logoImg} alt="Super Insta" />
        <img className="lettering" src={letteringImg} alt="Super Insta" />
      </Logo>

      <form>
        <input placeholder="Nome" />
        <input placeholder="E-mail" />
        <input placeholder="Usuário" />
        <input type="password" placeholder="Senha" />

        <button type="submit">Criar nova conta</button>

        <a href="signin">Já sou cadastrado</a>
      </form>
    </Content>
  </Container>
);

export default SignUp;
