import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Card, Paragraph} from 'react-native-paper';
import colores from '../../src/utils/colores';
import Ionicons from '@expo/vector-icons/AntDesign';

const ReporteVacuna = ({navigation, route}) => {
    const [vacunas, setVacunas] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerVacunas = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/mascotas/vacunas/${id}`, {
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
            setLoading(false);
            console.log(err);
        });
    }

    useEffect(() => {
        obtenerVacunas(route.params.id);
    }, [route.params.id]);

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
            <View style={styles.volver}>
                <Ionicons 
                    name={"left"} 
                    size={32} 
                    color={colores.blanco} 
                    onPress={() => { navigation.navigate('mascotas') }}
                    style={styles.iconoVolver}
                />
                <Text style={styles.titulo}>Volver</Text>
            </View>
            <Button 
                icon="needle" 
                mode="contained" 
                color={colores.rojo} 
                style={styles.marginTop}
            >
                Agregar vacuna
            </Button>
            {
                vacunas.map((vacuna, i) => ( 
                    <Card style={styles.tarjeta} key={i}>
                        <Card.Content>
                            <Paragraph>{vacuna.vacuna}</Paragraph>
                        </Card.Content>
                    </Card>
                ))
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
    },
    tarjeta: {
        marginTop: 10,
        marginBottom: 10
    },
    volver: {
        flexDirection: 'row'
    },
    iconoVolver: {
        marginRight: 10
    },
    titulo: {
        fontSize: 20,
        color: colores.blanco,
        marginBottom: 10,
    },
    marginTop: 20
});

export default ReporteVacuna;