import 'react-native-gesture-handler';
import React, { Component, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import PushNotificationIOS from "@react-native-community/push-notification-ios";

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
import firebase from './components/firebase/firbaseconf';

import messaging from '@react-native-firebase/messaging';
//import { TapGestureHandler } from 'react-native-gesture-handler';

var PushNotification = require("react-native-push-notification");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {},

      id: '',
      app_token: '',

      user_status: ''
    }
  }

  async requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  async backgroundMessages() {
    
  }

  _UpdateUserID = async () => {
    // retriveid chekc if empty
    this.getUserID(this.state.id);

    console.log(this.state.id, 'GETTING USER ID')

  }  

  getUserID = async () => {
    try {
      const userid = await AsyncStorage.getItem('userid');
      const parse = JSON.parse(userid);

      this.setState({
        id: parse.user_id
      })

    if(this.state.id === '') {
      try {
        let obj = {
          id: '!@14' 
        }
        await AsyncStorage.setItem(
          'userid', JSON.stringify(obj)        
        );
      } catch (error) {
        alert(error)
      }
    }
    } catch (error) {
        //alert(error)
        console.log(parse.user_id, '----> APP KA PARSE 1')
    }
  }

  postToken = async (id, app_token) => {
    try {
      const user = await AsyncStorage.getItem('user');
      const parse = JSON.parse(user);
      console.log(user, '-----> USER USER')
      this.setState({
        id: parse.user_id
      })

    
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };
    console.log(this.state.id, app_token, 'USERRRRRRRRRRR')
    axios.post('http://myquickshift.com/app_api/send_app_token', JSON.stringify({
      id: this.state.id,
      app_token: app_token
    }),axiosConfig)
      .then((response) => {
        console.log(response.data.user_status, "-----> Token response checker")
        //resp = response;
        this._storeUserStatus(response.data.user_status, response.data.app_token)
        this.setState({
            isLoading: false,
            data: response.data,
            user_status: response.data.user_status
       }) 
       console.log(this.state.id, '----> ABCABCBAC')
    }, (error) => {
      console.log(error,"-----> Token error checker");
    });

  } catch (error) {
    //alert(error)
    console.log(parse.user_id, '----> APP KA PARSE 2')
  }
}

 _storeUserStatus = async (_user_status, _token) => {
  console.log(_user_status, '---> abababababab')
  try {
    let obj = {
      user_status: _user_status,
      app_token: _token
    }
    await AsyncStorage.setItem(
      'user_Status', JSON.stringify(obj)        
    );
  } catch (error) {
    alert(error)
  }
 }

  

  async componentDidMount() {
    
    if(!this.state.isLoading) {
      console.log('sjadjasijasidjaisjdiajdsiajdsisajdasjd')
      console.log(this.state.data, '----> ABCV')

      
    }

    this._UpdateUserID(this.state.id);

    
    
    //this.requestUserPermission();
    this.checkPermission();
    this.backgroundMessages();
    
    PushNotification.configure({

      onRegister: token => { 
        // Calling the redux action creator that was mapped to the props via mapDispatchToProps
        console.log(token, '------> token')
        // Or store it in AsyncStorage, or in my case RNSecureStorage.

        this.postToken(this.state.id, token.token)

      },
      
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);

      messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log('Message handled in the background!', remoteMessage);
        });
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      popInitialNotification: true,
      //requestPermissions: true,
    });
    


  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
        this.getToken();
    } else {
        this.requestPermission();
    }
  }

  async requestPermission() {
    try {
        await firebase.messaging().requestPermission();
        // User has authorised
        this.getToken();
    } catch (error) {
        // User has rejected permissions
        console.log('permission rejected');
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!fcmToken) {
        fcmToken = await firebase.messaging().getToken();
        if (fcmToken) {
            // user has a device token
            await AsyncStorage.setItem('fcmToken', fcmToken);

            
        }
    }
  }

  _storeData = async () => {
    try {
      
      let obj = {
        email: this.state.data,
        password: this.state.data,
      }

      await AsyncStorage.setItem(
        'user', JSON.stringify(obj)        
      );
    } catch (error) {
      alert(error)
    }
  };

  _retrieveData = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const parse = JSON.parse(user);
      alert(JSON.stringify(this.state.data));
      
      // if (user !== null) {
        
      //   console.log(value);
      // }
    } catch (error) {
      alert(error)
    }
  };
  
  render() {
    return(
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    )
  }
}

export default App;




// import { loginReducer, initialLoginState } from './reducers/loginReducer'

