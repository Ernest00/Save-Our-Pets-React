import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colores from '../../src/utils/colores';
import Ionicons from '@expo/vector-icons/Ionicons';

const Requisito = ({ texto, icono }) => (
    <View style={styles.contenedor}>
        <Ionicons name={icono} size={32} color={colores.rojo} />
        <Text style={styles.descripcion}>{texto}</Text>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    descripcion: {
        color: colores.azul,
        fontSize: 16,
        marginLeft: 10,
    }
});

export default Requisito;