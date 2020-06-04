import 'react-native-gesture-handler';
import React, { Component } from "react";
import Login from '../components/Login'
import { View, Text, Button } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function NavigationScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Navigation</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')}>
            <Text>Login</Text>
        </Button>
      </View>
    );
  }

  function LoginScreen() {
    return (
      <Login />
    );
  }

  const Stack = createStackNavigator();

export default class Navigation extends Component {
    render() {
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Navigation">
                    <Stack.Screen name="Navigation" component={NavigationScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </Stack.Navigator>
            </NavigationContainer>
            
        )
    }
}

