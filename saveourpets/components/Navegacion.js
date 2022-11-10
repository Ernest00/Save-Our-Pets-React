import * as React from 'react';
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Razas from './raza/Inicio';
import formularioAdopcion from './adopcion/Formulario';
import CrearRaza from './raza/Crear';
import EditarRaza from './raza/Editar';
import EliminarRaza from './raza/Eliminar';
import Especies from './especie/Inicio';
import CrearEspecie from './especie/Crear';
import EditarEspecie from './especie/Editar';
import EliminarEspecie from './especie/Eliminar';
import EditarPerfil from './usuario/Editar';
import Perfil from './usuario/Perfil';
import SolicitudAdopcion from './adopcion/Inicio';
import firebase from '../src/utils/firebase';
import Vacunas from './vacunas/Vacunas';
import CrearVacuna from './vacunas/CrearVacuna';
import EditarVacuna from './vacunas/EditarVacuna';
import EliminarVacuna from './vacunas/EliminarVacuna';
import Mascotas from './mascotas/Mascotas';
import CrearMascota from './mascotas/CrearMascota';
import EditarMascota from './mascotas/EditarMascota';
import EliminarMascota from './mascotas/EliminarMascota';
import Inicio from './Inicio';

const Navegacion = () => {
    const Drawer = createDrawerNavigator();

    function CustomDrawerContent(props) {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Cerrar Sesión" onPress={() => firebase.auth().signOut()} />
          </DrawerContentScrollView>
        );
      }

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="inicio" useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
                <Drawer.Screen 
                    name="inicio" 
                    component={Inicio} 
                    options={{
                        title: 'Inicio',
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
                    name="solicitudAdopcion" 
                    component={SolicitudAdopcion} 
                    options={{
                        title: 'Solicitud adopción',
                    }} 
                /> 
                <Drawer.Screen 
                    name="especies" 
                    component={Especies} 
                    options={{
                        title: 'Especies',
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
                    name="vacunas" 
                    component={Vacunas} 
                    options={{
                        title: 'Vacunas',
                    }} 
                /> 
                <Drawer.Screen 
                    name="mascotas" 
                    component={Mascotas} 
                    options={{
                        title: 'Mascotas',
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

                <Drawer.Screen 
                    name="crearEspecie" 
                    component={CrearEspecie} 
                    options={{
                        title: 'Agregar especie',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="editarEspecie" 
                    component={EditarEspecie} 
                    options={{
                        title: 'Editar especie',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="eliminarEspecie" 
                    component={EliminarEspecie} 
                    options={{
                        title: 'Eliminar especie',
                        drawerItemStyle: { height: 0 },
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
                    name="crearVacuna" 
                    component={CrearVacuna} 
                    options={{
                        title: 'Registrar vacuna',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="editarVacuna" 
                    component={EditarVacuna} 
                    options={{
                        title: 'Editar vacuna',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="eliminarVacuna" 
                    component={EliminarVacuna} 
                    options={{
                        title: 'Eliminar vacuna',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="crearMascota" 
                    component={CrearMascota} 
                    options={{
                        title: 'Registrar mascota',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="eliminarMascota" 
                    component={EliminarMascota} 
                    options={{
                        title: 'Eliminar mascota',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
                <Drawer.Screen 
                    name="editarMascota" 
                    component={EditarMascota} 
                    options={{
                        title: 'Actualizar información mascota',
                        drawerItemStyle: { height: 0 },
                    }} 
                /> 
            </Drawer.Navigator>

        </NavigationContainer>
    );
};

export default Navegacion;