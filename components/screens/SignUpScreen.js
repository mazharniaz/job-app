import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Picker,
    StatusBar,
    Platform,
    TextInput,
    CheckBox
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            whoim: '',

            selectedValue: '',
            setSelectedValue: '',
            isSelected: false,
            setSelection: false,

            name_check_textInputChange: false,
            check_textInputChange: false,
            secureTextEntry: true,
            confirm_secureTextEntry: true
        }

        
    }
    
    // const [selectedValue, setSelectedValue] = React.useState("");

    // const [isSelected, setSelection] = React.useState(false);
    
    // const [data, setData] = React.useState({
    //     email: '',
    //     password: '',
    //     confirm_password: '',
    //     check_textInputChange: false,
    //     secureTextEntry: true,
    //     confirm_secureTextEntry: true
    // });

    userRegister(name, email, password, whoim) {
        let resp;
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        console.log(name,email,password,whoim, "------->>>")
        axios.post('http://production.myquickshift.com/app_api/register_api', JSON.stringify({
            name: name,
            email: email, 
            password: password,
            whoim: whoim
        }),axiosConfig)
          .then((response) => {
            console.log(response.data, "REGISTER ====>")
            resp = response;
            this.setState({
                isLoading: true,
                data: response
           })

           if(response.data.register === "true") {
               alert('Register Successfully!')
               this.props.navigation.navigate('EmailVerification2');
           }
           else {
               alert('Error!')
           }
        }, (error) => {
          console.log(error,"///////////////////////////////////");
        });
    }

    _storeRegisterEmail = async () => {
          
        //console.log(this.state.data, "----> UserID Checking")
        try {
          let obj = {
            email: this.state.email,
          }
    
          await AsyncStorage.setItem(
            'emailReg', JSON.stringify(obj)        
          );
        } catch (error) {
          alert(error)
        }
      };

      handleRegister() {
        this._storeRegisterEmail(this.state.email);
        this.userRegister(this.state.name, this.state.email, this.state.password, this.state.whoim)
      }

    render(navigation) {
        
        const name_textInputChange = (nameval) => {
            if(nameval.length != 0 ) {
                this.setState({
                    ... this.state,
                    name: nameval,
                    name_check_textInputChange: true
                })
            } else {
                this.setState({
                    ... this.state,
                    name: nameval,
                    name_check_textInputChange: false
                }) 
            }
        }

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
    
        const handleConfirmPasswordChange = (val) => {
            this.setState({
                ... this.state,
                confirm_password: val, 
            })
        }
    
        const updateSecureTextEntry = () => {
            this.setState({
                ... this.state,
                secureTextEntry: !this.state.secureTextEntry
            })
        }
    
        const updateConfirmSecureTextEntry = () => {
            this.setState({
                ... this.state,
                confirm_secureTextEntry: !this.state.confirm_secureTextEntry
            })
        }
    
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#0066ff' barStyle='light-content' />

            <View style={styles.header}>
                <Text style={styles.text_header}>Sign Up</Text>
            </View>
            
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Your Name</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#0066ff"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Name"
                        style={styles.textInput}
                        //autoCapitalize='none'
                        onChangeText={(nameval) => name_textInputChange(nameval)}
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
            
            {/* <Animatable.View animation="fadeInUpBig" style={styles.footer}> */}
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

                <Text style={[styles.text_footer, {marginTop: 5}]}>Password</Text>

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
                        secureTextEntry={this.state.secureTextEntry ? true : false}
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

                <Text style={[styles.text_footer, {marginTop: 5}]}>Confirm Password</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#0066ff"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry={this.state.confirm_secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {this.state.confirm_secureTextEntry ?
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
                
                <Text style={[styles.text_footer, {marginTop: 10}]}>- Select -</Text>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2'}}>
                    <Picker
                        selectedValue={this.state.whoim}
                        style={{ height: 50, width: '100%', color: '#05375a'}}
                        onValueChange={(itemValue, itemIndex) => this.setState({whoim:itemValue})}
                    >
                        <Picker.Item label=" " value="" />
                        <Picker.Item label="I'm an employer looking to hire" value="employer" />
                        <Picker.Item label="I'm a candidate looking for a job" value="candidate" />
                    </Picker>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={this.state.isSelected}
                        onValueChange={() => this.setState({isSelected:!this.state.isSelected})}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>I agree the term of use</Text>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => this.handleRegister()}>
                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Sign Up</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SignInScreen')}
                        style={[styles.signIn, {borderColor: '#0066ff', borderWidth: 1, marginTop: 8}]}
                    >
                        <Text style={[styles.textSign, {color: '#0066ff'}]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            
        </View>
    )
}
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0066ff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: 7,
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
        fontSize: 16
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 3
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS ==='ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 10
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
    },
    checkboxContainer: {
        flexDirection: "row",
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
        color: '#0066ff'
      },
});