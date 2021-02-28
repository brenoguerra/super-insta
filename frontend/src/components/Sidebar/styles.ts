import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 260px;
    background-color: rgba(204, 182, 239, 0.5);
  }

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 160px;
    background-color: rgba(204, 182, 239, 0.5);
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 60px;
    background-color: rgba(204, 182, 239, 0.5);
  }
`;

export const LogoContainer = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    .logo {
      max-width: 55px;
    }

    .lettering {
      max-width: 200px;
      margin-left: -50px;
    }
  }

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    .logo {
      max-width: 45px;
    }

    .lettering {
      max-width: 160px;
      margin-left: -40px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    .logo {
      max-width: 50px;
    }

    .lettering {
      display: none;
    }
  }
`;

export const ProfileContainer = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 40px;
  }

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 40px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;

    margin-top: 40px;
  }
`;

export const User = styled.div`
  @media (min-width: 1280px) {
    display: flex;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      margin-left: 15px;

      strong {
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 15px;

      strong {
        font-size: 16px;
        line-height: 16px;
        font-weight: 700;
      }

      p {
        font-size: 14px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    > div {
      display: none;
    }
  }
`;

export const UserInfo = styled.div`
  @media (min-width: 1280px) {
    display: grid;
    grid-template-areas: 'posts followers following';

    margin-top: 60px;
  }

  @media (max-width: 1279px) {
    visibility: hidden;
    display: none;
  }

  @media (max-width: 600px) {
    visibility: hidden;
    display: none;
  }
`;

export const Posts = styled.div`
  @media (min-width: 1280px) {
    grid-area: 'posts';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }

    p {
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 1279px) {
    visibility: hidden;
    display: none;
  }

  @media (max-width: 600) {
    visibility: hidden;
    display: none;
  }
`;

export const Followers = styled.div`
  @media (min-width: 1280px) {
    grid-area: 'followers';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 15px;

    h1 {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }

    p {
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 1279px) {
    visibility: hidden;
    display: none;
  }

  @media (max-width: 600px) {
    visibility: hidden;
    display: none;
  }
`;

export const Following = styled.div`
  @media (min-width: 1280px) {
    grid-area: 'following';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.7);
    }

    p {
      font-size: 14px;
      line-height: 22px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 1279px) {
    visibility: hidden;
    display: none;
  }

  @media (max-width: 600px) {
    visibility: hidden;
    display: none;
  }
`;

export const BarContent = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-top: 50px;
  }

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: column;

    margin-top: 50px;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    margin-top: 50px;
  }
`;

export const BarItem = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 50px;

    width: 100%;
    height: 40px;

    p {
      font-size: 18px;

      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }

    transition: background 0.2s;

    &:hover {
      background-color: ${shade(0.01, '#B2A5D3')};
      cursor: pointer;
    }
  }

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;

    width: 100%;
    height: 40px;

    transition: background 0.2s;

    &:hover {
      background-color: ${shade(0.01, '#B2A5D3')};
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;

    width: 100%;
    height: 40px;

    transition: background 0.2s;

    &:hover {
      background-color: ${shade(0.01, '#B2A5D3')};
      cursor: pointer;
    }
  }
`;

export const BarText = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;

    p {
      font-size: 18px;

      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 1279px) {
    display: flex;
    flex-direction: row;

    p {
      font-size: 18px;

      display: flex;
      align-items: center;
    }

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;

    p {
      display: none;
    }

    svg {
      width: 22px;
      height: 22px;
      margin-right: 9px;
    }
  }
`;
