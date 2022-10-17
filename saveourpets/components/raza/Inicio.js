import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colores from '../../src/utils/colores';
import Raza from './Raza';
import { Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

const Inicio = ({ navigation }) => (
    <View style={styles.contenedor}>
        <Text style={styles.titulo}>Razas</Text>
        <Raza nombre={"Raza 1"} especie={"Especie 1"} navegacion={navigation} />
        <TouchableOpacity style={styles.boton} onPress={() => { navigation.navigate('crearRaza') }}>
            <Ionicons name={"plus"} size={40} color={colores.blanco} />
        </TouchableOpacity>
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
    boton: {
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.rojo,
        zIndex: 1000,
        position: 'absolute',
        top: '70%',
        right: 20,
        elevation: 12,
        shadowColor: '#000',
    }
});

export default Inicio;