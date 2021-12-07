import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from '../assets/logo.png'
import {useNavigation, useRoute} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '../styles/variables';
export default function Login() {

  const navigation = useNavigation();
  const route = useRoute();

  function handleLogin(){
    navigation.navigate('Home')
  }

  return (

    <View style={styles.viewBackground}>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.viewLogin}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          keyboardType='email-address'

        />
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          secureTextEntry
        />
      </View>
      <View style={styles.viewButton}>
      <TouchableOpacity style={styles.buttonSignIn} onPress={handleLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: '95%'
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
    width: '50%',
    height: 200
  },
  viewButton:{
    justifyContent:'center',
    alignItems:'center',
  }
})