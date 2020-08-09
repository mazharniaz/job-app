import 'react-native-gesture-handler';
import React, { Component } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/SearchScreen"
import NotificationScreen from "../screens/NotificationScreen"
import ChatScreen from "../screens/ChatScreen"
import ProfileScreen from "../screens/ProfileScreen"
import CompanyProfileScreen from '../screens/CompanyProfileScreen'
import { Header, Item, Text, Button, Input } from 'native-base'
//import JobSearchScreen from '../screens/JobSeachScreen';
import JobSearchScreen2 from '../screens/JobSearchScreen2';


let qqqq=""
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ChatStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const CompanyProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
            
let _this = null;

const QueryContext = React.createContext('');

class TabNavigationCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  updateQuery(text) {
    this.setState({
        query: text
    })
  }

  componentDidMount() {
    _this = this
  }


  render(navigation) {

    return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#0066ff"
      inactiveColor="#0066ff"
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
      )
  }
}

export default TabNavigationCandidate;

class HeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  static contextType = QueryContext;

  componentDidMount() {
    //QueryContext.update({ query: 'It worked!' })
  }

  handleSearch(text) {
    qqqq=text;
    console.log(text, '---> text')
    this.setState({
        query: text
    })
   
}
  
  render(navigation) {
    return (
        <Header searchBar style={{backgroundColor: '#0066ff'}}>
            <Item style={{borderRadius: 20}}>
              <Icon name="md-search" size={20} style={{marginLeft: '3%'}} />
              <Input placeholder="Search" onChangeText={(text) => this.handleSearch(text)} />
            </Item>
        </Header> 
    )
 }
}

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
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
                backgroundColor= "#0066ff"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#0066ff",
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
              backgroundColor= "#0066ff"
              onPress={() => {navigation.openDrawer();}}
              />
          )
      }} />
  </ProfileStack.Navigator>
);

const SearchStackScreen = ({navigation}) => (
    <SearchStack.Navigator screenOptions={{
      headerShown: false  
    }}>
        <SearchStack.Screen name="Search" component={JobSearchScreen2} />
    </SearchStack.Navigator>
);

const ChatStackScreen = ({navigation}) => (
  <ChatStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#0066ff",
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
              backgroundColor= "#0066ff"
              onPress={() => {navigation.openDrawer();}}
              />
          )
      }} />
  </ChatStack.Navigator>
);

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#0066ff",
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
              backgroundColor= "#0066ff"
              onPress={() => {navigation.openDrawer();}}
              />
        )
      }} />
  </NotificationStack.Navigator>
);

const CompanyProfileStackScreen = ({navigation}) => (
  <CompanyProfileStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: "#0066ff",
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
              backgroundColor= "#0066ff"
              onPress={() => {navigation.openDrawer();}}
              />
          )
      }} />
  </CompanyProfileStack.Navigator>
);