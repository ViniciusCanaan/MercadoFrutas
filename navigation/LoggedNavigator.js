import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import MercadoFrutas from "../screens/Login";
import { colors } from "../styles/variables";

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
                  }}
            />
        </LoggedNavigator.Navigator>
    );
}