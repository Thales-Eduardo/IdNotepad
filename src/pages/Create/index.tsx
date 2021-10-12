import React, { useState } from 'react';
import { Image, Alert } from 'react-native';
import { useNotepad } from '../../hook/UseNote';

import img from '../../assets/idnotepad.png';

import { Container, Content, Button, Ipunt, ButtonText } from './styles';

export const Create: React.FC = () => {
  const { addNote } = useNotepad();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function addNewNotepad() {
    try {
      setLoading(true);
      if (input.trim() === '') {
        Alert.alert('Erro, tente novamente!');
      }

      const dataNote = {
        title: input,
        check: false,
        immediate: false,
        urgent: false,
      };
      await addNote(dataNote);
      setLoading(false);
      setInput('');
    } catch {
      Alert.alert('Erro, tente novamente!');
      setLoading(false);
    }
  }

  return (
    <Container>
      <Content>
        <Image source={img} />
        <Ipunt
          value={input}
          onChangeText={setInput}
          placeholder="Digite sua ideia ou tarefa"
          placeholderTextColor="#fff"
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={addNewNotepad}
        />
        <Button onPress={addNewNotepad}>
          {!loading ? (
            <ButtonText>Criar</ButtonText>
          ) : (
            <ButtonText>Criando...</ButtonText>
          )}
        </Button>
      </Content>
    </Container>
  );
};
