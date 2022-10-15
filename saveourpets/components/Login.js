import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import colores from '../src/utils/colores';
import logo from '../assets/img/logo.png'

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>Save Our Pets</Text>
                <Image source={logo} resizeMode="cover"  style={styles.logo} />
                <Text style={styles.texto}>Iniciar sesión</Text>
                <View style={styles.formulario}>
                    <TextInput
                        label="Usuario"
                        value={usuario}
                        onChangeText={usuario => setUsuario(usuario)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                    />
                    <TextInput
                        label="Contraseña"
                        secureTextEntry
                        value={password}
                        onChangeText={password => setPassword(password)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                        right={<TextInput.Icon name="eye" />}
                    />
                    <Button icon="arrow-right-bold" mode="contained" onPress={() => console.log('Pressed')} style={styles.marginTop} color={colores.rojo} >
                        Acceder
                    </Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.azul
    },
    contenido: {
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        color: colores.blanco,
        textAlign: 'center',
        marginBottom: 20,
    },
    texto: {
        fontSize: 22,
        color: colores.blanco,
        marginBottom: 15, 
    },
    logo: {
        width: 200,
        height: 200,
    },
    input: {
        marginTop: 7,
        marginBottom: 7,
    },
    marginTop: {
        marginTop: 20,
    },
    formulario: {
        width: 330,
    }
});

export default Login;