import React from 'react';

import { AiOutlineHome, AiOutlineCompass } from 'react-icons/ai';

import fullLogoImg from '../../assets/logo.svg';
import letteringImg from '../../assets/lettering.svg';

import {
  Container,
  LogoContainer,
  ProfileContainer,
  User,
  UserInfo,
  Posts,
  Followers,
  Following,
  BarContent,
  BarItem,
} from './styles';

const profilePicture =
  'https://i.pinimg.com/474x/16/e5/f9/16e5f9626a4897b367d09328930f1992.jpg';

const Sidebar: React.FC = () => (
  <Container>
    <LogoContainer>
      <img
        src={fullLogoImg}
        className="logo"
        alt="Super insta"
        loading="lazy"
      />
      <img
        src={letteringImg}
        className="lettering"
        alt="Super insta"
        loading="lazy"
      />
    </LogoContainer>
    <ProfileContainer>
      <User>
        <img src={profilePicture} alt="User picture" />
        <div>
          <strong>Jake Peralta</strong>
          <p>@jake.peralta</p>
        </div>
      </User>
      <UserInfo>
        <Posts>
          <h1>Posts</h1>
          <p>4</p>
        </Posts>
        <Followers>
          <h1>Followers</h1>
          <p>19,526</p>
        </Followers>
        <Following>
          <h1>Following</h1>
          <p>193</p>
        </Following>
      </UserInfo>
    </ProfileContainer>

    <BarContent>
      <BarItem>
        <p>{<AiOutlineHome size={20} />} Feed</p>
      </BarItem>
      <BarItem>
        <p>
          <AiOutlineCompass size={20} />
          Explore
        </p>
      </BarItem>
    </BarContent>
  </Container>
);

export default Sidebar;
