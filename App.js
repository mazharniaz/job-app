import 'react-native-gesture-handler';
import React, { Component, useEffect, useMemo } from 'react';
import { View, ActivityIndicator} from 'react-native';

import TabNavigation from './components/tab/TabNavigation'
import DrawerNavigation from "./components/drawer/DrawerNavigation"
import DrawerNavigationEmployer from "./components/drawer/DrawerNavigationEmployer"

// import StackNavigation from "./components/stack/StackNavigation"
// import HomeScreen from "./components/screens/HomeScreen"
// import LoadingScreen from "./components/LoadingScreen"
import Login from './components/screens/Login'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackScreen from './components/stack/RootStackScreen';
import { AuthContext } from './components/context/Context';
import { Drawer } from 'react-native-paper';

import SupportStackScreen from './components/stack/SupportStack'

import AsyncStorage from '@react-native-community/async-storage';


const App = () => {
  
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);

    const initialLoginState = {
      isLoading: true,
      userName: null,
      userToken: null
    };

    const loginReducer = (prevState, action) =>  {
      switch (action.type) {
        case 'RETRIEVE_TOKEN' :
        return {
          ... prevState,
          userToken: action.token,
          isLoading: false
        };
        case 'LOGIN' :
        return {
          ... prevState,
          userName: action.name,
          userToken: action.token,
          isLoading: false
        };
        case 'LOGOUT' :
        return {
          ... prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
        case 'REGISTER' :
        return {
          ... prevState,
          userName: action.name,
          userToken: action.token,
          isLoading: false
        };
      }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
      signIn : async(userName, password) => {
        // setIsLoading(false),
        // setUserToken('abcd')
        
        let userToken;
        userToken = null;
        
        if (userName === 'user1@email.com' && password === '12345') {
          try{
            userToken = 'abcd'
            await AsyncStorage.setItem('userToken', userToken)
          } catch (e) {
            console.log(e)
          }
        }
        else if(userName === 'user2@email.com' && password === 'absd') {
          try{
            userToken = 'ab'
            await AsyncStorage.setItem('userToken', userToken)
          } catch (e) {
            console.log(e)
          }
        }

        dispatch({ type: 'LOGIN', name: userName, token: userToken })
        
      },
      signOut: async() => {
        // setIsLoading(false),
        // setUserToken(null)

        try{
          await AsyncStorage.removeItem('userToken')
        } catch (e) {
          console.log(e)
        }        

        dispatch({ type: 'LOGOUT' })
      },
      signUp: () => {
        setIsLoading(false),
        setUserToken('abcd')
      }
    }), []);

    useEffect(() => {
      setTimeout(async() => {
        // setIsLoading(false);
        
        let userToken;
        userToken = null;

        try{
          userToken = await AsyncStorage.getItem('userToken')
        } catch (e) {
          console.log(e)
        }

        dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
      }, 1000)
    }, []);
    
    
    if ( loginState.isLoading ) {
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size='large' />
        </View>
      )
    }


    return(
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          { loginState.userToken === 'abcd' ? (
            <DrawerNavigation />
          )
          : loginState.userToken === 'ab' ? (
            <DrawerNavigationEmployer />
          )
          :
            <RootStackScreen />
          }
        </NavigationContainer>
      </AuthContext.Provider>
    )
  }

  export default App; 
  
  
  
  
  
  
  
  
  
  
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentScreen : 'LoadingScreen'
  //   };
  //   setTimeout(() => {
  //     this.setState({ currentScreen: 'Login' })
  //   }, 3000)
  // }
  
  // render() {
  //   const { currentScreen } = this.state
  //   let mainScreen = currentScreen === 'LoadingScreen' ? <LoadingScreen /> : <Login />
  //   return (
  //     mainScreen
      
  //   )
  // }












