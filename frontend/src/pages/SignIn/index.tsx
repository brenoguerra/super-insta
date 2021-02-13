import React from 'react';

import logoImg from '../../assets/logo.svg';
import fullLogoImg from '../../assets/full-logo.svg';
import letteringImg from '../../assets/lettering.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Logo } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <Logo>
        <img src={logoImg} alt="Super Insta" />
        <img className="lettering" src={letteringImg} alt="Super Insta" />
      </Logo>

      <form>
        <Input name="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Senha" />
        <a className="forgotPassword" href="forgot">
          Esqueci minha senha
        </a>

        <Button type="submit">Entrar</Button>

        <a href="signup">Criar uma conta</a>
      </form>
    </Content>
  </Container>
);

export default SignIn;
