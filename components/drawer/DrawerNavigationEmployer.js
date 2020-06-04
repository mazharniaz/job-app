import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/SearchScreen"
import TabNavigation from "../tab/TabNavigation"
import DrawerEmployerContent from "../drawer/DrawerEmployerContent"

import JobOfferScreen from '../screens/JobOfferScreen';
import MyJobScreen from '../screens/MyJobs';
import MyShiftsScreen from '../screens/MyShifts';
import SupportScreen from '../screens/SupportScreen';
import SettingScreen from '../screens/SettingScreen';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </HomeStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        }
    }}>
        <SearchStack.Screen name="Search" component={SearchScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </SearchStack.Navigator>
);

export default class DrawerNavigationEmployer extends Component {
    render() {
        return(
            
              <Drawer.Navigator drawerContent={props => <DrawerEmployerContent {... props} />}>
                  <Drawer.Screen name="HomeDrawer" component={TabNavigation} />
                  <Drawer.Screen name="MyJobs" component={MyJobScreen} />
                  <Drawer.Screen name="JobOffer" component={JobOfferScreen} />
                  <Drawer.Screen name="MyShifts" component={MyShiftsScreen} />
                  <Drawer.Screen name="Supports" component={SupportScreen} />
                  <Drawer.Screen name="Setting" component={SettingScreen} />


              </Drawer.Navigator>
             
        )
    }
  }