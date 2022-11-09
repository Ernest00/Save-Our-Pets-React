import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colores from '../../src/utils/colores';
import FormularioMascota from './FormularioMascota';

const EditarMascota = ({ navigation, route }) => {
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
        });
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

    return (
        <View style={styles.contenedor}>
            <FormularioMascota 
                titulo="Editar información de mascota" 
                textoBoton="Actualizar" 
                icono="pencil" 
                navigation={navigation} 
                datos={mascota} 
                accion={2}
            />
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
    }
});

export default EditarMascota;