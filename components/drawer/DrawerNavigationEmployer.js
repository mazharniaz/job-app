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
import TabNavigationCandidate from "../tab/TabNavigationCandidate"
import DrawerEmployerContent from "../drawer/DrawerEmployerContent"

import JobOfferScreen from '../screens/JobOfferScreen';
import MyJobScreen from '../screens/MyJobs';
import MyShiftsScreen from '../screens/MyShifts';
import SettingScreen from '../screens/SettingScreen';
import MyJobs from '../screens/MyJobs';
import CandidateActiveDescription from '../screens/CandidateActiveDescription';
import MyEarnings from '../screens/MyEarnings';
import SupportScreen from '../screens/SupportScreen';
import SupportChat from '../screens/SupportChat';
import FAQScreen from '../screens/FAQScreen';
import EditProfileCandidate from '../screens/EditProfleCandidate';
import ChangePassword from '../screens/ChangePassword';
import CandidateAllJobsDescription from '../screens/CandidateAllJobsDescription';
import SearchScreenJobDetails from '../screens/SearchScreenJobDetails';
import CandidateActiveJobs from '../screens/CandidateActiveJobs'
import ApplyJobScreen from '../screens/ApplyJobScreen';
import ReferalScreen from '../screens/ReferalScreen';
import JobBlockerScreen from '../screens/JobBlockerScreen';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const MyJobsStack = createStackNavigator();
const MyEarningsStack = createStackNavigator();
const SupportStack = createStackNavigator();
const SupportChatStack = createStackNavigator();
const FAQStack = createStackNavigator();
const SettingStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const ChangePasswordStack = createStackNavigator();
const CandidateActiveDescriptionStack = createStackNavigator();
const CandidateAllJobDescriptionStack = createStackNavigator();
const SearchScreenJobDetailsStack = createStackNavigator();
const ReferalStack = createStackNavigator();
const CandidateActiveJobStack = createStackNavigator();
const ApplyJobStack = createStackNavigator();
const JobBlockerStack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default class DrawerNavigationEmployer extends Component {
    render(navigation) {

        return(
            
              <Drawer.Navigator drawerContent={props => <DrawerEmployerContent {... props} />}>
                  <Drawer.Screen name="HomeDrawer1" component={TabNavigationCandidate} />
                  <Drawer.Screen name="MyJobs" component={MyJobsStackScreen} />
                  <Drawer.Screen name="JobOffer" component={JobOfferScreen} />
                  <Drawer.Screen name="MyShifts" component={MyShiftsScreen} />
                  <Drawer.Screen name="Setting" component={SettingStackScreen} />
                  <Drawer.Screen name="MyEarnings" component={MyEarningsStackScreen} />
                  <Drawer.Screen name="CandidateActiveDescription" component={CandidateActiveDescriptionStackScreen} />
                  <Drawer.Screen name="SupportScreen" component={SupportStackScreen} />
                  <Drawer.Screen name="FAQ" component={FAQStackScreen} />
                  <Drawer.Screen name="LiveChat" component={SupportChatStackScreen} />
                  <Drawer.Screen name="EditProfile" component={EditProfileStackScreen} />
                  <Drawer.Screen name="ChangePassword" component={ChangePasswordStackScreen} />
                  <Drawer.Screen name="CandidateAllJobsDescription" unmountOnBlur={true} options={{ unmountOnBlur: true }} component={CandidateAllJobDescriptionStackScreen} />
                  <Drawer.Screen name="SearchScreenJobDetails" component={SearchScreenJobDetailsStackScreen} />
                  <Drawer.Screen name="ApplyJob" component={ApplyJobStackScreen} />
                  <Drawer.Screen name="Refer" component={ReferalStackScreen} />
                  <Drawer.Screen name="JobBlocker" component={JobBlockerStackScreen} />
              </Drawer.Navigator>
             
        )
    }
  }

  const JobBlockerStackScreen = ({navigation}) => (
    <JobBlockerStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Approval Pending'
    }}>
        <JobBlockerStack.Screen name="JobBlocker" component={JobBlockerScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </JobBlockerStack.Navigator>
  );


  const ReferalStackScreen = ({navigation}) => (
    <ReferalStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
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
                backgroundColor= "#0066ff"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </ReferalStack.Navigator>
  );
  
  const ApplyJobStackScreen = ({navigation}) => (
    <ApplyJobStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Apply Job'
    }}>
        <ApplyJobStack.Screen name="ApplyJob" component={ApplyJobScreen} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </ApplyJobStack.Navigator>
  );

  
  const SearchScreenJobDetailsStackScreen = ({navigation}) => (
    <SearchScreenJobDetailsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Job Details'
    }}>
        <SearchScreenJobDetailsStack.Screen name="SearchScreenJobDetails" component={SearchScreenJobDetails} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </SearchScreenJobDetailsStack.Navigator>
  );

  const SettingStackScreen = ({navigation}) => (
    <SettingStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
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
                backgroundColor= "#0066ff"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </SettingStack.Navigator>
  );

  const EditProfileStackScreen = ({navigation}) => (
    <EditProfileStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitleAlign: 'center',
        headerTitle: 'Edit Profile'
    }}>
        <EditProfileStack.Screen name="EditProfile" component={EditProfileCandidate} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </EditProfileStack.Navigator>
  );

  const ChangePasswordStackScreen = ({navigation}) => (
    <ChangePasswordStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
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
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </ChangePasswordStack.Navigator>
  );

  const SupportStackScreen = ({navigation}) => (
    <SupportStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
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
                backgroundColor= "#0066ff"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </SupportStack.Navigator>
  );

  const FAQStackScreen = ({navigation}) => (
    <FAQStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
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
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </FAQStack.Navigator>
  );

  const SupportChatStackScreen = ({navigation}) => (
    <SupportChatStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
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
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </SupportChatStack.Navigator>
  );

  const MyJobsStackScreen = ({navigation}) => (
    <MyJobsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitle: 'My Jobs',
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontSize: 18,
        }
    }}>
        <MyJobsStack.Screen name="MyJobs" component={MyJobs} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </MyJobsStack.Navigator>
);

const MyEarningsStackScreen = ({navigation}) => (
    <MyEarningsStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitle: 'My Earnings',
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontSize: 18,
        }
    }}>
        <MyEarningsStack.Screen name="MyEarnings" component={MyEarnings} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-menu" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.openDrawer();}}
                />
            )
        }} />
    </MyEarningsStack.Navigator>
);

const CandidateActiveDescriptionStackScreen = ({navigation}) => (

    <CandidateActiveDescriptionStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitle: 'Job Description',
        headerTitleAlign: "center",
        
    }}>
        <CandidateActiveDescriptionStack.Screen name="CandidateActiveDescription" component={CandidateActiveDescription} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack()}}
                />
            )
        }} />
    </CandidateActiveDescriptionStack.Navigator>
);

const CandidateAllJobDescriptionStackScreen = ({navigation}) => (
    <CandidateAllJobDescriptionStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: "#0066ff",
            height: 45
        },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: {
            fontSize: 18
        },
        headerTitle: 'Job Description',
        headerTitleAlign: "center"
    }}>
        <CandidateAllJobDescriptionStack.Screen name="CandidateAllJobsDescription" component={CandidateAllJobsDescription} options={{
            headerLeft: () => (
                <Icon.Button 
                name="md-arrow-back" 
                size={24} 
                backgroundColor= "#0066ff"
                onPress={() => {navigation.goBack();}}
                />
            )
        }} />
    </CandidateAllJobDescriptionStack.Navigator>
);