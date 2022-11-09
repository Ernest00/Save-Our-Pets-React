import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import colores from '../../src/utils/colores';
import Formulario from './Formulario';

const Crear = ({ navigation }) => {
    return (
        <View style={styles.contenedor}>
            <Formulario 
                titulo="Agregar nueva especie" 
                textoBoton="Guardar" 
                icono="content-save" 
                navigation={navigation}
                datos={{
                    id_especie: '',
                    nombre: ''
                }}
                accion={1}
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

export default Crear;