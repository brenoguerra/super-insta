import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import fullLogoImg from '../../assets/full-logo.svg';
import letteringImg from '../../assets/lettering.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Content, Logo } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  username: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
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

        history.push('/');

        await api.post('/users', data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        // exibir erro (popup)
      }
    },
    [history]
  );

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

          <Link to="/signin">Já sou cadastrado</Link>
        </Form>
      </Content>
    </Container>
  );
};

export default SignUp;
