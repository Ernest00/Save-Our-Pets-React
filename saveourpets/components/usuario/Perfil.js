import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from '../../assets/img/logo.png';
import colores from '../../src/utils/colores';
import { Button } from 'react-native-paper';
import firebase from '../../src/utils/firebase';

const Perfil = ({ navigation }) => (
    <View style={styles.contenedor}>
        <View style={styles.perfil}>
            <Text style={styles.titulo}>Mi perfil</Text>
            <Image source={logo}  resizeMode='cover' style={styles.imagen} />
        </View>
        <View>
            <Text style={styles.texto}><Text style={styles.dato}>Nombre: </Text> Carlos López</Text>
            <Text style={styles.texto}><Text style={styles.dato}>Fecha de nacimiento: </Text>31/08/2000</Text>
            <Text style={styles.texto}><Text style={styles.dato}>Teléfono: </Text>60045322</Text>
            <Text style={styles.texto}><Text style={styles.dato}>Email: </Text>rcla200031@gmail.com</Text>
            <Text style={styles.texto}><Text style={styles.dato}>DUI: </Text>06118127-5</Text>
        </View>
        <Button 
            icon="pencil" 
            mode="contained" 
            onPress={() => navigation.navigate('editarPerfil') } 
            style={styles.marginTop} 
            color={colores.rojo} >
            Editar
        </Button>
<Button icon="arrow-right-bold" mode="contained" onPress={() => firebase.auth().signOut(
)} style={styles.marginTop} color={colores.rojo} >
                        Cerrar Sesión
                    </Button>
    </View>
);

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: colores.azul,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    perfil: {
        alignItems: 'center'
    },
    titulo: {
        color: colores.blanco,
        fontSize: 20,
        padding: 10,
    },
    imagen: {
        width: 230,
        height: 230,
    },
    texto: {
        fontSize: 16,
        color: colores.blanco,
        marginTop: 5,
        marginBottom: 5
    },
    dato: {
        fontSize: 18,
        color: colores.blanco,
        fontWeight: '700',
    },
    marginTop: {
        marginTop: 10
    }
});

export default Perfil;