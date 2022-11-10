import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View, ActivityIndicator, Text } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import colores from '../../src/utils/colores';
import Ionicons from '@expo/vector-icons/AntDesign';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="dog" color={colores.blanco}  />

const Eliminar = ({ navigation, route }) => {
    const [raza, setRaza] = useState({});
    const [loading, setLoading] = useState(true);

    const obtenerRaza = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/razas/${id}`, {
            headers: {
                'Content-Type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setRaza(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    const eliminarRaza = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/razas/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json()) 
        .then(json => {
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navigation.navigate('razas') } },
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    useEffect(() => {
        obtenerRaza(route.params.id);
    }, [route.params.id]);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={colores.rojo} />
            </View>
        );
    }

    return (
        <View style={styles.contenedor}>
            <View style={styles.volver}>
                <Ionicons 
                    name={"left"} 
                    size={32} 
                    color={colores.blanco} 
                    onPress={() => { navigation.navigate('razas') }}
                    style={styles.iconoVolver}
                />
                <Text style={styles.titulo}>Eliminar raza</Text>
            </View>
            <Card>
                <Card.Title title={raza.nombre} subtitle={raza.especie} left={LeftContent} />
                <Card.Cover source={{ uri: raza.imagen == '' ? 'https://api-save-our-pets.mktvirtual.net/storage/archivos/noimagen.png' : raza.imagen }} />
                <Card.Actions>
                    <Button
                        icon="delete"
                        color={colores.azul}
                        onPress={ () => Alert.alert(
                            'Información', 
                            '¿Desea eliminar este registro?',
                            [
                                {
                                    text: "Aceptar",
                                    onPress: () => eliminarRaza(raza.id_raza)
                                },
                                {
                                    text: "Cancelar",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                }
                            ]
                        )}
                    >
                        Eliminar
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: colores.azul,
    },
    tarjeta: {
        marginTop: 10,
        marginBottom: 10
    },
    icono: {
        backgroundColor: colores.rojo
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
    loader: {
        flex: 1,
        backgroundColor: colores.azul,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Eliminar;