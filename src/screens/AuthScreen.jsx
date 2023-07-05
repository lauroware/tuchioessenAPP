import React, { useCallback, useEffect, useReducer, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import donut from "../assets/foto1.jpg";
import { signUp, signIn } from "../store/actions/auth.action";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      Alert.alert("Ha ocurrido un error", error, [{ text: "Ok" }]);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      );
    } else {
      Alert.alert(
        "Formulario inválido",
        "Ingresa un email y contraseña válidos",
        [{ text: "Ok" }]
      );
    }
  };

  const handleSignIn = () => {
    if (formState.formIsValid) {
      dispatch(
        signIn(formState.inputValues.email, formState.inputValues.password)
      ).then((success) => {
        if (success) {
        }
      });
    } else {
      Alert.alert(
        "Formulario inválido",
        "Ingresa un email y contraseña válidos",
        [{ text: "Ok" }]
      );
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={50}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Tu mejor compañia en la cocina</Text>
          <Image style={styles.image} source={donut} />
          <View style={styles.inputContainer}>
            <Input
              id="email"
              label="Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Por favor ingresa un email válido"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Contraseña"
              keyboardType="default"
              required
              password
              secureTextEntry
              autoCapitalize="none"
              errorText="Por favor ingresa una contraseña válida"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
          </View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  inputContainer: {
    width: "90%",
  },
  loginButton: {
    backgroundColor: "#F9A924",
    width: "100%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#F9A924",
    width: "100%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 42,
    width: "90%",
  },
});

export default AuthScreen;
