import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';

import light from './src/global/themes/light';
import { Routes } from './src/routes';

import { IdNotepad } from './src/hook/UseNote';

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar backgroundColor="#000000" barStyle="light-content" />
        <IdNotepad>
          <Routes />
        </IdNotepad>
      </ThemeProvider>
    </NavigationContainer>
  );
}
