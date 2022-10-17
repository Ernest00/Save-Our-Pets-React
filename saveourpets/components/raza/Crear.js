import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import colores from '../../src/utils/colores';
import Formulario from './Formulario';

const Crear = ({ navigation }) => {
    return (
        <View style={styles.contenedor}>
            <Formulario titulo="Agregar nueva raza" textoBoton="Guardar" icono="content-save" navigation={navigation} />
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

export default Crear;