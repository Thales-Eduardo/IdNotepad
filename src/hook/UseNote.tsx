import React, { useState, createContext, useContext, useEffect } from 'react';
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
  const [skip, setPage] = useState(1);

  async function getNote(page: number) {
    setPage(page);
    const response = await api.get('/post/find_all', {
      params: {
        page: page,
        limit: 10,
      },
    });
    setData([...data, ...response.data]);
  }

  async function addNote(newNote: CreateNotepad) {
    await api.post('/post', {
      title: newNote.title,
      check: newNote.check,
      immediate: newNote.immediate,
      urgent: newNote.urgent,
    });
    await getNote(skip);
  }

  async function deleteNote(id: string) {
    await api.delete(`/post/delete/${id}`);
    await getNote(skip);
  }

  async function updateNote(data: any) {
    await api.put(`/post/update/${data.id}`, {
      check: data.check,
      immediate: data.immediate,
      urgent: data.urgent,
    });
    await getNote(skip);
  }

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
