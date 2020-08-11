import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Platform,
    TextInput,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';

import DrawerNavigationEmployer from '../drawer/DrawerNavigationEmployer'


import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DrawerNavigation from "../drawer/DrawerNavigation"

import { AuthContext } from '../context/Context';



export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            user_id: '',

            data2: {},
            id: '',
            app_token: '',

            email: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true,

            userStatus: '',

            is_active: '',

            image: '',
            name: '',
            city: '',
            county: ''
        }
        console.log(this.props, '----> STATTATATA')

    }

    componentDidMount() {
        this._retrieveUserID();
    }

    _retrieveUserID = async () => {
        //console.log(this.state.user_id, '---> RETRIEVE USER ID')
        try {
            const userid = await AsyncStorage.getItem('userid');
            const parse = JSON.parse(userid);
      
            this.setState({
              id: parse.id
            })
            console.log(parse, '---> ID SIGNIN SCREEN')
        } catch (error) {
            //alert(error)
            
        }
        
    }

    userLogin(email, password) {

        const that = this;
        this._retrieveUserStatus();
        
        
        
        //const navigation = useNavigation();
        //const { navigation } = this.props.navigation

        console.log(this.state.userStatus, 'UserStatus ----->')

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        axios.post('http://myquickshift.com/app_api/login_api', JSON.stringify({
           email: email, 
          password: password
        }), axiosConfig)
          .then((response) => {
            console.log(response.data, "USER DATA ====>")
            this.setState({
                isLoading: false,
                data: response.data.login_credentials,

                is_active: response.data.login_credentials.is_active,
                image: response.data.login_credentials.image,
                name: response.data.login_credentials.name,
                city: response.data.login_credentials.city,
                county: response.data.login_credentials.county
           })

           if(response.data.login_credentials === false) {
            
                alert('Email or Password is incorrect!')
            }
            else if(response.data.login_credentials.whoim === "employer") {
                 if(response.data.login_credentials.is_active === "non_active") {
                    this.props.navigation.navigate('EmailVerification');
                 } else {
                        this._storeData();
                        this.props.navigation.navigate('DrawerEmployer');
                 }
            }
            else if(response.data.login_credentials.whoim === "candidate") {
                if(response.data.login_credentials.is_active === "non_active") {
                    this.props.navigation.navigate('EmailVerification')
                } else {
                    //console.log(navigation, '----> NAIAIIAIAIIA')
                    this._storeData();
                    this._storeApproveStatus(this.state.is_active);
                    this.props.navigation.navigate('DrawerCandidate');
                }
            }
        }, (error) => {
          console.log(error,"///////////////////////////////////");
        });

      }

    //   postToken = async (app_token) => {
    //     try {
    //       const user = await AsyncStorage.getItem('user');
    //       const parse = JSON.parse(user);
    
    //       this.setState({
    //         id: parse.user_id
    //       })
    
        
    //     let axiosConfig = {
    //       headers: {
    //           'Content-Type': 'application/json;charset=UTF-8',
    //           "Access-Control-Allow-Origin": "*",
    //       }
    //     };
    //     console.log(this.state.id, app_token, 'USERRRRRRRRRRR')
    //     axios.post('http://myquickshift.com/app_api/send_app_token', JSON.stringify({
    //       id: this.state.id,
    //       app_token: this.state.app_token
    //     }),axiosConfig)
    //       .then((response) => {
    //         console.log(response.data, "-----> Token response checker")
    //         //resp = response;
    //         this.setState({
    //             isLoading: false,
    //             data2: response.data
    //        })
    //        console.log(this.state.id, '----> ABCABCBAC')
    //     }, (error) => {
    //       console.log(error,"-----> Token error checker");
    //     });
    
    //   } catch (error) {
    //     alert(error)
    //   }
    // }

      _retrieveUserStatus = async () => {
          
          try {
            const user_status = await AsyncStorage.getItem('user_Status');
            const parse = JSON.parse(user_status);
            console.log(parse.app_token, '------> PARSE')
            this.setState({
                userStatus: parse.user_status,
            })
            //this.postToken(parse.app_token)

          } catch (error) {
              //alert(error)
          }
      }

      _storeData = async () => {
        if(!this.state.isLoading)  
        console.log(this.state.data, "----> UserID Checking")
        try {
          let obj = {
            email: this.state.email,
            user_id: this.state.data.id
          }

          await AsyncStorage.setItem(
            'user', JSON.stringify(obj)        
          );
          this._retrieveUserStatus()
        } catch (error) {
          alert(error)
        }
        const user = await AsyncStorage.getItem('user');
        console.log(user, '-----------> USER KA USER')
      };

      _storeEmail = async () => {
          
        console.log(this.state.data, "----> UserID Checking")
        try {
          let obj = {
            email: this.state.email,
            is_active: this.state.is_active
          }
    
          await AsyncStorage.setItem(
            'email', JSON.stringify(obj)        
          );
        } catch (error) {
          alert(error)
        }
      };

      _storeApproveStatus = async () => {
          
        //console.log(this.state.data, "----> UserID Checking")
        try {
          let obj = {
            is_active: this.state.is_active,
            image: this.state.image,
            name: this.state.name,
            city: this.state.city,
            county: this.state.county
          }
    
          await AsyncStorage.setItem(
            'ApproveStatus', JSON.stringify(obj)        
          );
        } catch (error) {
          alert(error)
        }
      };

      handlePress() {
          this._storeEmail(this.state.email);
          this.userLogin(this.state.email, this.state.password);
          
      }
    
        
