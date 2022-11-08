import React, {useState} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import colores from '../src/utils/colores';
import logo from '../assets/img/logo.png';
import firebase from '../src/utils/firebase';
import {validateEmail} from '../src/utils/validations';
import { passHook } from '../src/utils/passHook';

export default function Login(props){
    
    const {changeForm} = props;
const [formData, setFormData] = useState(defaultValue());
const [formError, setFormError] = useState({});
const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    passHook();
const [password, setPassword] = useState('');

const login = () => {
let errors = {};
if (!formData.email || !formData.password) {
if (!formData.email) errors.email = true;
if (!formData.password) errors.password = true;
} else if (!validateEmail(formData.email)) {
errors.email = true;
} else {
firebase
.auth()
.signInWithEmailAndPassword(formData.email, formData.password)
.catch(() => {
setFormError({
email: true,
password: true,
});
});
}
setFormError(errors);
};
const onChange = (e, type) => {
setFormData({...formData, [type]: e.nativeEvent.text});
};
    return (
        <View style={styles.contenedor}>
            <View style={styles.contenido}>
                <Text style={styles.titulo}>Save Our Pets</Text>
                <Image source={logo} resizeMode="cover"  style={styles.logo} />
                <Text style={styles.texto}>Iniciar sesión</Text>
                <View style={styles.formulario}>
                    <TextInput
                        label="Usuario" 
                        onChange={(e) => onChange(e, 'email')}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                    />
                    <TextInput
                        label="Contraseña"
                        secureTextEntry={passwordVisibility}
                        onChange={(e) => onChange(e,'password')}
                        selectionColor={colores.azul}
                        underlineColor={colores.azul}
                        activeUnderlineColor={colores.rojo}
                        style={styles.input}
                        right={<TextInput.Icon name="eye" onPress={handlePasswordVisibility}/>}
                    />
                    <Button icon="arrow-right-bold" mode="contained" onPress={login} style={styles.marginTop} color={colores.rojo} >
                        Acceder
                    </Button>
                    
                    <Button icon="arrow-right-bold" mode="contained" onPress={changeForm} style={styles.marginTop} color={colores.rojo} >
                        Registrarse
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
