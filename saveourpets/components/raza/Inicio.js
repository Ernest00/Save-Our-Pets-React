import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import colores from '../../src/utils/colores';
import Raza from './Raza';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

const Inicio = ({ navigation }) => {
    const [razas, setRazas] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRazas = () => {
        fetch('https://api-save-our-pets.mktvirtual.net/api/razas', {
            headers: {
                'Content-Type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setRazas(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        navigation.addListener('focus', getRazas);
    }, [navigation]);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#9e9e9e" />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Razas</Text>
                <TouchableOpacity style={styles.boton} onPress={() => { navigation.navigate('crearRaza', {nombre: '', especie: ''}) }}>
                    <Ionicons name={"plus"} size={40} color={colores.blanco} />
                </TouchableOpacity>
                {
                    razas.map((datos) => {
                        return (
                            <Raza 
                                datos={datos}
                                navegacion={navigation} 
                                key={datos.id_raza} 
                            />
                        );
                    })
                }
            </View>
        </ScrollView>
    );
}

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
        elevation: 12,
        shadowColor: '#000',
    }
});

export default Inicio;