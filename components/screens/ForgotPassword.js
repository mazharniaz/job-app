import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { Header, Left, Button, Icon } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import firebase from '../firebase/firbaseconf';

export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: '',
            email: '',
            check_textInputChange: false,
        }
    }

  render(navigation) {

    const passwordReset = (email) => {
        return firebase.auth().sendPasswordResetEmail(email)
      },

    handlePasswordReset = async (values, actions) => {
        const { email } = values
      
        try {
          await this.props.firebase.passwordReset(email)
          console.log('Password reset email sent successfully')
          this.props.navigation.navigate('Login')
        } catch (error) {
          actions.setFieldError('general', error.message)
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
      
    return (
      
          <View style={styles.container}>

              
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
                <View animation="bounceIn">
                    <Feather 
                        name="check-circle"
                        size={20}
                        color='#0066ff'
                    />
                </View>
                : null}
            </View>
            </View>
    )
  }
}

const styles = StyleSheet.create({
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
    container : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

