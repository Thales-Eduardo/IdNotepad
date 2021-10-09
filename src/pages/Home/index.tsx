import React from 'react';

import { Note } from '../../components/Note';

import {
  Container,
  Content,
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
} from './styles';

export const Home: React.FC = () => {
  return (
    <Container>
      <Content>
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
      </Content>
      <Note />
    </Container>
  );
};
