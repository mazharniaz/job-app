import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/SearchScreen"
import ChatScreen from '../screens/ChatScreen'
import NotificationScreen from '../screens/NotificationScreen'

import CompanyProfileScreen from '../screens/CompanyProfileScreen'
import FAQScreen from '../screens/FAQScreen';
import SupportScreen from '../screens/SupportScreen';
import SupportChat from '../screens/SupportChat'
import DraftJobs from '../screens/DraftJobs';
import RequestStaffScreen from '../screens/RequestStaffScreen';
import JobSearchScreen2 from '../screens/JobSearchScreen2'
 
const Stack = createStackNavigator();

export default class StackNavigation extends Component {
    render({navigation}) {
        return(
            
            <NavigationContainer>
                <Stack.Navigator headerTitleAlign='center' screenOptions={{
                    headerStyle: {
                        backgroundColor: "#0066ff",
                        height: 45
                    },
                    headerTintColor: "#FFFFFF",
                    headerTitleStyle: {
                        fontSize: 18,
                    }
                }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Search" unmountOnBlur={true} options={{ unmountOnBlur: true }} component={JobSearchScreen2} />
                    <Stack.Screen name="Chat" component={ChatScreen} />
                    <Stack.Screen name="Notification" component={NotificationScreen} />
                    <Stack.Screen name="Support" component={SupportScreen} />
                    <Stack.Screen name="FAQ" component={FAQScreen} />
                    <Stack.Screen name="LiveChat" component={SupportChat} />
                </Stack.Navigator>
            </NavigationContainer>
             
        )
    }
}

