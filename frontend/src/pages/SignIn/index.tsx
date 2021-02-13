import React from 'react';

import logoImg from '../../assets/logo.svg';
import fullLogoImg from '../../assets/full-logo.svg';
import letteringImg from '../../assets/lettering.svg';

import { Container, Content, Logo } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <Logo>
        <img src={logoImg} alt="Super Insta" />
        <img className="lettering" src={letteringImg} alt="Super Insta" />
      </Logo>

      <form>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <a href="forgot">Esqueci minha senha</a>

        <button type="submit">Entrar</button>

        <a href="signup">Criar uma conta</a>
      </form>
    </Content>
  </Container>
);

export default SignIn;
