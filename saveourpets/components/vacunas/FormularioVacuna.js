import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import colores from '../../src/utils/colores';
import { TextInput, Button } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/AntDesign';

const FormularioVacuna = ({ titulo, textoBoton, icono, navigation, datos, accion }) => {
    const [state, setState] = useState({
        id_vacuna: '',
        vacuna: '',
        descripcion: '',
    });
    const [loading, setLoading] = useState(false);

    const limpiarCampos = () => {
        setState({
            id_vacuna: '',
            vacuna: '',
            descripcion: ''
        });
    }

    useEffect(() => {
        setState({
            id_vacuna: datos.id_vacuna,
            vacuna: datos.vacuna, 
            descripcion: datos.descripcion,
        });
    }, [datos]);

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value});
    }

    const crearVacuna = () => {
        let formData = new FormData();
        
        formData.append('vacuna', state.vacuna);
        formData.append('descripcion', state.descripcion);
        setLoading(true);

        fetch('https://api-save-our-pets.mktvirtual.net/api/vacunas/crear', {
            headers: {
                'content-type': 'multipart/form-data'
            },
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) 
        .then(json => {
            setLoading(false);
            limpiarCampos();
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navigation.navigate('vacunas') }},
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    const actualizarVacuna = () => {
        let formData = new FormData();

        formData.append('id_vacuna', state.id_vacuna)
        formData.append('vacuna', state.vacuna);
        formData.append('descripcion', state.descripcion);
        setLoading(true);

        fetch(`https://api-save-our-pets.mktvirtual.net/api/vacunas/actualizar/${state.id_vacuna}`, {
            headers: {
                'content-type' : 'multipart/form-data'
            },
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) 
        .then(json => {
            setLoading(false);
            limpiarCampos();
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navigation.navigate('vacunas') }},
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            setLoading(false);
            console.log(err);
        });
    }

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={colores.rojo} />
            </View>
        );
    }

    return (
        <View>
            <View style={styles.volver}>
                <Ionicons 
                    name={"left"} 
                    size={32} 
                    color={colores.blanco} 
                    onPress={() => { navigation.navigate('vacunas') }}
                    style={styles.iconoVolver}
                />
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
            <View>
                <TextInput
                    label="Vacuna"
                    value={state.vacuna}
                    onChangeText={(value) => handleChangeText('vacuna', value)}
                    selectionColor={colores.azul}
                    underlineColor={colores.azul}
                    activeUnderlineColor={colores.rojo}
                    style={styles.input}
                />
                <TextInput
                    label="Descripción"
                    value={state.descripcion}
                    onChangeText={(value) => handleChangeText('descripcion', value)}
                    selectionColor={colores.azul}
                    underlineColor={colores.azul}
                    activeUnderlineColor={colores.rojo}
                    style={styles.input}
                />
                <Button 
                    icon={icono} 
                    mode="contained" 
                    onPress={() => {
                        if (accion == 1)
                            crearVacuna();
                        else 
                            actualizarVacuna();
                    }} 
                    style={styles.marginTop} 
                    color={colores.rojo} 
                >
                    {textoBoton}
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        color: colores.blanco,
        marginBottom: 10,
    },
    tituloImagen: {
        fontSize: 17,
        color: colores.blanco,
        marginTop: 10,
    },
    input: {
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: colores.blanco,
    },
    dropdown: {
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: colores.blanco,
    },
    marginTop: {
        marginTop: 10,
    },
    volver: {
        flexDirection: 'row'
    },
    iconoVolver: {
        marginRight: 10
    },
    loader: {
        flex: 1,
        backgroundColor: colores.azul,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagen: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FormularioVacuna;