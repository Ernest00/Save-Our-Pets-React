import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import colores from '../../src/utils/colores';
import perrito from '../../assets/img/perro.png';
import { TextInput, Button } from 'react-native-paper';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/AntDesign';

const Formulario = ({ navigation }) => { 
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [dui, setDui] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [especie, setEspecie] = useState('');

    return (
        <ScrollView>
            <View style={styles.contenedor}>
                <View style={styles.volver}>
                    <Ionicons 
                        name={"left"} 
                        size={32} 
                        color={colores.blanco} 
                        onPress={() => { navigation.navigate('solicitudAdopcion') }} 
                        style={styles.iconoVolver}
                    />
                    <Text style={styles.titulo}>Proceso de adopción</Text>
                </View>
                <View style={styles.encabezado}>
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
                    <Button 
                        icon="content-save" 
                        mode="contained" 
                        color={colores.rojo} 
                        style={styles.marginTop}
                    >
                        Aceptar
                    </Button>
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
    },
    volver: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconoVolver: {
        marginRight: 10
    },
    marginTop: {
        marginTop: 20,
    }
});

export default Formulario;