import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground, Alert } from 'react-native';
import logo from '../assets/logo.png';
import background from '../assets/background.jpg';
import {useNavigation, useRoute} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../styles/variables';

export default function Login() {

  const login = 'testeframe@gmail.com';
  const senha = '123456';
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  function handleLogin(){
    if(email === login && password === senha){
      navigation.navigate('Home')
    } else{
      Alert.alert('Alerta','Login ou senha inválidos');
    }
    
  }

  return(
  <View style={styles.container}>
    <ImageBackground source={background} resizeMode="cover" style={styles.image}>
    <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.viewLogin}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          keyboardType='email-address'
          value={email}
          onChangeText={t=>setEmail(t)}
        />
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          secureTextEntry
          value={password}
          onChangeText={t=>setPassword(t)}
        />
      </View>
      <View style={styles.viewButton}>
      <TouchableOpacity style={styles.buttonSignIn} onPress={handleLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  </View>
);
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  viewBackground: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.2,
    padding: 10,
    borderRadius: 5,
    width: '95%',
    backgroundColor: colors.mainBgColor
  },
  buttonSignIn: {
    backgroundColor: colors.action,
    width: '95%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  viewLogin: {
    alignItems: 'center',
    marginTop: 50,
  },
  viewLogo:{
    justifyContent:'center',
    alignItems:'center'
  },
  logo: {
    width: '80%',
    height: 300
  },
  viewButton:{
    justifyContent:'center',
    alignItems:'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});
