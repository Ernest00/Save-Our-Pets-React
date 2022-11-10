import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Alert } from 'react-native';
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import colores from '../../src/utils/colores';
import Ionicons from '@expo/vector-icons/AntDesign';

const EliminarMascota = ({ navigation, route }) => {
    const [mascota, setMascota] = useState({});
    const [loading, setLoading] = useState(true);

    const obtenerMascota = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/mascotas/${id}`, {
            headers: {
                'content-type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setMascota(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    const eliminarMascota = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/mascotas/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json()) 
        .then(json => {
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navigation.navigate('mascotas') } },
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    const formatearFecha = (fecha) => {
        if (fecha != '' && fecha != undefined && fecha != null) {
            const fechaFormato = fecha.split('-');
            return `${fechaFormato[2]}-${fechaFormato[1]}-${fechaFormato[0]}`;
        }
    }

    useEffect(() => {
        obtenerMascota(route.params.id);
    }, [route.params.id]);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={colores.rojo} />
            </View>
        );
    }

    const LeftContent = props => <Avatar.Icon 
            {...props} 
            style={styles.icono} 
            icon={mascota.id_especie == 1 ? 'cat' : mascota.id_especie == 2 ? 'dog' : 'card-heart'} 
            color={colores.blanco}  
        />

    return (
        <View style={styles.contenedor}>
            <View style={styles.volver}>
                <Ionicons 
                    name={"left"} 
                    size={32} 
                    color={colores.blanco} 
                    onPress={() => { navigation.navigate('mascotas') }}
                    style={styles.iconoVolver}
                />
                <Text style={styles.titulo}>Eliminar mascota</Text>
            </View>
            <Card style={styles.tarjeta}>
                <Card.Title left={LeftContent} />
                <Card.Content>
                    <Title>{mascota.nombre_mascota}</Title>
                    <Paragraph>Especie: {mascota.especie}</Paragraph>
                    <Paragraph>Raza: {mascota.raza}</Paragraph>
                    <Paragraph>Color de pelo: {mascota.color_pelo}</Paragraph>
                    <Paragraph>Fecha de nacimiento: {formatearFecha(mascota.fecha_nacimiento)}</Paragraph>
                    <Paragraph>Peso: {mascota.peso} kg</Paragraph>
                    <Paragraph>Esterilizado: {mascota.esterilizado}</Paragraph>
                    <Paragraph>Estado: {mascota.estado}</Paragraph>
                </Card.Content>
                <Card.Actions>
                    <Button
                        icon="delete"
                        color={colores.azul}
                        onPress={ () => Alert.alert(
                            'Información', 
                            '¿Desea eliminar este registro de mascota?',
                            [
                                {
                                    text: "Aceptar",
                                    onPress: () => eliminarMascota(mascota.id_mascota)
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
});

export default EliminarMascota;