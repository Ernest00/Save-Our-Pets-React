import React from 'react';
import { StyleSheet, Alert} from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import colores from '../../src/utils/colores';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="dog" color={colores.blanco}  />

const Raza = ({ navegacion, datos }) => {
    const eliminarRaza = (id) => {
        fetch(`https://api-save-our-pets.mktvirtual.net/api/razas/${id}`, {
            method: 'DELETE',
        })
        .then(response => response.json()) 
        .then(json => {
            Alert.alert(
                'Información', 
                json.mensaje,
                [
                  { text: 'OK', onPress: () => { navegacion.navigate('razas') } },
                ],
                { cancelable: false }
            );
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <Card style={styles.tarjeta}>
            <Card.Title title={datos.nombre} subtitle={datos.especie} left={LeftContent} />
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
                <Button 
                    color={colores.azul} 
                    icon="pencil"
                    onPress={() => {
                            navegacion.navigate('editarRaza', { id: datos.id_raza})
                        }
                    }
                >
                    Editar
                </Button>
                <Button 
                    color={colores.rojo} 
                    icon="delete"
                    onPress={() => {
                        console.log(datos.id_raza);
                        eliminarRaza(datos.id_raza);
                    }}
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

export default Raza;