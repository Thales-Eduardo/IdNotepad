import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 10px 10px;
  background: ${(props) => props.theme.colors.background.blue};
  border-radius: 10px;
`;

export const ButtonClose = styled.TouchableOpacity`
  width: 24px;
  align-self: flex-end;
`;

export const NoteView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  max-height: 80px;
  padding: 3px;
  margin: 10px 0px;
  width: 100%;
`;

export const NoteText = styled.Text`
  color: ${(props) => props.theme.colors.fontColor.blue};
  font-size: 18px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0px 5px;
`;

export const Check = styled.TouchableOpacity``;

export const Priority = styled.View`
  flex-direction: row;
`;

export const ImmediateButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const UrgentButton = styled.TouchableOpacity``;
