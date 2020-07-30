import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Label, Item, Form, Button, Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {}
        }
    }

  render(navigation) {

    // const passwordReset = (email) => {
    //     return firebase.auth().sendPasswordResetEmail(email)
    //   },

    // handlePasswordReset = async (values, actions) => {
    //     const { email } = values
      
    //     try {
    //       await this.props.firebase.passwordReset(email)
    //       console.log('Password reset email sent successfully')
    //       this.props.navigation.navigate('Login')
    //     } catch (error) {
    //       actions.setFieldError('general', error.message)
    //     }
    //   }
      
    return (
        <Container>
            <Form style={{marginTop: '1%', marginRight: '5%'}}>
                <Item stackedLabel style={styles.container}>
                    <Label>Enter your register email</Label>
                    <Input onChangeText={text => this.setState({verification_code: text})} keyboardType="number-pad" />
                </Item>

                <View style={styles.button}>
                    <TouchableOpacity style={styles.signIn} onPress={() => this.props.navigation.navigate('ForgotPasswordCode')}>
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

