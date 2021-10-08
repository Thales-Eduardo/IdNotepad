import React from 'react';
import { View, Text } from 'react-native';
import { useNotepad } from '../../hook/NoteStorage';

import { Container, Content, Button, Ipunt, ButtonText } from './styles';

export const Create: React.FC = () => {
  const { addNote } = useNotepad();

  async function handle(text: string) {
    const dataNote = {
      title: text,
      check: false,
      immediate: false,
      urgent: false,
    };
    // await addNote(dataNote);
  }

  return (
    <Container>
      <Content>
        <Ipunt
          placeholder="Digite sua ideia ou tarefa"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
        />
        <Button>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </Content>
    </Container>
  );
};
