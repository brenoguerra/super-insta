import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';
import fullLogoImg from '../../assets/full-logo.svg';
import letteringImg from '../../assets/lettering.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Logo } from './styles';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Preencha o nome de usuário'),
          password: Yup.string().required('Preencha a senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          username: data.username,
          password: data.password,
        });

        history.push('/');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        formRef.current?.setErrors({
          username: '   ',
          password: 'Credenciais inválidas',
        });
      }
    },
    [signIn, history]
  );

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoImg} alt="Super Insta" />
          <img className="lettering" src={letteringImg} alt="Super Insta" />
        </Logo>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="username" placeholder="Nome de usuário" />
          <Input name="password" type="password" placeholder="Senha" />
          <Link className="forgotPassword" to="forgot">
            Esqueci minha senha
          </Link>

          <Button type="submit">Entrar</Button>

          <Link to="signup">Criar uma conta</Link>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
