import React, { useCallback, useRef, useState } from 'react';
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
import Modal from '../../components/Modal';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
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

      await api.post('/users', data);
      // history.push('/');
      setIsModalVisible(true);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        return formRef.current?.setErrors(errors);
      }

      if (error.response.data.error.includes('Email')) {
        return formRef.current?.setErrors({
          email: 'E-mail em uso',
        });
      }

      if (error.response.data.error.includes('Username')) {
        return formRef.current?.setErrors({
          username: 'Nome de usuário em uso',
        });
      }
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

          <Link to="/signin">Já sou cadastrado</Link>
        </Form>

        {isModalVisible && (
          <Modal onClose={() => setIsModalVisible(false)}>
            Sucesso no cadastro!
          </Modal>
        )}
      </Content>
    </Container>
  );
};

export default SignUp;
