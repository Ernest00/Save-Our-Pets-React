import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import colores from '../src/utils/colores';
import logo from '../assets/img/logo.png';
import firebase from '../src/utils/firebase';
import {validateEmail} from '../src/utils/validations';
import { passHook, passHook2 } from '../src/utils/passHook';

export default function Register(props){
const {changeForm} = props;
const [formData, setFormData] = useState(defaultValue());
const [formError, setFormError] = useState({});
const { passwordVisibility, rightIcon, handlePasswordVisibility } = passHook();
const { passwordVisibility2, rightIcon2, handlePasswordVisibility2 } = passHook2();

const register = () => {
    let errors = {};
    if (!formData.email || !formData.password || !formData.repeatPassword
    ) {
    if (!formData.email) errors.email = true;
    if (!formData.password) errors.password = true;
    if (!formData.repeatPassword) errors.repeatPassword = true;
    console.log("hola4");
    } else if (!validateEmail(formData.email)) {
    errors.email = true;
    console.log("hola3");
    //console.log(formData.email);
    } else if (formData.password !== formData.repeatPassword) {
    errors.password = true;
    errors.repeatPassword = true;
    console.log("hola2");
    console.log(formData.password);
    console.log(formData.repeatPassword);
    } else if (formData.password.length < 6) {
    errors.password = true;
    errors.repeatPassword = true;
    console.log("hola");
    } else {
    firebase
    .auth()
    .createUserWithEmailAndPassword(formData.email, formData.password
    )
    .catch(() => {
    setFormError({
    email: true,
    password: true,
    repeatPassword: true,
    });
    });
    }
    setFormError(errors);
    };
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>Save Our Pets</Text>
                <Image source={logo} resizeMode="cover"  style={styles.logo} />
                <Text style={styles.texto}>Registrarse</Text>
                <View style={styles.formulario}>
                    <TextInput
                        label="Correo electrónico" 
                        onChange={(e) => setFormData({...formData, email: e.nativeEvent.text})}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={[styles.input, formError.email && styles.error]}
                    />
                    <TextInput
                        label="Contraseña"
                        secureTextEntry={passwordVisibility}
                        onChange={(e) => setFormData({...formData, password: e.nativeEvent.text})}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={[styles.input, formError.password && styles.error]}
                         right={<TextInput.Icon name="eye" onPress={handlePasswordVisibility}/>}
                    />
                    <TextInput
                        label="Repetir Contraseña"
                       secureTextEntry={passwordVisibility2}
                        onChange={(e) =>
                            setFormData({...formData, repeatPassword: e.nativeEvent.text})
                            }
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={[styles.input , formError.repeatPassword && styles.error]}
                        right={<TextInput.Icon name="eye" onPress={handlePasswordVisibility2}/>}
                    />
                    <Button icon="arrow-right-bold" mode="contained" onPress={register} style={styles.marginTop} color={colores.rojo} >
                        Acceder
                    </Button>
                    
                    <Button icon="arrow-right-bold" mode="contained" onPress={changeForm} style={styles.marginTop} color={colores.rojo} >
                        Iniciar Sesión
                    </Button>
                </View>
            </View>
        </View>
    );
}

function defaultValue() {
    return {
    email: '',
    password: '',
    repeatPassword: '',
    };
    }

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colores.azul
    },
    contenido: {
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        color: colores.blanco,
        textAlign: 'center',
        marginBottom: 20,
    },
    texto: {
        fontSize: 22,
        color: colores.blanco,
        marginBottom: 15, 
    },
    logo: {
        width: 200,
        height: 200,
    },
    input: {
        marginTop: 7,
        marginBottom: 7,
    },
    marginTop: {
        marginTop: 20,
    },
    formulario: {
        width: 330,
    },
    error: {
        borderColor: '#940c0c',
        }
});
