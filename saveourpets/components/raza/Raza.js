import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import colores from '../../src/utils/colores';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="dog" color={colores.blanco}  />

const Raza = ({nombre, especie, navegacion }) => (
    <Card>
        <Card.Title title={nombre} subtitle={especie} left={LeftContent} />
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions>
            <Button 
                color={colores.azul} 
                icon="pencil"
                onPress={() => navegacion.navigate('editarRaza')}
            >
                Editar
            </Button>
            <Button color={colores.rojo} icon="delete">Eliminar</Button>
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    icono: {
        backgroundColor: colores.azul
    }
});

export default Raza;