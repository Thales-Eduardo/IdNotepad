import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  padding: 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 0px 8px;
`;

export const BoxPriority1 = styled.View`
  flex-direction: column;
`;
export const BoxImmediate = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;
export const Immediate = styled.View`
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.background.red};
`;
export const ImmediateText = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.fontColor.red};
  font-weight: bold;
`;

export const BoxNormal = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Normal = styled.View`
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.background.blue};
`;
export const NormalText = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.fontColor.blue};
  font-weight: bold;
`;

export const BoxPriority2 = styled.View`
  flex-direction: column;
`;

export const BoxUrgent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;
export const Urgent = styled.View`
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.background.orange};
`;
export const UrgentText = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.fontColor.orange};
  font-weight: bold;
`;

export const BoxCheck = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Check = styled.View`
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.background.green};
`;
export const CheckText = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.fontColor.green};
  font-weight: bold;
`;

export const IdNotepad = styled(FlatList as new () => FlatList)`
  margin-bottom: 120px;
`;
