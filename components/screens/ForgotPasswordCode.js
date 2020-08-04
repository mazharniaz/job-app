import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Label, Item, Form, Button, Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class ForgotPasswordCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            code: ''
        }
    }

    forgetPasswordCode_API() {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };
        console.log(this.state.code, " -----> Verification Code")
          axios.post(`http://myquickshift.com/app_api/account_confirmation`, JSON.stringify({
           code: this.state.code, 
        }), axiosConfig)
          .then((response) => {
            console.log(response.data, "---> Forget Password Code response")
            this.setState({
                isLoading: false,
                data: response
           })

           if(response.data.message === "password reset") {
               this.props.navigation.navigate('ForgotPasswordChange')
           } else if(response.data.message === "password not reset") {
               alert('Please enter valid code!')
           }
        }, (error) => {
          console.log(error,"---> Forget Password Code response error!");
        });
    }

    _storeCode = async () => {
        //console.log(this.state.code, "----> Code Checking")
        try {
          let obj = {
            code: this.state.code,
          }
    
          await AsyncStorage.setItem(
            'code', JSON.stringify(obj)        
          );
        } catch (error) {
          alert(error)
        }
    }

    handleCode_Screen() {
        this.forgetPasswordCode_API(this.state.code)
        this._storeCode(this.state.code)
    }

    render(navigation) {
        return (
            <Container>
                <Form style={{marginTop: '1%', marginRight: '5%'}}>
                    <Item stackedLabel style={styles.container}>
                        <Label>Enter code</Label>
                        <Input onChangeText={text => this.setState({code: text})} keyboardType="number-pad" />
                    </Item>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn} onPress={() => this.handleCode_Screen()}>
                            <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                <Text style={[styles.textSign, {color: '#ffffff'}]}>Next!</Text>
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