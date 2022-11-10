import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import colores from '../../src/utils/colores';
import { TextInput, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Ionicons from '@expo/vector-icons/AntDesign';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const FormularioMascota = ({ titulo, textoBoton, icono, navigation, datos, accion }) => {
    const [state, setState] = useState({
        id_mascota: '',
        nombre_mascota: '',
        id_especie: '',
        id_raza: '',
        color_pelo: '',
        fecha_nacimiento: '',
        peso: 0,
        esterilizado: 'No',
        id_estado: 1
    });
    const [listadoEspecies, setListadoEspecies] = useState([]);
    const [listadoRazas, setListadoRazas] = useState([]);
    const [listadoEstados, setListadoEstados] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const formatearFecha = (fecha) => {
        if (fecha != '' && fecha != undefined && fecha != null) {
            const fechaFormato = fecha.split('-');
            return `${fechaFormato[2]}-${fechaFormato[1]}-${fechaFormato[0]}`;
        }
    }

    const crearFecha = (stringFecha) => {
        if (stringFecha == '' || stringFecha == undefined || stringFecha == null) {
            return new Date();
        } else {
            try {
                const partesFecha = stringFecha.split('-');
                const fecha = new Date(partesFecha[0], parseInt(partesFecha[1]) - 1, partesFecha[2]);
                return fecha;
            } catch {
                return new Date();
            }
           
        }
    }

    const validarCampos = () => {
        if (
            state.nombre_mascota == '' ||
            state.id_especie == '' ||
            state.id_raza == '' ||
            state.color_pelo == '' ||
            state.esterilizado == '' ||
            state.id_estado == ''
        ) {
            return false;
        }
        return true;
    }
    
    const handleConfirm = (date) => {
        let fecha = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        setState({
            ...state,
            fecha_nacimiento: fecha
        });
        hideDatePicker();
    };

    const limpiarCampos = () => {
        setState({
            id_mascota: '',
            nombre_mascota: '',
            id_especie: '',
            id_raza: '',
            color_pelo: '',
            fecha_nacimiento: '',
            peso: '',
            esterilizado: 'No',
            id_estado: 1
        });
    }

    const getEspecies = () => {
        fetch('https://api-save-our-pets.mktvirtual.net/api/especies', {
            headers: {
                'content-type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setListadoEspecies(json);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    const getRazas = () => {
        fetch('https://api-save-our-pets.mktvirtual.net/api/razas', {
            headers: {
                'content-type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setListadoRazas(json);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const getEstados = () => {
        fetch('https://api-save-our-pets.mktvirtual.net/api/mascotas/estados', {
            headers: {
                'content-type' : 'application/json',
            },
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(json => {
            setListadoEstados(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    useEffect(() => {
        getEspecies();
        getRazas();
        getEstados();
        setState({
            id_mascota: datos.id_mascota,
            nombre_mascota: datos.nombre_mascota,
            id_especie: datos.id_especie,
            id_raza: datos.id_raza,
            color_pelo: datos.color_pelo,
            fecha_nacimiento: datos.fecha_nacimiento,
            peso: datos.peso,
            esterilizado: datos.esterilizado,
            id_estado: datos.id_estado
        });
    }, [datos]);

    const handleChangeText = (name, value) => {
        setState({...state, [name]: value});
    }

    const crearMascota = () => {
        if (validarCampos()) {
            let formData = new FormData();
            formData.append('nombre_mascota', state.nombre_mascota);
            formData.append('id_especie', state.id_especie);
            formData.append('id_raza', state.id_raza);
            formData.append('color_pelo', state.color_pelo);
            formData.append('fecha_nacimiento', state.fecha_nacimiento);
            formData.append('peso', state.peso);
            formData.append('esterilizado', state.esterilizado);
            formData.append('id_estado', state.id_estado);
            setLoading(true);

            fetch('https://api-save-our-pets.mktvirtual.net/api/mascotas/crear', {
                headers: {
                    'content-type': 'multipart/form-data'
                },
                method: 'POST',
                body: formData
            })
            .then(response => response.json()) 
            .then(json => {
                setLoading(false);
                limpiarCampos();
                Alert.alert(
                    'Información', 
                    json.mensaje,
                    [
                    { text: 'OK', onPress: () => { navigation.navigate('mascotas') }},
                    ],
                    { cancelable: false }
                );
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
        } else  {
            Alert.alert(
                'Error', 
                'Complete toda la información.',
                [
                    { text: 'OK' },
                ]
            );
        }
    };

    const actualizarMascota = () => {
        if (validarCampos()) {
            let formData = new FormData();
            formData.append('nombre_mascota', state.nombre_mascota);
            formData.append('id_especie', state.id_especie);
            formData.append('id_raza', state.id_raza);
            formData.append('color_pelo', state.color_pelo);
            formData.append('fecha_nacimiento', state.fecha_nacimiento);
            formData.append('peso', state.peso);
            formData.append('esterilizado', state.esterilizado);
            formData.append('id_estado', state.id_estado);
            setLoading(true);

            fetch(`https://api-save-our-pets.mktvirtual.net/api/mascotas/actualizar/${state.id_mascota}`, {
                headers: {
                    'content-type' : 'multipart/form-data'
                },
                method: 'POST',
                body: formData
            })
            .then(response => response.json()) 
            .then(json => {
                setLoading(false);
                limpiarCampos();
                Alert.alert(
                    'Información', 
                    json.mensaje,
                    [
                    { text: 'OK', onPress: () => { navigation.navigate('mascotas') }},
                    ],
                    { cancelable: false }
                );
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
        } else  {
            Alert.alert(
                'Error', 
                'Complete toda la información.',
                [
                    { text: 'OK' },
                ]
            );
        }
    }

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color={colores.rojo} />
            </View>
        );
    }

    return (
        <View>
            <View style={styles.volver}>
                <Ionicons 
                    name={"left"} 
                    size={32} 
                    color={colores.blanco} 
                    onPress={() => { navigation.navigate('mascotas') }}
                    style={styles.iconoVolver}
                />
                <Text style={styles.titulo}>{titulo}</Text>
            </View>
            <View>
                <TextInput
                    label="Nombre"
                    value={state.nombre_mascota}
                    onChangeText={(value) => handleChangeText('nombre_mascota', value)}
                    selectionColor={colores.azul}
                    underlineColor={colores.azul}
                    activeUnderlineColor={colores.rojo}
                    style={styles.input}
                />
                <Picker
                    style={styles.dropdown}
                    selectedValue={state.id_especie}
                    onValueChange={(value) => handleChangeText('id_especie', value)}
                >
                    <Picker.Item 
                        label={"Seleccione especie"} 
                        value={""} 
                    />
                    {
                        listadoEspecies.map((datos, i) => (
                            <Picker.Item 
                                label={datos.nombre} 
                                value={datos.id_especie} 
                                key={i}
                            />
                        ))
                    }
                </Picker>
                <Picker
                    style={styles.dropdown}
                    selectedValue={state.id_raza}
                    onValueChange={(value) => handleChangeText('id_raza', value)}
                >
                    <Picker.Item 
                        label={"Seleccione raza"} 
                        value={""} 
                    />
                    {
                        listadoRazas.map((datos, i) => (
                            <Picker.Item 
                                label={datos.nombre}
                                value={datos.id_raza} 
                                key={i}
                            />
                        ))
                    }
                </Picker>
                <TextInput
                    label="Color de pelo"
                    value={state.color_pelo}
                    onChangeText={(value) => handleChangeText('color_pelo', value)}
                    selectionColor={colores.azul}
                    underlineColor={colores.azul}
                    activeUnderlineColor={colores.rojo}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.inputDate} onPress={showDatePicker}>
                    <Text style={styles.labelFecha}>Fecha de nacimiento: {formatearFecha(state.fecha_nacimiento)}</Text>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        date={crearFecha(state.fecha_nacimiento)}
                    />
                </TouchableOpacity>
                <TextInput
                    label="Peso"
                    value={state.peso.toString()}
                    onChangeText={(value) => handleChangeText('peso', value)}
                    selectionColor={colores.azul}
                    underlineColor={colores.azul}
                    activeUnderlineColor={colores.rojo}
                    style={styles.input}
                />
                <Picker
                    style={styles.dropdown}
                    selectedValue={state.esterilizado}
                    onValueChange={(value) => handleChangeText('esterilizado', value)}
                >
                    <Picker.Item 
                        label={"¿Es esterelizado?"} 
                        value={""} 
                    />
                    <Picker.Item 
                        label={"No"}
                        value={"No"} 
                        key={2}
                    />
                    <Picker.Item 
                        label={"Si"}
                        value={"Si"} 
                        key={1}
                    />
                </Picker>
                <Picker
                    style={styles.dropdown}
                    selectedValue={state.id_estado}
                    onValueChange={(value) => handleChangeText('id_estado', value)}
                >
                    <Picker.Item 
                        label={"Estado de mascota"} 
                        value={""} 
                    />
                    {
                        listadoEstados.map((datos, i) => (
                            <Picker.Item 
                                label={datos.nombre_estado}
                                value={datos.id_estado} 
                                key={i}
                            />
                        ))
                    }
                </Picker>
                <Button 
                    icon={icono} 
                    mode="contained" 
                    onPress={() => {
                        console.log(state);
                        if (accion == 1)
                            crearMascota();
                        else 
                            actualizarMascota();
                    }} 
                    style={styles.marginTop} 
                    color={colores.rojo} 
                >
                    {textoBoton}
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        color: colores.blanco,
        marginBottom: 10,
    },
    tituloImagen: {
        fontSize: 17,
        color: colores.blanco,
        marginTop: 10,
    },
    input: {
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: colores.blanco,
    },
    dropdown: {
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: colores.blanco,
    },
    marginTop: {
        marginTop: 10,
    },
    volver: {
        flexDirection: 'row'
    },
    iconoVolver: {
        marginRight: 10
    },
    loader: {
        flex: 1,
        backgroundColor: colores.azul,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputDate: {
        backgroundColor: colores.blanco,
        height: 58,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    labelFecha: {
        marginTop: 18,
        marginLeft: 9,
        fontSize: 17
    }
});

export default FormularioMascota;