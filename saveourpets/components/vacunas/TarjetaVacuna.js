import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import colores from '../../src/utils/colores';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="needle" color={colores.blanco}  />

const TarjetaVacuna = ({ navegacion, datos }) => (
    <Card style={styles.tarjeta}>
        <Card.Title left={LeftContent} />
        <Card.Content>
            <Title>{datos.vacuna}</Title>
            <Paragraph>{datos.descripcion}</Paragraph>
        </Card.Content>
        <Card.Actions>
            <Button 
                color={colores.azul} 
                icon="pencil"
                onPress={() => navegacion.navigate('editarVacuna', { id: datos.id_vacuna })
                }
            >
                Editar
            </Button>
            <Button 
                color={colores.rojo} 
                icon="delete"
                onPress={() => navegacion.navigate('eliminarVacuna', { id: datos.id_vacuna })}
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

export default TarjetaVacuna;