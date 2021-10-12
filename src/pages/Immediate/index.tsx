import React, { useMemo, useState } from 'react';
import { Note } from '../../components/Note';

import { useNotepad } from '../../hook/UseNote';

import { Container, IdNotepad } from './styles';

interface NoteProps {
  id: string;
  title: string;
  check: boolean;
  immediate: boolean;
  urgent: boolean;
}

export const Immediate: React.FC = () => {
  const { notepad } = useNotepad();
  const [note, setNote] = useState<NoteProps[]>([]);

  useMemo(() => {
    note.splice(0, note.length);
    setNote(note);
    const idnotepad = notepad.filter((itens) => itens.immediate === true);
    setNote(idnotepad);
  }, [notepad]);

  return (
    <Container>
      <IdNotepad
        data={note}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Note data={item} />}
      />
    </Container>
  );
};
