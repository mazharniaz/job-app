import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../screens/SplashScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword'
import DrawerNavigation from '../drawer/DrawerNavigation'
import DrawerNavigationEmployer from '../drawer/DrawerNavigationEmployer';
import EmailVerification from '../screens/EmailVerificationScreen';
import EmailVerification2 from '../screens/EmailVerification2';
import SignInScreen2 from '../screens/SignInScreen2';
import Icon from 'react-native-vector-icons/Ionicons';
import ForgotPasswordCode from '../screens/ForgotPasswordCode';
import ForgotPasswordChange from '../screens/ForgotPasswordChange';

const RootStack = createStackNavigator();

const ForgotPasswordStack = createStackNavigator();
const ForgotPasswordCodeStack = createStackNavigator();
const ForgotPasswordChangeStack = createStackNavigator();

class RootStackScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(navigation) {
        return(
            <RootStack.Navigator headerMode='none'>
                <RootStack.Screen name="SplashScreen" component={SplashScreen} />
                <RootStack.Screen name="SignInScreen" component={SignInScreen} />
                {/* <RootStack.Screen name="SignInScreen2" component={SignInScreen} /> */}
                <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
                <RootStack.Screen name="ForgotPassword" component={ForgotPasswordStackScreen} />
                <RootStack.Screen name="ForgotPasswordCode" component={ForgotPasswordCodeStackScreen} />
                <RootStack.Screen name="ForgotPasswordChange" component={ForgotPasswordChangeStackScreen} />
                <RootStack.Screen name="DrawerEmployer" component={DrawerNavigation} />
                <RootStack.Screen name="DrawerCandidate" component={DrawerNavigationEmployer} />
                <RootStack.Screen name="EmailVerification" component={EmailVerification} />
                <RootStack.Screen name="EmailVerification2" component={EmailVerification2} />
            </RootStack.Navigator>
        )
    }
}

export default RootStackScreen;

const ForgotPasswordStackScreen = ({navigation}) => (
    <ForgotPasswordStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Forgot Password'
    }}>
        <ForgotPasswordStack.Screen name="ForgotPassword" component={ForgotPassword} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </ForgotPasswordStack.Navigator>
  );

  const ForgotPasswordCodeStackScreen = ({navigation}) => (
    <ForgotPasswordCodeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Enter Code'
    }}>
        <ForgotPasswordCodeStack.Screen name="ForgotPasswordCode" component={ForgotPasswordCode} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </ForgotPasswordCodeStack.Navigator>
  );

  const ForgotPasswordChangeStackScreen = ({navigation}) => (
    <ForgotPasswordChangeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'New Password'
    }}>
        <ForgotPasswordChangeStack.Screen name="ForgotPasswordChange" component={ForgotPasswordChange} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </ForgotPasswordChangeStack.Navigator>
  );