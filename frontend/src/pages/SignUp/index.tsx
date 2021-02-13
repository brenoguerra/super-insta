import React from 'react';
import { Form } from '@unform/web';

import logoImg from '../../assets/logo.svg';
import fullLogoImg from '../../assets/full-logo.svg';
import letteringImg from '../../assets/lettering.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Logo } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: void): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="Super Insta" />
          <img className="lettering" src={letteringImg} alt="Super Insta" />
        </Logo>

        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="user" placeholder="Usuário" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit">Criar nova conta</Button>

          <a href="signin">Já sou cadastrado</a>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
