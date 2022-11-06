import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import colores from '../../src/utils/colores';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/AntDesign';

const Formulario = ({ titulo, textoBoton, icono, navigation, datos, accion }) => {
    const [state, setState] = useState({
        id_raza: '',
        nombre: '',
        especie: ''
    });
    const [listadoEspecies, setListadoEspecies] = useState([]);

    const getEspecies = () => {
        fetch('https://api-save-our-pets.mktvirtual.net/api/especies', {
            headers: {
                'Content-Type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setListadoEspecies(json);
        })
        .catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getEspecies();
        setState({
            ...state, 
            id_raza: datos.id_raza,
            nombre: datos.nombre, 
            especie: datos.id_especie
        });
    }, [datos]);

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value});
    }

    const crearRaza = () => {
        let formData = new FormData();
        formData.append('nombre', state.nombre);
        formData.append('id_especie', state.especie);

        fetch('https://api-save-our-pets.mktvirtual.net/api/razas/crear', {
            headers: {
                'Content-Type' : 'multipart/form-data'
            },
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) 
        .then(json => {
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navigation.navigate('razas') }},
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
        });
    };

    const actualizarRaza = () => {
        let formData = new FormData();
        formData.append('id_raza', state.id_raza)
        formData.append('nombre', state.nombre);
        formData.append('id_especie', state.especie);

        fetch(`https://api-save-our-pets.mktvirtual.net/api/razas/actualizar/${state.id_raza}`, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            },
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) 
        .then(json => {
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navigation.navigate('razas') }},
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <View>
            <View style={styles.volver}>
                <Ionicons 
                    name={"left"} 
                    size={32} 
                    color={colores.blanco} 
                    onPress={() => { navigation.navigate('razas') }}
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
                <Picker
                    style={styles.dropdown}
                    selectedValue={state.especie}
                    onValueChange={(value) => handleChangeText('especie', value)}
                >
                    {
                        listadoEspecies.map((datos, i) => (
                            <Picker.Item 
                                label={datos.nombre} 
                                value={datos.id_especie} 
                                key={i}
                            />
                        ))
                    }
                </Picker>
                <Button 
                    icon={icono} 
                    mode="contained" 
                    onPress={() => {
                        if (accion == 1)
                            crearRaza();
                        else 
                            actualizarRaza();
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
    }
});

export default Formulario;