import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Label, Item, Form, Button, Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class ForgotPasswordChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            code: '',
            new_pass: '',
            cnfrm_pass: ''

        }
    }

    componentDidMount() {
        this._retrieveCode();
    }

    _retrieveCode = async () => {
        try {
            const ver_code = await AsyncStorage.getItem('code');
            const parse = JSON.parse(ver_code);
            this.setState({ code: parse.code})
            console.log(parse.code, '---> Code')
          
          } catch (error) {
            alert(error)
          }
    }

    forgetPasswordChange_API() {
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
              };
            console.log(this.state.code, " -----> Verification Code")
              axios.post(`http://myquickshift.com/app_api/reset_password/${this.state.code}`, JSON.stringify({
               new_pass: this.state.new_pass,
               cnfrm_pass: this.state.cnfrm_pass
            }), axiosConfig)
              .then((response) => {
                console.log(response.data, "---> Forget Password Change response")
                this.setState({
                    isLoading: false,
                    data: response
               })
    
               if(response.data.message === "reset successfuly") {
                    alert('Password reset successfully!')
                    this.props.navigation.navigate('SignInScreen')
               } else if(response.data.message === "those password did not match ") {
                   alert('Password did not match!')
               }
            }, (error) => {
              console.log(error,"---> Forget Password Change response error!");
            });
    }

    render(navigation) {
        return (
            <Container>
                <Form style={{marginTop: '1%', marginRight: '5%'}}>
                    <Item stackedLabel style={styles.container}>
                        <Label>Enter New Password</Label>
                        <Input onChangeText={text => this.setState({new_pass: text})} secureTextEntry={true} />
                    </Item>

                    <Item stackedLabel style={styles.container}>
                        <Label>Confirm Password</Label>
                        <Input onChangeText={text => this.setState({cnfrm_pass: text})} secureTextEntry={true} />
                    </Item>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn} onPress={() => this.forgetPasswordChange_API(this.state.new_pass, this.state.cnfrm_pass)}>
                            <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                <Text style={[styles.textSign, {color: '#ffffff'}]}>Change Password</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Form>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        marginLeft: '4%'
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