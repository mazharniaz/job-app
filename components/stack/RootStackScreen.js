import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword'
import DrawerNavigation from '../drawer/DrawerNavigation'
import DrawerNavigationEmployer from '../drawer/DrawerNavigationEmployer';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <RootStack.Screen name="DrawerEmployer" component={DrawerNavigation} />
        <RootStack.Screen name="DrawerCandidate" component={DrawerNavigationEmployer} />
    </RootStack.Navigator>
);

export default RootStackScreen;