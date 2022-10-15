import React from 'react';
import { StatusBar } from 'react-native';
import Navegacion from './components/Navegacion';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <StatusBar />
      <Navegacion />
    </PaperProvider>
  );
}