// const loginReducer = (prevState, action) =>  {
//   switch (action.type) {
//     case 'RETRIEVE_TOKEN' :
//     return {
//       ... prevState,
//       userToken: action.token,
//       isLoading: false
//     };
//     case 'LOGIN' :
//     return {
//       ... prevState,
//       userName: action.name,
//       userToken: action.token,
//       isLoading: false
//     };
//     case 'LOGOUT' :
//     return {
//       ... prevState,
//       userName: null,
//       userToken: null,
//       isLoading: false
//     };
//     case 'REGISTER' :
//     return {
//       ... prevState,
//       userName: action.name,
//       userToken: action.token,
//       isLoading: false
//     };
//   }
// };

// const [loginState, dispatch] = React.useReducer(loginReducer, this.state);
  
// const authContext = React.useMemo(() => ({
//           signIn : async(userName, password) => {
//             // setIsLoading(false),
//             // setUserToken('abcd')
            
//             let userToken;
//             userToken = null;
            
//             if (userName === 'user1@email.com' && password === '12345') {
//               try{
//                 userToken = 'abcd'
//                 await AsyncStorage.setItem('userToken', userToken)
//               } catch (e) {
//                 console.log(e)
//               }
//             }
//             else if(userName === 'user2@email.com' && password === 'absd') {
//               try{
//                 userToken = 'ab'
//                 await AsyncStorage.setItem('userToken', userToken)
//               } catch (e) {
//                 console.log(e)
//               }
//             }
    
//             dispatch({ type: 'LOGIN', name: userName, token: userToken })
            
//           },
//           signOut: async() => {
//             // setIsLoading(false),
//             // setUserToken(null)
    
//             try{
//               await AsyncStorage.removeItem('userToken')
//             } catch (e) {
//               console.log(e)
//             }        
    
//             dispatch({ type: 'LOGOUT' })
//           },
//           signUp: () => {
//             setIsLoading(false),
//             setUserToken('abcd')
//           }
//         }), []);

//         useEffect(() => {
//                   setTimeout(async() => {
//                     // setIsLoading(false);
                    
//                     let userToken;
//                     userToken = null;
            
//                     try{
//                       userToken = await AsyncStorage.getItem('userToken')
//                     } catch (e) {
//                       console.log(e)
//                     }
            
//                     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
//                   }, 1000)
//                 }, []);


// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       userName: null,
//       userToken: null
//     };
//   }

//   componentDidMount() {
//     fetch("http://production.myquickshift.com/api/homescreen")
//           .then(response => response.json())
//           .then(data => {
//             this.setState({
//               isLoading: false,
//               data: data
//             })
//           })
//   }

  

//   render() {
//     if(!this.state.isLoading) {
//       return(
//         <AuthContext.Provider value={authContext}>
//            <NavigationContainer>
//              { loginState.userToken === 'abcd' ? (
//               <DrawerNavigation />
//             )
//             : loginState.userToken === 'ab' ? (
//               <DrawerNavigationEmployer />
//             )
//             :
//               <RootStackScreen />
//             }
//           </NavigationContainer>
//         </AuthContext.Provider>
//       )
//     } else {
//         return (
//           <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <ActivityIndicator size='large' />
//           </View>       
//       )
//     }
//   }
// }
  
 
  

  
      


//const App = () => {

//   const [isLoading, setIsLoading] = React.useState(true);
//       // const [userToken, setUserToken] = React.useState(null);

  
//       const initialLoginState = {
//         isLoading: true,
//         userName: null,
//         userToken: null
//       };

//       const [data, setData] = useState({ hits: [] });
//   //       useEffect(async () => {
//   //       const result = await axios(
//   //         'http://production.myquickshift.com/api/homescreen',
//   //       );
//   //       setData(result.data);
//   //       console.log(result.data);
//   // });
  
//       const loginReducer = (prevState, action) =>  {
//         switch (action.type) {
//           case 'RETRIEVE_TOKEN' :
//           return {
//             ... prevState,
//             userToken: action.token,
//             isLoading: false
//           };
//           case 'LOGIN' :
//           return {
//             ... prevState,
//             userName: action.name,
//             userToken: action.token,
//             isLoading: false
//           };
//           case 'LOGOUT' :
//           return {
//             ... prevState,
//             userName: null,
//             userToken: null,
//             isLoading: false
//           };
//           case 'REGISTER' :
//           return {
//             ... prevState,
//             userName: action.name,
//             userToken: action.token,
//             isLoading: false
//           };
//         }
//       };
  
//        const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

//   const authContext = React.useMemo(() => ({
//     signIn : async(userName, password) => {
//       //setIsLoading(false)
//       // setUserToken('abcd')
      
//       let userToken;
//       userToken = null;
//       console.log("1 ======>")
//       console.log("http://production.myquickshift.com/app_api/login_api?email="+userName+"&&password="+password)
//       fetch(
//         `http://production.myquickshift.com/app_api/login_api?email=${userName}&&password=${password}`,
      
