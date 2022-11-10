import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator, Image } from 'react-native';
import colores from '../../src/utils/colores';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';

const Formulario = ({ titulo, textoBoton, icono, navigation, datos, accion }) => {
    const [state, setState] = useState({
        id_especie: '',
        nombre: ''
    });
    const [loading, setLoading] = useState(true);

    const limpiarCampos = () => {
        setState({
            id_especie: '',
            nombre: ''
        });
    }

    useEffect(() => {
        setLoading(false);
        setState({
            id_especie: datos.id_especie,
            nombre: datos.nombre
        });
    }, [datos]);

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value});
    }

    const crearEspecie = () => {
        let formData = new FormData();
        
        formData.append('nombre', state.nombre);
        formData.append('id_especie', state.especie);
        setLoading(true);

        fetch('https://api-save-our-pets.mktvirtual.net/api/especies/crear', {
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
                  { text: 'OK', onPress: () => { navigation.navigate('especies') }},
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    };

    const actualizarEspecie = () => {
        let formData = new FormData();

        formData.append('id_especie', state.id_especie)
        formData.append('nombre', state.nombre);
        setLoading(true);

        fetch(`https://api-save-our-pets.mktvirtual.net/api/especies/actualizar/${state.id_especie}`, {
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
                  { text: 'OK', onPress: () => { navigation.navigate('especies') }},
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
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
                    onPress={() => { navigation.navigate('especies') }}
                    style={styles.iconoVolver}
                />
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
            <View>
                <TextInput
                    label="Nombre"
                    value={state.nombre}
                    onChangeText={(value) => handleChangeText('nombre', value)}
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
                            crearEspecie();
                        else 
                            actualizarEspecie();
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

export default Formulario;