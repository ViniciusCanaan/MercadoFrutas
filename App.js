import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoggedNavigator from './navigation/LoggedNavigator';

function MercadoFrutas() {
 return (
    <NavigationContainer>
      <LoggedNavigator/>
    </NavigationContainer>
  );
}

export default MercadoFrutas;