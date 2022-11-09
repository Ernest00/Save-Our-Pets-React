import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import colores from '../../src/utils/colores';
import Especie from './Especie';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

const Inicio = ({ navigation }) => {
    const [especies, setEspecies] = useState([]);
    const [loading, setLoading] = useState(true);

    const getEspecies = () => {
        fetch('https://api-save-our-pets.mktvirtual.net/api/especies', {
            headers: {
                'Content-Type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setEspecies(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        navigation.addListener('focus', getEspecies);
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
                <Text style={styles.titulo}>Especies</Text>
                <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate('crearEspecie') }>
                    <Ionicons name={"plus"} size={40} color={colores.blanco} />
                </TouchableOpacity>
                {
                    especies.map((datos) => {
                        return (
                            <Especie 
                                datos={datos}
                                navegacion={navigation} 
                                key={datos.id_especie} 
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

export default Inicio;