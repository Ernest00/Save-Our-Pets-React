import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import colores from '../../src/utils/colores';
import Formulario from './Formulario';

const Editar = ({ navigation, route }) => {
    const [especie, setEspecie] = useState({});
    const [loading, setLoading] = useState(true);

    const obtenerEspecie = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/especies/${id}`, {
            headers: {
                'Content-Type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setEspecie(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        obtenerEspecie(route.params.id);
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
            <Formulario 
                titulo="Editar especie" 
                textoBoton="Actualizar" 
                icono="pencil" 
                navigation={navigation} 
                datos={especie} 
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

export default Editar;