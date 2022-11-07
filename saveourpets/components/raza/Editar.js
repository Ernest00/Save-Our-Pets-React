import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colores from '../../src/utils/colores';
import Formulario from './Formulario';

const Editar = ({ navigation, route }) => {
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
        });
    }

    useEffect(() => {
        obtenerRaza(route.params.id);
    }, [route.params.id]);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#9e9e9e" />
            </View>
        );
    }

    return (
        <View style={styles.contenedor}>
            <Formulario 
                titulo="Editar raza" 
                textoBoton="Actualizar" 
                icono="pencil" 
                navigation={navigation} 
                datos={raza} 
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
    }
});

export default Editar;