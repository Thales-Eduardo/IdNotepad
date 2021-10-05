import React, { useState, createContext, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface NoteProps {
  id: string;
  title: string;
  check: boolean;
  immediate: boolean;
  urgent: boolean;
}

interface AuthContextData {
  addNote(newNote: NoteProps): Promise<void>;
  getNote(): Promise<any>;
}

const NoteContext = createContext<AuthContextData>({} as AuthContextData);

export const IdNotepad: React.FC = ({ children }) => {
  const [data, setData] = useState<NoteProps[]>([]);

  async function getNote() {
    const mynote = await AsyncStorage.getItem('@IdNotepad');
    if (!mynote) {
      return;
    }
    let noteSaves = JSON.parse(mynote) ?? [];
    return noteSaves;
  }

  async function addNote(newNote: NoteProps) {
    console.log(newNote);

    // let noteStorage = await getNote();
    // const hasnote = noteStorage.some((note: any) => note.id === newNote.id);
    // if (hasnote) return;
    // noteStorage.push(newNote);
    // await AsyncStorage.removeItem('@IdNotepad');
    // await AsyncStorage.setItem(`@IdNotepad`, JSON.stringify(newNote));
  }

  return (
    <NoteContext.Provider value={{ addNote, getNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export function useNoteStorage() {
  const context = useContext(NoteContext);
  return context;
}
