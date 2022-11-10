import React from 'react';
import { StyleSheet, Alert} from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import colores from '../../src/utils/colores';
import noImagen from '../../assets/img/noimagen.png';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="cat" color={colores.blanco}  />

const Especie = ({ navegacion, datos }) => (
    <Card style={styles.tarjeta}>
        <Card.Title title={datos.nombre} left={LeftContent} />
        <Card.Actions>
            <Button 
                color={colores.azul} 
                icon="pencil"
                onPress={() => {
                        navegacion.navigate('editarEspecie', { id: datos.id_especie })
                    }
                }
            >
                Editar
            </Button>
            <Button 
                color={colores.rojo} 
                icon="delete"
                onPress={() => navegacion.navigate('eliminarEspecie', { id: datos.id_especie })}
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

export default Especie;