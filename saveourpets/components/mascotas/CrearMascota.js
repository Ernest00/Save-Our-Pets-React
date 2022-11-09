import React from 'react';
import { StyleSheet, View } from 'react-native';
import colores from '../../src/utils/colores';
import FormularioMascota from './FormularioMascota';

const CrearMascota = ({ navigation }) => {
    return (
        <View style={styles.contenedor}>
            <FormularioMascota 
                titulo="Agregar nueva mascota" 
                textoBoton="Guardar" 
                icono="content-save" 
                navigation={navigation}
                datos={{
                    id_mascota: '',
                    nombre_mascota: '',
                    id_especie: '',
                    id_raza: '',
                    color_pelo: '',
                    fecha_nacimiento: '',
                    peso: '',
                    esterilizado: '',
                    id_estado: ''
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

export default CrearMascota;