import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Label, Item, Form, Button, Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class EmailVerification2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            email: '',
            verification_code: ''
        }
    }

    componentDidMount() {
        this._retrieveRegisterEmail()
    }

    _retrieveRegisterEmail = async () => {
        console.log('RETRIEVE EMAIL')
        try {
            const email = await AsyncStorage.getItem('emailReg');
            const parse = JSON.parse(email);
            console.log(parse.email, '----> EMAIL')

            this.setState({
                email: parse.email
            })
        } catch (error) {
            alert(error)
        }
    }

    verifyEmail = async (_email, _verification_code) => {
        
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        console.log(_email, _verification_code, '----> EMAIL VERIFY DATA')
        axios.post('http://myquickshift.com/app_api/verifyEmail', JSON.stringify({
            email: _email,
            verification_code: _verification_code
        }),axiosConfig)
        .then((response) => {
        console.log(response.data, "-----> Email Verification checker")
        
        this.setState({
            isLoading: false,
            data: response.data
       })

       if(response.data.status === 'Email Verified SuccessFully') {
           alert('Verification Successful!')
           this.props.navigation.navigate('SignInScreen')
       } else {
           alert('Try again!')
       }
    }, (error) => {
      console.log(error,"-----> Email Verification checker");
    });

}

render(navigation) {
    return (
        
        <Container>
            <Form style={{marginTop: '5%', marginRight: '5%'}}>
                <Item stackedLabel style={styles.container}>
                    <Label>Enter code to verify your email</Label>
                    <Input onChangeText={text => this.setState({verification_code: text})} keyboardType="number-pad" />
                </Item>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => this.verifyEmail(this.state.email, this.state.verification_code)}>
                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Verify!</Text>
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
