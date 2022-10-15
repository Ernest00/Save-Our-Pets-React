import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colores from '../../src/utils/colores';

const Listado = () => (
    <View>
        <Text>Listado de razas</Text>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: colores.azul
    }
});

export default Listado;