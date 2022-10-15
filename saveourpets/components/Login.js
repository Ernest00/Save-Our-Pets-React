import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button, Image} from 'react-native';
import colores from '../src/utils/colores';
import logo from '../assets/img/logo.png'

const Login = () => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>Save Our Pets</Text>
                <Image source={logo} resizeMode="cover"  style={styles.logo} />
                <Text style={styles.texto}>Iniciar sesión</Text>
                <View>
                    <TextInput placeholder='Usuario' style={styles.input} />
                    <TextInput placeholder='Contraseña' secureTextEntry={true} style={[styles.input, styles.marginBottom]} />
                    <Button title="Acceder" color={colores.rojo} />
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
        backgroundColor: colores.blanco,
        color: '#000',
        padding: 8,
        borderRadius: 4,
        width: 310,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: colores.rojo,
    },
    marginBottom: {
        marginBottom: 20,
    }
});

export default Login;