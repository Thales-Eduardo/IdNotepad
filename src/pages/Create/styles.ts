import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 10px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Ipunt = styled.TextInput`
  width: 90%;
  height: 149px;
  color: ${(props) => props.theme.colors.fontColor.white};
  background: ${(props) => props.theme.colors.background.gray};
  font-size: 18px;
  border-radius: 10px;
  margin-top: 30px;
  text-align: center;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background: ${(props) => props.theme.colors.background.gray};
  font-size: 18px;
  margin-top: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.fontColor.white};
`;
