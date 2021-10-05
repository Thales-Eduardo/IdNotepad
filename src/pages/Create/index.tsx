import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { v4 as uuid } from 'uuid';
import { useNoteStorage } from '../../hook/NoteStorage';

import { Container } from './styles';

export const Create: React.FC = () => {
  const { addNote, getNote } = useNoteStorage();

  useEffect(() => {
    async function test() {
      const dataNote = {
        id: uuid(),
        title: 'newNotedawdaw1',
        check: false,
        immediate: false,
        urgent: false,
      };

      await addNote(dataNote);

      const data = await getNote();
      console.log(data);
    }
    test();
  }, []);

  return (
    <View>
      <Text>Create</Text>
    </View>
  );
};
