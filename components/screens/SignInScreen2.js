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

export default class SignInScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            email: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true,

        }
        this.userLogin_API = this.userLogin_API.bind(this)
        console.log(this.props, '---> SCREEN PROPS')
    }

    componentDidMount() {
        
    }

    userLogin_API(email, password) {

        const that = this

        console.log(this.props, '---> THAT')

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
            console.log(response.data, "---> Login User Data")
            this.setState({
                isLoading: false,
                data: response.data.login_credentials
        })

        if(response.data.login_credentials === false) {
            alert('Email or Password is incorrect!')
        }
        else if (response.data.login_credentials.whoim === "candidate") {
            
            that.props.navigation.navigate('DrawerCandidate')
              
        }

        else if (response.data.login_credentials.whoim === "employer") {
            console.log(response.data.login_credentials.whoim, '---> CHECK KAR RAHA')
            that.props.navigation.navigate('DrawerEmployer')
              
        }

        }, (error) => {
            console.log(error,"---> Login User Data Error");
        });

    }


    render(navigation) {

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

        return (
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

                    <Text style={[styles.text_footer, {marginTop: 35}]}>Password</Text>

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
                    <Button title="Forgot Password" onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Text>Forgot Password</Text>
                    </Button>

                    <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => this.userLogin_API(this.state.email, this.state.password)}>
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