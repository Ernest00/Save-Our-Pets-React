import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colores from '../../src/utils/colores';
import Requisito from './Requisito';
import { Card, Checkbox, Button } from 'react-native-paper';

const Inicio = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <ScrollView>
            <View style={styles.contenedor}>
                <Card>
                    <Card.Title title="Antes de adoptar ten presente:" />
                    <Card.Content>
                        <Requisito texto="¿Podrás mantenerlo?" icono="information-circle" />
                        <Requisito texto="¿Será para toda la vida?" icono="information-circle" />
                        <Requisito texto="¿Sabrás educarlo?" icono="information-circle" />
                        <Requisito texto="¿Serás paciente con su adaptación?" icono="information-circle" />
                        <Requisito texto="¿Podrás manejar sus enfermedades?" icono="information-circle" />
                        <Requisito texto="¿Podrás cubrir gastos veterinarios?" icono="information-circle" />
                        <Requisito texto="¿Lo atenderás cómo se debe?" icono="information-circle" />
                    </Card.Content>
                </Card>
                <Card style={styles.tarjeta}>
                    <Card.Title title="Requisitos:" />
                    <Card.Content>
                        <Requisito texto="Debes ser mayor de 21 años." icono="checkmark-circle" />
                        <Requisito texto="Tener empleo."  icono="checkmark-circle" />
                        <Requisito texto="Todos en el hogar estar de acuerdo con la adopción." icono="checkmark-circle" />
                        <Requisito texto="Estar de acuerdo con la castración/esterilización."  icono="checkmark-circle" />
                        <Requisito texto="Estar de acuerdo con el seguimiento permanente que se les da."  icono="checkmark-circle" />
                        <Requisito texto="Contar con un extra para gastos veterinarios ya sea consultas, controles y vacunas."  icono="checkmark-circle" />
                    </Card.Content>
                </Card>
                <View style={styles.terminos}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color={colores.blanco}
                    />
                    <Text style={styles.texto}>Estoy de acuerdo con lo anterior</Text>
                </View>
                <Button 
                    icon="arrow-right-bold" 
                    mode="contained" 
                    onPress={() => navigation.navigate('formularioAdopcion')} 
                    color={colores.rojo} 
                    disabled={!checked}
                >
                    Continuar
                </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: colores.azul,
        padding: 10
    },
    tarjeta: {
        marginTop: 20,
        marginBottom: 20,
    },
    terminos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: colores.blanco,
        marginBottom: 20,
    },
    texto: {
        color: colores.blanco,
        fontSize: 17,
        marginLeft: 4,
    }
});

export default Inicio;