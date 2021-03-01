import React from 'react';

import Sidebar from '../../components/Sidebar';

import { Container, StoriesContainer, Story, StoryItem } from './styles';

const profilePicture =
  'https://i.pinimg.com/474x/16/e5/f9/16e5f9626a4897b367d09328930f1992.jpg';

const stories = [
  {
    id: 1,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 2,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 3,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 4,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 5,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 11,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 22,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 33,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 44,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 55,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 12,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 23,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 34,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 45,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
  {
    id: 56,
    name: 'Jake Peralta',
    username: '@jake.peralta',
  },
];

const Home: React.FC = () => {
  function items() {
    return stories.map((story) => (
      <Story key={story.id}>
        <StoryItem>
          <img src={profilePicture} alt="Profile picture" />
          <div className="texts">
            <strong>Jake Peralta</strong>
            <p>@jake.peralta</p>
          </div>
        </StoryItem>
      </Story>
    ));
  }

  return (
    <Container>
      <Sidebar />
      <StoriesContainer>
        <h1>Featured Stories</h1>
        {items()}
      </StoriesContainer>
    </Container>
  );
};

export default Home;
