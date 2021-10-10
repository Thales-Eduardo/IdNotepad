import React from 'react';
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons';

import { useNotepad } from '../../hook/UseNote';

import {
  Container,
  ButtonClose,
  NoteView,
  NoteText,
  Content,
  Priority,
  Check,
  ImmediateButton,
  UrgentButton,
} from './styles';

interface Props {
  id: string;
  title: string;
  check: boolean;
  immediate: boolean;
  urgent: boolean;
}

interface NoteProps {
  data: Props;
}

export const Note: React.FC<NoteProps> = ({ data }) => {
  const { deleteNote, updateNote } = useNotepad();

  async function deleteNotepad(id: string) {
    await deleteNote(id);
  }

  async function updateCheck(data: any) {
    const update: any = {
      id: data.id,
      title: data.title,
      check: true,
      immediate: false,
      urgent: false,
    };
    await updateNote(update);
  }

  async function updateUrgent(data: any) {
    const update: any = {
      id: data.id,
      title: data.title,
      check: false,
      immediate: false,
      urgent: true,
    };
    await updateNote(update);
  }

  async function updateImmediate(data: any) {
    const update: any = {
      id: data.id,
      title: data.title,
      check: false,
      immediate: true,
      urgent: false,
    };
    await updateNote(update);
  }

  return (
    <Container
      check={data.check}
      immediate={data.immediate}
      urgent={data.urgent}
    >
      <ButtonClose onPress={() => deleteNotepad(data.id)}>
        <AntDesign name="close" size={24} color="#fff" />
      </ButtonClose>

      <NoteView>
        <NoteText
          check={data.check}
          immediate={data.immediate}
          urgent={data.urgent}
        >
          {data.title}
        </NoteText>
      </NoteView>

      <Content>
        <Check onPress={() => updateCheck(data)}>
          <AntDesign name="checkcircle" size={24} color="#fff" />
        </Check>

        <Priority>
          <ImmediateButton onPress={() => updateUrgent(data)}>
            <Ionicons name="rocket" size={24} color="#fff" />
          </ImmediateButton>

          <UrgentButton onPress={() => updateImmediate(data)}>
            <MaterialCommunityIcons name="bell-ring" size={24} color="#fff" />
          </UrgentButton>
        </Priority>
      </Content>
    </Container>
  );
};
