import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SupportScreen from '../screens/SupportScreen'
import FAQScreen from '../screens/FAQScreen'
 
const SupportStack = createStackNavigator();

const SupportStackScreen = ({navigation}) => (
    
    <SupportStack.Navigator>
        <SupportStack.Screen name="SupportScreen" component={SupportScreen} />
        <SupportStack.Screen name="FAQ" component={FAQScreen} />
    </SupportStack.Navigator>
    
);

export default SupportStackScreen;

