import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import colores from '../../src/utils/colores';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="dog" color={colores.blanco}  />

const Raza = ({ navegacion, datos }) => (
    <Card style={styles.tarjeta}>
        <Card.Title title={datos.nombre} subtitle={datos.especie} left={LeftContent} />
        <Card.Cover source={{ uri: datos.imagen == '' ? 'https://api-save-our-pets.mktvirtual.net/storage/archivos/noimagen.png' : datos.imagen }} />
        <Card.Actions>
            <Button 
                color={colores.azul} 
                icon="pencil"
                onPress={() => {
                        navegacion.navigate('editarRaza', { id: datos.id_raza })
                    }
                }
            >
                Editar
            </Button>
            <Button 
                color={colores.rojo} 
                icon="delete"
                onPress={() => navegacion.navigate('eliminarRaza', { id: datos.id_raza })}
            >
                Eliminar
            </Button>
        </Card.Actions>
    </Card>
);

const styles = StyleSheet.create({
    icono: {
        backgroundColor: colores.azul
    },
    tarjeta: {
        marginTop: 10,
        marginBottom: 10
    }
});

export default Raza;