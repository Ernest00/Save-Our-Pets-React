import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import colores from '../../src/utils/colores';
import FormularioVacuna from './FormularioVacuna';

const CrearVacuna = ({ navigation }) => {
    return (
        <View style={styles.contenedor}>
            <FormularioVacuna 
                titulo="Agregar nueva vacuna" 
                textoBoton="Guardar" 
                icono="content-save" 
                navigation={navigation}
                datos={{
                    id_vacuna: '',
                    vacuna: '',
                    descripcion: ''
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

export default CrearVacuna;