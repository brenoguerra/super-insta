import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  background: #f1f1f1;
`;

export const StoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;

  /* -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 10px;
  } */

  &::-webkit-scrollbar,
  &::-ms-scrollbar,
  &::-moz-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-track,
  &::-ms-scrollbar-track,
  &::-moz-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb,
  &::-ms-scrollbar-thumb,
  &::-moz-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover,
  &::-webkit-ms-thumb:hover,
  &::-webkit-moz-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }

  background: #fff;
  width: 350px;
  height: 100vh;

  > h1 {
    margin-top: 40px;
    margin-bottom: 50px;
    font-size: 20px;
    padding: 0 50px;
  }
`;

export const Story = styled.div`
  display: grid;
  grid-template-areas: 'picture texts';
  grid-template-columns: 1fr 3fr;
  grid-area: 5 1;

  margin-left: 30px;

  & + div {
    margin-top: 30px;
  }
`;

export const StoryItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;

  img {
    grid-area: 'picture';
    border-radius: 50%;
    width: 55px;
    height: 55px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50%;
    border: 2px solid rgb(193, 53, 132);
  }

  .texts {
    grid-area: 'texts';
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 18px;

    h1 {
      font-size: 16px;
      line-height: 16px;
      font-weight: 700;
    }

    p {
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
