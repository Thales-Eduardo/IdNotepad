import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  padding: 10px;
  background: ${(props) => props.theme.colors.background.white};
`;

export const IdNotepad = styled(FlatList as new () => FlatList)``;
