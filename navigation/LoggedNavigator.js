import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import MercadoFrutas from "../screens/Login";
import Carrinho from '../screens/Carrinho';
import { colors } from "../styles/variables";
import { Button } from "react-native";

const LoggedNavigator = createStackNavigator();

export default()=>{
    return(
        <LoggedNavigator.Navigator>
            <LoggedNavigator.Screen name="Login" component={MercadoFrutas}
                options={{
                    headerShown : false
                }}
            />
            <LoggedNavigator.Screen name="Home" component={Home}
                 options={{
                    title: 'Lista de Frutas',
                    headerStyle: {
                      backgroundColor: colors.action,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize:18,
                    },
                    headerTitleAlign: 'center'
                  }}
            />
            <LoggedNavigator.Screen name="Carrinho" component={Carrinho}
                 options={{
                    title: 'Carrinho de Compras',
                    headerStyle: {
                      backgroundColor: colors.action,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      fontSize:18,
                    },
                    headerTitleAlign: 'center'
                  }}
            />
        </LoggedNavigator.Navigator>
    );
}