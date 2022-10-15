import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import colores from '../../src/utils/colores';
import perrito from '../../assets/img/perro.png';
import { TextInput } from 'react-native-paper';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

const Formulario = () => { 
    const [nombres, setNombres] = React.useState('');
    const [apellidos, setApellidos] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [dui, setDui] = React.useState('');
    const [correo, setCorreo] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [fechaNacimiento, setFechaNacimiento] = React.useState('');
    const [especie, setEspecie] = React.useState('');

    return (
        <ScrollView>
            <View style={styles.contenedor}>
                <View style={styles.encabezado}>
                    <Text style={styles.titulo}>Proceso de adopción</Text>
                    <Image resizeMode='cover' source={perrito} style={styles.imagen} />
                    <Text style={styles.paso}>Paso 1: Información personal</Text>
                </View>
                <View>
                    <TextInput
                        label="Nombres"
                        value={nombres}
                        onChangeText={nombres => setNombres(nombres)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                    />
                    <TextInput
                        label="Apellidos"
                        value={apellidos}
                        onChangeText={apellidos => setApellidos(apellidos)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                    />
                    <TextInput
                        label="Teléfono"
                        value={telefono}
                        onChangeText={telefono => setTelefono(telefono)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        label="DUI"
                        value={dui}
                        onChangeText={dui => setDui(dui)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                        keyboardType="numeric"
                    />
                   
                    <TextInput
                        label="Correo electrónico"
                        value={correo}
                        onChangeText={correo => setCorreo(correo)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                        keyboardType="email-address"
                    />
                    <TextInput
                        label="Contraseña"
                        secureTextEntry
                        value={password}
                        onChangeText={password => setPassword(password)}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                        right={<TextInput.Icon name="eye" />}
                    />
                    <TextInput
                        label="Confirmar contraseña"
                        secureTextEntry
                        value={confirmPassword}
                        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                        selectionColor={colores.blanco}
                        underlineColor={colores.blanco}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                        right={<TextInput.Icon name="eye" />}
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
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: colores.azul,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    encabezado: {
        alignItems: 'center',
    },
    titulo: {
        textAlign: 'center',
        color: colores.blanco,
        fontSize: 25,
        fontWeight: '500',
    },
    paso: {
       color: colores.blanco,
       fontSize: 18,
       margin: 10 
    },
    imagen: {
        width: 120,
        height: 120,
        margin: 10
    },
    input: {
        marginTop: 7,
        marginBottom: 7,
    },
    dropdown: {
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: colores.blanco,
    }
});

export default Formulario;