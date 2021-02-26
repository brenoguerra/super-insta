import React from 'react';

import fullLogoImg from '../../assets/logo.svg';

import { Container, ProfileContainer } from './styles';

const Sidebar: React.FC = () => (
  <Container>
    <img src={fullLogoImg} alt="Super insta" loading="lazy" />
    <ProfileContainer>
      <h1>oi</h1>
    </ProfileContainer>
  </Container>
);

export default Sidebar;
