import 'react-native-gesture-handler';
import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/SearchScreen"
import NotificationScreen from "../screens/NotificationScreen"
import ChatScreen from "../screens/ChatScreen"
import ProfileScreen from "../screens/ProfileScreen"
import CompanyProfileScreen from '../screens/CompanyProfileScreen'


const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ChatStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CompanyProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#9c71b3"
      inactiveColor="#a48de6"
      barStyle= {{backgroundColor: "#FFFFFF"}}
      // style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="md-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatStackScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="md-chatbubbles" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="md-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color }) => (
            <Icon name="md-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="md-person" color={color} size={26} />
          ),
        }}
      />
      </Tab.Navigator>
);

export default TabNavigation;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Dashboard'
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

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#9c71b3",
          height: 45
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
          fontSize: 18
      },
      headerTitleAlign: 'center',
      headerTitle: 'Profile'
  }}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
          headerLeft: () => (
              <Icon.Button 
              name="md-menu" 
              size={24} 
              backgroundColor= "#9c71b3"
              onPress={() => {navigation.openDrawer();}}
              />
          )
      }} />
  </ProfileStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleAlign: 'center',
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

const ChatStackScreen = ({navigation}) => (
  <ChatStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#9c71b3",
          height: 45
      },
      headerTintColor: "#FFFFFF",
      headerTitleAlign: 'center',
      headerTitleStyle: {
          fontSize: 18
      }
  }}>
      <ChatStack.Screen name="Chat" component={ChatScreen} options={{
          headerLeft: () => (
              <Icon.Button 
              name="md-menu" 
              size={24} 
              backgroundColor= "#9c71b3"
              onPress={() => {navigation.openDrawer();}}
              />
          )
      }} />
  </ChatStack.Navigator>
);

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#9c71b3",
          height: 45
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
          fontSize: 18
      },
      headerTitleAlign: 'center',
  }}>
      <NotificationStack.Screen name="Notification" component={NotificationScreen} options={{
          headerLeft: () => (
              <Icon.Button 
              name="md-menu" 
              size={24} 
              backgroundColor= "#9c71b3"
              onPress={() => {navigation.openDrawer();}}
              />
        )
      }} />
  </NotificationStack.Navigator>
);

const CompanyProfileStackScreen = ({navigation}) => (
  <CompanyProfileStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#9c71b3",
          height: 45
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
          fontSize: 18
      },
      headerTitleAlign: 'center',
      headerTitle: 'Company Profile'
  }}>
      <CompanyProfileStack.Screen name="Company" component={CompanyProfileScreen} options={{
          headerLeft: () => (
              <Icon.Button 
              name="md-menu" 
              size={24} 
              backgroundColor= "#9c71b3"
              onPress={() => {navigation.openDrawer();}}
              />
          )
      }} />
  </CompanyProfileStack.Navigator>
);