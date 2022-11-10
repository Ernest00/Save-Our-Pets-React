import React from 'react';
import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import colores from '../../src/utils/colores';

const TarjetaMascota = ({ navegacion, datos }) => {
    const LeftContent = props => <Avatar.Icon 
            {...props} 
            style={styles.icono} 
            icon={datos.id_especie == 1 ? 'cat' : datos.id_especie == 2 ? 'dog' : 'card-heart'} 
            color={colores.blanco}  
        />

    const formatearFecha = (fecha) => {
        if (fecha != '' && fecha != undefined && fecha != null) {
            const fechaFormato = fecha.split('-');
            return `${fechaFormato[2]}-${fechaFormato[1]}-${fechaFormato[0]}`;
        }
    }

    return (
        <Card style={styles.tarjeta}>
            <Card.Title left={LeftContent} />
            <Card.Content>
                <Title>{datos.nombre_mascota}</Title>
                <Paragraph>Especie: {datos.especie}</Paragraph>
                <Paragraph>Raza: {datos.raza}</Paragraph>
                <Paragraph>Color de pelo: {datos.color_pelo}</Paragraph>
                <Paragraph>Fecha de nacimiento: {formatearFecha(datos.fecha_nacimiento)}</Paragraph>
                <Paragraph>Peso: {datos.peso} kg</Paragraph>
                <Paragraph>Esterilizado: {datos.esterilizado}</Paragraph>
                <Paragraph>Estado: {datos.estado}</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button 
                    color={colores.azul} 
                    icon="information"
                    onPress={() => navegacion.navigate('reporteVacuna', { id: datos.id_mascota })
                    }
                >
                    Info
                </Button>
                <Button 
                    color={colores.azul} 
                    icon="pencil"
                    onPress={() => navegacion.navigate('editarMascota', { id: datos.id_mascota })
                    }
                >
                    Editar
                </Button>
                <Button 
                    color={colores.rojo} 
                    icon="delete"
                    onPress={() => navegacion.navigate('eliminarMascota', { id: datos.id_mascota })}
                >
                    Eliminar
                </Button>
            </Card.Actions>
        </Card>
    );
}

const styles = StyleSheet.create({
    icono: {
        backgroundColor: colores.azul
    },
    tarjeta: {
        marginTop: 10,
        marginBottom: 10
    }
});

export default TarjetaMascota;