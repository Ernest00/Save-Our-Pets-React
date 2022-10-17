import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colores from '../../src/utils/colores';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/AntDesign';

const Formulario = ({ titulo, textoBoton, icono, navigation }) => {
    const [nombre, setNombre] = useState('');
    const [especie, setEspecie] = useState('');
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
                    onValueChange={(itemValue, itemIndex) =>
                        setEspecie(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Button icon={icono} mode="contained" onPress={() => console.log('Pressed')} style={styles.marginTop} color={colores.rojo} >
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
        marginTop: 20,
    },
    volver: {
        flexDirection: 'row'
    },
    iconoVolver: {
        marginRight: 10
    }
});

export default Formulario;