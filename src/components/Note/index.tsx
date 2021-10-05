import React from 'react';
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';

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

export const Note: React.FC = () => {
  return (
    <Container>
      <ButtonClose>
        <AntDesign name="close" size={24} color="#fff" />
      </ButtonClose>

      <NoteView>
        <NoteText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet
          ducimus excepturi voluptatum iusto reprehenderit possimus vel, facilis
          iste quasi quia aut ex suscipit tenetur architecto rem nam ab animi?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eveniet
          ducimus excepturi voluptatum iusto reprehenderit possimus vel, facilis
          iste quasi quia aut ex suscipit tenetur architecto rem nam ab animi?
        </NoteText>
      </NoteView>

      <Content>
        <Check>
          <AntDesign name="checkcircle" size={24} color="#fff" />
        </Check>

        <Priority>
          <ImmediateButton>
            <FontAwesome5 name="fire" size={24} color="#fff" />
          </ImmediateButton>

          <UrgentButton>
            <Entypo name="bell" size={24} color="#fff" />
          </UrgentButton>
        </Priority>
      </Content>
    </Container>
  );
};
