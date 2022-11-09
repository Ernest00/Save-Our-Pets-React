import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert, View, ActivityIndicator, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import colores from '../../src/utils/colores';
import Ionicons from '@expo/vector-icons/AntDesign';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="needle" color={colores.blanco}  />

const EliminarVacuna = ({ navigation, route }) => {
    const [vacuna, setVacuna] = useState({});
    const [loading, setLoading] = useState(true);

    const obtenerVacuna = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/vacunas/${id}`, {
            headers: {
                'content-type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setVacuna(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const eliminarVacuna = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/vacunas/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json()) 
        .then(json => {
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navigation.navigate('vacunas') } },
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        obtenerVacuna(route.params.id);
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
                    onPress={() => { navigation.navigate('vacunas') }}
                    style={styles.iconoVolver}
                />
                <Text style={styles.titulo}>Eliminar vacuna</Text>
            </View>
            <Card>
                <Card.Title left={LeftContent} />
                <Card.Content>
                    <Title>{vacuna.vacuna}</Title>
                    <Paragraph>{vacuna.descripcion}</Paragraph>
                </Card.Content>
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
                                    onPress: () => eliminarVacuna(vacuna.id_vacuna)
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

export default EliminarVacuna;