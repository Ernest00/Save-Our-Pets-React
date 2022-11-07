import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Razas from './raza/Inicio';
import Login from './Login';
import formularioAdopcion from './adopcion/Formulario';
import CrearRaza from './raza/Crear';
import EditarRaza from './raza/Editar';
import EliminarRaza from './raza/Eliminar';
import EditarPerfil from './usuario/Editar';
import Perfil from './usuario/Perfil';
import SolicitudAdopcion from './adopcion/Inicio';

const Navegacion = () => {
    const Drawer = createDrawerNavigator();

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="login">
                <Drawer.Screen 
                    name="login" 
                    component={Login}
                    options={{
                        drawerItemStyle: { height: 0 },
                        title: 'Iniciar sesión',
                    }} 
                />
                <Drawer.Screen 
                    name="perfil" 
                    component={Perfil} 
                    options={{
                        title: 'Mi perfil',
                    }} 
                />
                <Drawer.Screen 
                    name="editarPerfil" 
                    component={EditarPerfil} 
                    options={{
                        drawerItemStyle: { height: 0 },
                        title: 'Editar mi perfil',
                    }} 
                /> 
                <Drawer.Screen 
                    name="solicitudAdopcion" 
                    component={SolicitudAdopcion} 
                    options={{
                        title: 'Solicitud adopción',
                    }} 
                /> 
                <Drawer.Screen 
                    name="formularioAdopcion" 
                    component={formularioAdopcion} 
                    options={{
                        title: 'Solicitud adopción',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="razas" 
                    component={Razas} 
                    options={{
                        title: 'Razas',
                    }} 
                />
                <Drawer.Screen 
                    name="crearRaza" 
                    component={CrearRaza} 
                    options={{
                        title: 'Agregar raza',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="editarRaza" 
                    component={EditarRaza} 
                    options={{
                        title: 'Editar raza',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="eliminarRaza" 
                    component={EliminarRaza} 
                    options={{
                        title: 'Eliminar raza',
                        drawerItemStyle: { height: 0 },
                    }} 
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default Navegacion;