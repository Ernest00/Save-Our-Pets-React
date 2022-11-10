import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import colores from '../../src/utils/colores';
import TarjetaVacuna from './TarjetaVacuna';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

const Vacunas = ({ navigation }) => {
    const [vacunas, setVacunas] = useState([]);
    const [loading, setLoading] = useState(true);

    const getVacunas = () => {
        fetch('https://api-save-our-pets.mktvirtual.net/api/vacunas', {
            headers: {
                'content-type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setVacunas(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    useEffect(() => {
        navigation.addListener('focus', getVacunas);
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={colores.rojo} />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Vacunas</Text>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('crearVacuna') }>
                    <Ionicons name={"plus"} size={40} color={colores.blanco} />
                </TouchableOpacity>
                {
                    vacunas.map((datos) => {
                        return (
                            <TarjetaVacuna 
                                datos={datos}
                                navegacion={navigation} 
                                key={datos.id_vacuna} 
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
    },
    loader: {
        flex: 1,
        backgroundColor: colores.azul,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Vacunas;