render(navigation) {

    //console.log(this.props.navigation.navigate, '----> NAVIGATION')
    
    const textInputChange = (val) => {
        if(val.length != 0 ) {
            this.setState({
                ... this.state,
                email: val,
                check_textInputChange: true
            })
        } else {
            this.setState({
                ... this.state,
                email: val,
                check_textInputChange: false
            }) 
        }
    }

    const handlePasswordChange = (val) => {
        this.setState({
            ... this.state,
            password: val, 
        })
    }

    const updateSecureTextEntry = () => {
        this.setState({
            ... this.state,
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    //const that = this;

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#0066ff' barStyle='light-content' />

            <View style={styles.header}>
                <Text style={styles.text_header}>Hello There!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#0066ff"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize='none'
                        value={this.state.email}
                        onChangeText={(val) => textInputChange(val)}
                    />
                    
                    {this.state.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                        <Feather 
                            name="check-circle"
                            size={20}
                            color='#0066ff'
                        />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={styles.text_footer}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#0066ff"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry= {this.state.secureTextEntry ? true : false}
                        value={this.state.password}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {this.state.secureTextEntry ?
                            <Feather 
                                name="eye-off"
                                size={20}
                                color='grey'
                            />
                            :
                            <Feather 
                                name="eye"
                                size={20}
                                color='#0066ff'
                            />
                        }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <Text style={{color: '#0066ff', marginTop: '2%'}}>Forgot Password?</Text>
                </TouchableOpacity>

                <View style={styles.button}>
                <TouchableOpacity style={styles.signIn} onPress={() => this.handlePress()}>
                    <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Text style={[styles.textSign, {color: '#ffffff'}]}>Sign In</Text>
                    </LinearGradient>
                </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SignUpScreen')}
                        style={[styles.signIn, {borderColor: '#0066ff', borderWidth: 1, marginTop: 8}]}
                    >
                        <Text style={[styles.textSign, {color: '#0066ff'}]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            
        </View>
    )
  }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0066ff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#0066ff',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS ==='ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});


//const { signIn } = React.useContext(AuthContext);
    
    
// const [data, setData] = React.useState({
//         email: '',
//         password: '',
//         check_textInputChange: false,
//         secureTextEntry: true
//     });

    

    // const loginHandle = (email, password) => {
    //     signIn( email, password )
    // }