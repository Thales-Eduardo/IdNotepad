import React from 'react';
import { View, Text } from 'react-native';

import { Note } from '../../components/Note';

import { Container, Title } from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Title>Taferas & Ideias</Title>
      <Note />
    </Container>
  );
};
