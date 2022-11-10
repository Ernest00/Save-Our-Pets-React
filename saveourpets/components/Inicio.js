import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Button, Card } from 'react-native-paper';
import colores from '../src/utils/colores';

const LeftContent = props => <Avatar.Icon {...props} style={styles.icono} icon="dog" color={colores.blanco}  />

const Inicio = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.contenedor}>
                <Card style={styles.tarjeta}>
                    <Card.Title title={"Especies"} subtitle={"Gestione las especies"} left={LeftContent} />
                    <Card.Cover source={{ uri: 'https://www.zooplus.es/magazine/wp-content/uploads/2019/10/featured-img-2-768x576.jpg' }} />
                    <Card.Actions>
                        <Button 
                            color={colores.azul} 
                            icon="dog"
                            onPress={() => {
                                    navigation.navigate('especies')
                                }
                            }
                        >
                            Ir
                        </Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.tarjeta}>
                    <Card.Title title={"Mascotas"} subtitle={"Gestione las mascotas"} left={LeftContent} />
                    <Card.Cover source={{ uri: 'https://www.bbva.ch/wp-content/uploads/2022/05/recurso_mascotas.jpg' }} />
                    <Card.Actions>
                        <Button 
                            color={colores.azul} 
                            icon="dog"
                            onPress={() => {
                                    navigation.navigate('mascotas')
                                }
                            }
                        >
                            Ir
                        </Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.tarjeta}>
                    <Card.Title title={"Razas"} subtitle={"Gestione las razas"} left={LeftContent} />
                    <Card.Cover source={{ uri: 'https://misanimales.com/wp-content/uploads/2020/09/razas-perro-fondo-blanco.jpg' }} />
                    <Card.Actions>
                        <Button 
                            color={colores.azul} 
                            icon="dog"
                            onPress={() => {
                                    navigation.navigate('razas')
                                }
                            }
                        >
                            Ir
                        </Button>
                    </Card.Actions>
                </Card>
                <Card style={styles.tarjeta}>
                    <Card.Title title={"Vacunas"} subtitle={"Gestione las vacunas"} left={LeftContent} />
                    <Card.Cover source={{ uri: 'https://hvc.cat/wp-content/uploads/2021/02/cuales-son-las-vacunas-para-perros-obligatorias-y-cuando-ponerlas-1.jpg' }} />
                    <Card.Actions>
                        <Button 
                            color={colores.azul} 
                            icon="needle"
                            onPress={() => {
                                    navigation.navigate('vacunas')
                                }
                            }
                        >
                            Ir
                        </Button>
                    </Card.Actions>
                </Card>
               
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: colores.azul,
    },
    tarjeta: {
        marginTop: 10,
        marginBottom: 10
    },
    icono: {
        backgroundColor: colores.azul
    },
});

export default Inicio;