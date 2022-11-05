import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colores from '../../src/utils/colores';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/AntDesign';

const Formulario = ({ titulo, textoBoton, icono, navigation }) => {
    const [nombre, setNombre] = useState('');
    const [especie, setEspecie] = useState('');
    const [listadoEspecies, setListadoEspecies] = useState([]);

    useEffect(() => {
        getEspecies()
    }, []);

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

    const crearRaza = ({nombre, especie}) => {
        let formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('id_especie', especie);
        console.log(formData);

        fetch('https://api-save-our-pets.mktvirtual.net/api/razas/crear', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json()) 
        .then(json => {
           alert(json);
        })
        .catch(err => {
            console.log(err);
        });
    };

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
                    value={nombre}
                    onChangeText={nombre => setNombre(nombre)}
                    selectionColor={colores.azul}
                    underlineColor={colores.azul}
                    activeUnderlineColor={colores.rojo}
                    style={styles.input}
                />
                <Picker
                    style={styles.dropdown}
                    selectedValue={especie}
                    onValueChange={(itemValue) =>
                        setEspecie(itemValue)
                    }>
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
                    onPress={ crearRaza(nombre, especie) } 
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