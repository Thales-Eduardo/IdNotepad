import React from 'react';
import { View, ActivityIndicator } from 'react-native';

interface Posp {
  load: boolean;
}

export const FooterList: React.FC<Posp> = ({ load }) => {
  if (!load) return null;
  return (
    <View style={{ padding: 10 }}>
      <ActivityIndicator size={24} color="#000" />
    </View>
  );
};
