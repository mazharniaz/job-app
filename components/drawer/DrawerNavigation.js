import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Button,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen"
import SearchScreen from "../screens/SearchScreen"
import TabNavigation from "../tab/TabNavigation"
import DrawerContent from "../drawer/DrawerContent"

import SupportScreen from '../screens/SupportScreen';
import SettingScreen from '../screens/SettingScreen';
import AllShiftsScreen from '../screens/AllShiftsScreen';
import PendingActionsScreen from '../screens/PendingActionsScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import RequestStaffScreen from '../screens/RequestStaffScreen';
import CompanyProfileScreen from '../screens/CompanyProfileScreen';
import FAQScreen from '../screens/FAQScreen'
import PerksScreen from '../screens/PerksScreen'
import ReferalScreen from '../screens/ReferalScreen'

import StackScreens from '../stack/StackScreens'
import SupportChat from '../screens/SupportChat';
import EditProfileScreen from '../screens/EditProfileScreen';
import ChangePassword from '../screens/ChangePassword';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const CompanyProfileStack = createStackNavigator();
const RequestStaffStack = createStackNavigator();
const SupportStack = createStackNavigator();
const FAQStack = createStackNavigator();
const PerksStack = createStackNavigator();
const ReferalStack = createStackNavigator();
const SupportChatStack = createStackNavigator();
const SettingStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const ChangePasswordStack = createStackNavigator();
const OrdersStack = createStackNavigator();

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

const OrdersStackScreen = ({navigation}) => (
    <OrdersStack.Navigator screenOptions={{
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
        <OrdersStack.Screen name="Orders" component={MyOrdersScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </OrdersStack.Navigator>
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

export default class DrawerNavigation extends Component {
  render() {
      return(
          
            <Drawer.Navigator drawerContent={props => <DrawerContent {... props} />}>
                <Drawer.Screen name="HomeDrawer" component={TabNavigation} />
                <Drawer.Screen name="MyOrders" component={MyOrdersScreen} />
                <Drawer.Screen name="SupportScreen" component={SupportStackScreen} />
                  <Drawer.Screen name="Setting" component={SettingStackScreen} />
                  <Drawer.Screen name="AllShifts" component={AllShiftsScreen} />
                  <Drawer.Screen name="Pending" component={PendingActionsScreen} />
                  <Drawer.Screen name="RequestStaff" component={RequestStaffStackScreen} />
                  <Drawer.Screen name="CompanyProfile" component={CompanyProfileStackScreen} />
                  <Drawer.Screen name="FAQ" component={FAQStackScreen} />
                  <Drawer.Screen name="Perks" component={PerksStackScreen} />
                  <Drawer.Screen name="Referal" component={ReferalStackScreen} />
                  <Drawer.Screen name="LiveChat" component={SupportChatStackScreen} />
                  <Drawer.Screen name="EditProfile" component={EditProfileStackScreen} />
                  <Drawer.Screen name="ChangePassword" component={ChangePasswordStackScreen} />
                  <Drawer.Screen name="Orders" component={OrdersStackScreen} />
                {/* <Drawer.Screen name="Search" component={SearchStackScreen} /> */}
            </Drawer.Navigator>
           
      )
  }
}

const SettingStackScreen = ({navigation}) => (
    <SettingStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Settings'
    }}>
        <SettingStack.Screen name="Settings" component={SettingScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </SettingStack.Navigator>
  );

  const EditProfileStackScreen = ({navigation}) => (
    <EditProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Edit Profile'
    }}>
        <EditProfileStack.Screen name="EditProfile" component={EditProfileScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </EditProfileStack.Navigator>
  );

  const ChangePasswordStackScreen = ({navigation}) => (
    <ChangePasswordStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Change Password'
    }}>
        <ChangePasswordStack.Screen name="ChangePassword" component={ChangePassword} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </ChangePasswordStack.Navigator>
  );

const FAQStackScreen = ({navigation}) => (
    <FAQStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'FAQ'
    }}>
        <FAQStack.Screen name="FAQ" component={FAQScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </FAQStack.Navigator>
  );

  const SupportChatStackScreen = ({navigation}) => (
    <SupportChatStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Live Chat'
    }}>
        <SupportChatStack.Screen name="LiveChat" component={SupportChat} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </SupportChatStack.Navigator>
  );

  const PerksStackScreen = ({navigation}) => (
    <PerksStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Perks'
    }}>
        <PerksStack.Screen name="Perks" component={PerksScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </PerksStack.Navigator>
  );

  const ReferalStackScreen = ({navigation}) => (
    <ReferalStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Refer a friend'
    }}>
        <ReferalStack.Screen name="Refer" component={ReferalScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </ReferalStack.Navigator>
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

  const RequestStaffStackScreen = ({navigation}) => (
    <RequestStaffStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Post a job'
    }}>
        <RequestStaffStack.Screen name="RequestStaff" component={RequestStaffScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </RequestStaffStack.Navigator>
  );

  const SupportStackScreen = ({navigation}) => (
    <SupportStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#9c71b3",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Support'
    }}>
        <SupportStack.Screen name="Support" component={SupportScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#9c71b3"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </SupportStack.Navigator>
  );