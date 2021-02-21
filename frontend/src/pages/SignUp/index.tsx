import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import fullLogoImg from '../../assets/full-logo.svg';
import letteringImg from '../../assets/lettering.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Logo } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: void) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Preencha o nome'),
        email: Yup.string()
          .email('Use um e-mail válido')
          .required('Preencha o email'),
        username: Yup.string().required('Preencha o nome de usuário'),
        password: Yup.string().required('Preencha a senha'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="Super Insta" />
          <img className="lettering" src={letteringImg} alt="Super Insta" />
        </Logo>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="E-mail" />
          <Input name="username" placeholder="Nome de usuário" />
          <Input name="password" type="password" placeholder="Senha" />

          <Button type="submit">Criar nova conta</Button>

          <a href="signin">Já sou cadastrado</a>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
