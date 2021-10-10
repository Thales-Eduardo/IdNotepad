import React, { useState, useEffect } from 'react';

import { Note } from '../../components/Note';
import { FooterList } from '../../components/FooterList';

import { useNotepad } from '../../hook/UseNote';

import {
  Container,
  Header,
  BoxPriority1,
  BoxImmediate,
  Immediate,
  ImmediateText,
  BoxNormal,
  Normal,
  NormalText,
  BoxPriority2,
  BoxUrgent,
  Urgent,
  UrgentText,
  BoxCheck,
  Check,
  CheckText,
  IdNotepad,
} from './styles';

export const Home: React.FC = () => {
  const { notepad, getNote } = useNotepad();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getIdNotepad();
  }, []);

  async function getIdNotepad() {
    if (loading) return;
    setLoading(true);
    await getNote(page);
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <Container>
      <Header>
        <BoxPriority1>
          <BoxImmediate>
            <Immediate>
              <ImmediateText>Imediato</ImmediateText>
            </Immediate>
          </BoxImmediate>

          <BoxNormal>
            <Normal>
              <NormalText>Normal</NormalText>
            </Normal>
          </BoxNormal>
        </BoxPriority1>

        <BoxPriority2>
          <BoxUrgent>
            <Urgent>
              <UrgentText>Urgente</UrgentText>
            </Urgent>
          </BoxUrgent>

          <BoxCheck>
            <Check>
              <CheckText>Check</CheckText>
            </Check>
          </BoxCheck>
        </BoxPriority2>
      </Header>

      <IdNotepad
        data={notepad}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Note data={item} />}
        onEndReached={getIdNotepad}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooterList load={loading} />}
      />
    </Container>
  );
};
