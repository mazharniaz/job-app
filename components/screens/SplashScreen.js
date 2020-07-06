import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
    ActivityIndicator
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import SignInScreen from '../screens/SignInScreen'

export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: { },
            email: ''
        }
    }
    
    componentDidMount() {
        
        this._retrieveData();
        
    }

    getEmail(email) {
        
        const that = this;
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        console.log(email, " -----> amail")
          axios.post(`http://production.myquickshift.com/app_api/user_login_data?email=${email}`, JSON.stringify({
           //email: email, 
        }), axiosConfig)
          .then((response) => {
            console.log(response.data, "Splash Screen lulu ====>")
            //resp = response;
            this.setState({
                isLoading: false,
                data: response
           })
           
            if(response.data.login_data === []) {
                that.props.navigation.navigate('SignInScreen'); 
            }
            else if(response.data.login_data[0].whoim === "employer") {
                
                that.props.navigation.navigate('DrawerEmployer');  
            }
            else if(response.data.login_data[0].whoim === "candidate") {
                that.props.navigation.navigate('DrawerCandidate');
            }
        }, (error) => {
          console.log(error,"///////////////////////////////////");
        });
    }
    
    _retrieveData = async () => {
        
        const that = this;
        
        try {
          const user = await AsyncStorage.getItem('user');
          const parse = JSON.parse(user);
          
          this.getEmail(parse.email)
          
        //   if (user === null) {
        //     that.props.navigation.navigate('SignInScreen');
        //     console.log(value);
        //   }
        //   else if (user !== null) {}

        } catch (error) {
            
            this.props.navigation.navigate('SignInScreen');
        }
      };
    
    render(navigation) {

        if(this.state.isLoading) {
            return(
                <View style={styles.container}>
                    <View>
                        <Animatable.Image
                            animation="bounceIn"
                            duration={3000}
        
                            source={require('../../assets/new-logo-mqs.png')}
                            style={styles.logo}
                            resizeMode='stretch'
                        ></Animatable.Image>
                    </View>
                </View>
            )
        } 
            return <SignInScreen />
        
    }
}

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0066ff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: '#0066ff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: '#ffffff',
        fontWeight: 'bold'
    }
});


{/* <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={3000}

                    source={require('../../assets/new-logo-mqs.png')}
                    style={styles.logo}
                    resizeMode='stretch'
                ></Animatable.Image>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1500}>
                <Text style={styles.title}>Work Life Made Easy!</Text>
                <Text style={styles.text}>Sign in with account</Text>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignInScreen')}>
                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <Icon 
                                name="navigate-next"
                                color= '#ffffff'
                                size= {20}
                            />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View> */}