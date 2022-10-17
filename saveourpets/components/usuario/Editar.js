import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colores from '../../src/utils/colores';
import { Button, TextInput } from 'react-native-paper';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';
import Icon from '@expo/vector-icons/AntDesign';

const Editar = ({ navigation }) => {
    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [telefono, setTelefono] = useState('');
    const [dui, setDui] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    return (
        <ScrollView> 
            <View style={styles.contenedor}>
                <View style={styles.volver}>
                    <Icon 
                        name={"left"} 
                        size={32} 
                        color={colores.blanco} 
                        onPress={() => { navigation.navigate('perfil') }} 
                        style={styles.iconoVolver}
                    />
                    <Text style={styles.titulo}>Editar mi perfil</Text>
                </View>
                <View style={styles.encabezado}>
                    <View style={styles.icono}>
                        <Ionicons name="account-edit-outline" size={70} color={colores.blanco} />
                    </View>
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
                </View>
                <Button icon="pencil" mode="contained" onPress={() => alert('Pressed')} style={styles.marginTop} color={colores.rojo} >
                    Actualizar
                </Button>
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
    titulo: {
        color: colores.blanco,
        fontSize: 20,
    },
    encabezado: {
        alignItems: 'center'
    },
    marginTop: {
        marginTop: 10
    },
    input: {
        marginTop: 7,
        marginBottom: 7,
    },
    icono: {
        width: 80,
        height: 80,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colores.rojo,
        margin: 10
    },
    volver: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5
    },
    iconoVolver: {
        marginRight: 10
    }
});

export default Editar;