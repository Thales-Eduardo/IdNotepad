import React, { useState, createContext, useContext, useCallback } from 'react';
import { api } from '../services/api';

interface NoteProps {
  id: string;
  title: string;
  check: boolean;
  immediate: boolean;
  urgent: boolean;
}

interface CreateNotepad {
  title: string;
  check: boolean;
  immediate: boolean;
  urgent: boolean;
}

interface AuthContextData {
  notepad: NoteProps[];
  addNote(newNote: CreateNotepad): Promise<void>;
  getNote(page: number): Promise<any>;
  deleteNote(id: string): Promise<void>;
  updateNote(data: NoteProps): Promise<void>;
}

const NoteContext = createContext<AuthContextData>({} as AuthContextData);

export const IdNotepad: React.FC = ({ children }) => {
  const [data, setData] = useState<NoteProps[]>([]);

  async function getNote(page: number) {
    const response = await api.get('/post/find_all', {
      params: {
        page: page,
        limit: 10,
      },
    });
    setData([...data, ...response.data]);
  }

  const addNote = useCallback(async (newNote: CreateNotepad) => {
    await api.post('/post', {
      title: newNote.title,
      check: newNote.check,
      immediate: newNote.immediate,
      urgent: newNote.urgent,
    });
    data.splice(0, data.length);
    setData(data);
    await getNote(1);
  }, []);

  const deleteNote = useCallback(async (id: string) => {
    await api.delete(`/post/delete/${id}`);
    data.splice(0, data.length);
    setData(data);
    await getNote(1);
  }, []);

  const updateNote = useCallback(async (update: any) => {
    await api.put(`/post/update/${update.id}`, {
      check: update.check,
      immediate: update.immediate,
      urgent: update.urgent,
    });

    data.splice(0, data.length);
    setData(data);
    await getNote(1);
  }, []);

  return (
    <NoteContext.Provider
      value={{ notepad: data, addNote, getNote, deleteNote, updateNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export function useNotepad() {
  const context = useContext(NoteContext);
  return context;
}
