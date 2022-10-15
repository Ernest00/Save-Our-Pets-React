import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import colores from '../src/utils/colores';
import logo from '../assets/img/logo.png';

const Loader = () => (
    <View style={styles.contenedor}>
        <Image source={logo} style={styles.imagen} resizeMode="cover" />
        <Text style={styles.texto}>Save Our Pets</Text>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.azul,
        padding: 50
    },
    imagen: {
        width: 260,
        height: 260,
    },
    texto: {
        color: colores.blanco,
        fontSize: 20,
    }
});

export default Loader;