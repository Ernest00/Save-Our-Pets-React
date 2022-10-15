import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from './adopcion/Inicio';
import Listado from './raza/Listado';
import Login from './Login';
import Formulario from './adopcion/Formulario';

const Navegacion = () => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Adopciones" component={Formulario} />
                <Drawer.Screen name="Razas" component={Listado} />
                <Drawer.Screen name="Login" component={Login} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navegacion;