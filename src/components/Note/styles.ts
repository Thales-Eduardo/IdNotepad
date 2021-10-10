import styled, { css } from 'styled-components/native';

interface Props {
  check?: boolean;
  immediate?: boolean;
  urgent?: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 10px 10px;
  border-radius: 10px;
  margin-top: 10px;
  background: ${(props) => props.theme.colors.background.blue};

  ${(props) =>
    props.check &&
    css`
      background: ${(props) => props.theme.colors.background.green};
    `}

  ${(props) =>
    props.immediate &&
    css`
      background: ${(props) => props.theme.colors.background.red};
    `}

  ${(props) =>
    props.urgent &&
    css`
      background: ${(props) => props.theme.colors.background.orange};
    `}
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

export const NoteText = styled.Text<Props>`
  font-size: 18px;
  color: ${(props) => props.theme.colors.fontColor.blue};

  ${(props) =>
    props.check &&
    css`
      background: ${(props) => props.theme.colors.fontColor.green};
    `}

  ${(props) =>
    props.immediate &&
    css`
      background: ${(props) => props.theme.colors.fontColor.red};
    `}

  ${(props) =>
    props.urgent &&
    css`
      background: ${(props) => props.theme.colors.fontColor.orange};
    `}
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Check = styled.TouchableOpacity``;

export const Priority = styled.View`
  flex-direction: row;
`;

export const ImmediateButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const UrgentButton = styled.TouchableOpacity``;