//       )
//      .then(res => res.json())
//       .then(response => {
//         console.log("2 ======>")
//         console.log(response.login_credentials)
        
//       if(response.login_credentials==="Credentials not match to our records"){
//       alert("Email or Password is invalid!")
//       }
//       else{
//       console.log("Welcome!")
//      // setIsLoading(false)
//       try{
//         // setIsLoading(false)           
//         (async () => {
          
//           userToken = 'abcd'
//           await AsyncStorage.setItem('userToken', userToken)  
          
//           dispatch({ type: 'LOGIN', name: userName, token: userToken })
          
      
//       })();  
        
//       } catch (e) {
//         console.log(e)
//       }
      
//       }
//     })
//     .catch(error => console.log(error));
//     console.log("3 ======>")
    
      
//       // fetch("http://production.myquickshift.com/api/homescreen")
//       // .then(response => response.json())
//       // .then(data => {
//       //   console.log(data.name)
//       //   this.setState({
//       //     isLoading: false,
//       //     data: data
//       //   })
//       // })

//       // if (userName === 'user1@email.com' && password === '12345') {
//       //   try{
//       //     userToken = 'abcd'
//       //     await AsyncStorage.setItem('userToken', userToken)
//       //   } catch (e) {
//       //     console.log(e)
//       //   }
//       // }
//       // else if(userName === 'user2@email.com' && password === 'absd') {
//       //   try{
//       //     userToken = 'ab'
//       //     await AsyncStorage.setItem('userToken', userToken)
//       //   } catch (e) {
//       //     console.log(e)
//       //   }
//       // }

      
      
//     },
//     signOut: async() => {
//       // setIsLoading(false),
//       // setUserToken(null)

//       try{
//         await AsyncStorage.removeItem('userToken')
//       } catch (e) {
//         console.log(e)
//       }        

//       dispatch({ type: 'LOGOUT' })
//     },
//     signUp: () => {
//       setIsLoading(false),
//       setUserToken('abcd')
//     }
//   }), []);

//   useEffect(() => {
//     setTimeout(async() => {
//       // setIsLoading(false);
      
//       let userToken;
//       userToken = null;

//       try{
//         userToken = await AsyncStorage.getItem('userToken')
//       } catch (e) {
//         console.log(e)
//       }

//       dispatch({ type: 'RETRIEVE_TOKEN', token: userToken })
//     }, 1000),
//   console.log(" lund ====>")
//   // fetch(
//   //   `http://production.myquickshift.com/app_api/login_api?email=ubaidkh32@gmail.com&&password=zainmalik`,
//   //   {
//   //     method: "GET"
//   //   }
//   // )
//   //   .then(res => res.json())
//   //   .then(response => {
//   //   if(response['login_credentials']==="Credentials not match to our records"){
//   //     console.log("Invalid creds")
//   //   }
//   //   else{
//   //     console.log("Welcome!")
//   //   }
//   //   })
//   //   .catch(error => console.log(error));


//   //   async () => {
//   //     console.log(" 2 ====>")
//   //     const result = await axios.get(
//   //       'http://production.myquickshift.com/api/homescreen'
//   //     );
//   //     console.log(" 3 ====>")
//   //     console.log(result);
//   //     setData(result.data);
      
//   // }
// },  []); 
//   // console.log(" 4 ====>")
      
//       if ( loginState.isLoading ) {
//         return(
//           <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <ActivityIndicator size='large' />
//           </View>
//         )
//       }

//   return(
    
//     <NavigationContainer>
//       <RootStackScreen />
//     </NavigationContainer>
    
//     // <AuthContext.Provider value={authContext}>
//     //   <NavigationContainer>
//     //     { loginState.userToken === 'abcd' ? (
//     //       <DrawerNavigation />
//     //     )
//     //     : loginState.userToken === 'ab' ? (
//     //       <DrawerNavigationEmployer />
//     //     )
//     //     :
//     //       <RootStackScreen />
//     //     }
//     //   </NavigationContainer>
//     // </AuthContext.Provider>
//   )

// }

// export default App;
  
      
  //     return(
  //       <AuthContext.Provider value={authContext}>
  //         <NavigationContainer>
  //           { loginState.userToken === 'abcd' ? (
  //             <DrawerNavigation />
  //           )
  //           : loginState.userToken === 'ab' ? (
  //             <DrawerNavigationEmployer />
  //           )
  //           :
  //             <RootStackScreen />
  //           }
  //         </NavigationContainer>
  //       </AuthContext.Provider>
  //     )
  //   }
  //   }

  
  
  
  
  
  
  
  
  
  
  
  
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












