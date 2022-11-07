import React, {useState, useEffect} from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import Navegacion from './components/Navegacion';
import { Provider as PaperProvider } from 'react-native-paper';
import base64 from 'react-native-base64';
import colores from './src/utils/colores';
import Auth from './components/Auth'
import Usuarios from './components/usuario/Perfil';
import firebase from './src/utils/firebase';
import 'firebase/auth';

export default function App() {
  const [user, setUser] = useState(undefined);
useEffect(() => {
firebase.auth().onAuthStateChanged((response) => {
setUser(response);
});
}, []);
if (user === undefined) return null;
return (
<>
<StatusBar barStyle="light-content" />
<SafeAreaView style={styles.contenedor}>
{user ? <Usuarios user={user} /> : <Auth />}
</SafeAreaView>
</>
);
}

const styles = StyleSheet.create({
  background: {
  backgroundColor: '#15212b',
  height: '100%',
  },
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colores.azul
},
  });