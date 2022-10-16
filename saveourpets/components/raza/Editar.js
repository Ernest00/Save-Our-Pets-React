import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import colores from '../../src/utils/colores';
import Formulario from './Formulario';

const Editar = () => {
    return (
        <View style={styles.contenedor}>
            <Formulario titulo="Editar raza" textoBoton="Actualizar" icono="pencil" />
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