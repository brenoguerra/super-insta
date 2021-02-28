import React from 'react';

import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <Sidebar />
    <h1>olá mundo</h1>
  </Container>
);

export default Home;
