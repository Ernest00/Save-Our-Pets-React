import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colores from '../../src/utils/colores';
import Raza from './Raza';

const Inicio = ({ navigation }) => (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Razas</Text>
        <Raza nombre={"Raza 1"} especie={"Especie 1"} navegacion={navigation} />
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: colores.azul,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    titulo: {
        fontSize: 20,
        color: colores.blanco,
        marginBottom: 10,
    },
});

export default Inicio;