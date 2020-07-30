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

        }
    }

    render(navigation) {
        return (
            <Container>
                <Form style={{marginTop: '1%', marginRight: '5%'}}>
                    <Item stackedLabel style={styles.container}>
                        <Label>Enter New Password</Label>
                        <Input onChangeText={text => this.setState({verification_code: text})} keyboardType="number-pad" />
                    </Item>

                    <Item stackedLabel style={styles.container}>
                        <Label>Confirm Password</Label>
                        <Input onChangeText={text => this.setState({verification_code: text})} keyboardType="number-pad" />
                    </Item>

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.signIn} >
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