import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
    CheckBox,
} from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Content, Form, Item, Input, Button, Label, Body, Icon, ListItem, Picker, Footer, Textarea } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


export default class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            user_id: '',
            old_password: '', 
            new_password: '',
            confirm_password: '',
            
            dialogVisible: false
        }
    }

    showDialog = () => {
        //alert('Hello')
        this.setState({ dialogVisible: true });
        //this.dialogBox();

        console.log(this.dialogVisible, '--------->')
    };
     
    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
     
    handleDelete = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        this._retrieveData("delete");
        this.setState({ dialogVisible: false });
    };
    
    _retrieveData = async (name) => {
        
        try {
          const user = await AsyncStorage.getItem('user');
          const parse = JSON.parse(user);
          console.log(parse.user_id, '---> Checking parse id')
          this.setState({ user_id: parse.user_id})
          //console.log(user, ' Checking retrieve---->')
            if(name === "delete") {
                const that = this;
                //console.log(user_id, ' Checking user ID')
                axios.get(`http://production.myquickshift.com/app_api/delete_account/${this.state.user_id}`)
                  .then((response) => {
                    console.log(response.data, "------> console log Delete Account")
                    this.setState({
                        isLoading: false,
                        data: response.data.status
                   })
                   if(response.data.status === "Account has been deleted") {
                    
                    that.props.navigation.navigate('SignInScreen');
                   }
                }, (error) => {
                  console.log(error,"------> console log Delete account");
                });
        
            }
            else {
                
                if(this.state.confirm_password === this.state.new_password) {
                const that = this;
                //console.log(user_id, ' Checking user ID')
                let axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                    }
                  };

                axios.post('http://production.myquickshift.com/app_api/changePass', JSON.stringify({
                    id: this.state.user_id,
                    old_password: this.state.old_password, 
                    new_password: this.state.new_password
                }), axiosConfig)
                  .then((response) => {
                    console.log(response.data, "------> console log Change Password")
                    this.setState({
                        isLoading: false,
                        data: response.data.status
                   })
                   if(response.data.status === "Password changed successfully") {
                    
                        alert('Password Changed Successfully!')
                        that.props.navigation.navigate('SignInScreen')
                   } else if(response.data.status === "Password did not match") {
                       alert('Problem!')
                   }
                }, (error) => {
                  console.log(error,"------> console log Delete account");
                });
            } else {
                alert('Password did not match!')
            }
          } 
        
        } catch (error) {
          alert(error)
        }
      };

    
    render(navigation) {

        const handleOldPasswordChange = (val) => {
            this.setState({
                ... this.state,
                old_password: val, 
            })
        }

        const handleNewPasswordChange = (val) => {
            this.setState({
                ... this.state,
                new_password: val, 
            })
        }
    
        const handleConfirmPasswordChange = (val) => {
            this.setState({
                ... this.state,
                confirm_password: val, 
            })
        }
    
        return(
        <Container style={styles.container}>
            <Content style={styles.content}>
                <Form style={styles.formStyle}>
                    <Item stackedLabel>
                        <Label style={styles.labelStyle}>Current Password *</Label>
                        <Input style={styles.inputStyle} placeholder="" onChangeText={(val) => handleOldPasswordChange(val)} />
                    </Item>
                    <Item stackedLabel>
                        <Label style={styles.labelStyle}>New Password *</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} onChangeText={(val) => handleNewPasswordChange(val)} />
                    </Item>
                    <Item stackedLabel>
                        <Label style={styles.labelStyle}>Confirm New Password *</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} onChangeText={(val) => handleConfirmPasswordChange(val)} />
                    </Item>

                    <View style={[styles.button, {marginBottom: '5%'}]}>
                        <TouchableOpacity style={styles.updateBtn} onPress={() => this._retrieveData("ChangePass")}>
                            <LinearGradient style={styles.updateBtn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Save New Password</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Form>

                <View
                    style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                    }}
                />

                <View>
                    <Text style={{fontSize: 22, color: '#0066ff', marginLeft: '5%', marginTop: '5%'}}>
                        Delete Account
                    </Text>
                    <Text style={{fontSize: 14, marginLeft: '5%'}}>
                        Warning! Can not restore operation.
                    </Text>
                    <View style={[styles.button, {marginRight: '5%', marginTop: '4%'}]}>
                        <TouchableOpacity style={styles.updateBtn} onPress={() => this.showDialog()}>
                            <LinearGradient style={styles.updateBtn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Delete Account</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <Dialog.Container visible={this.state.dialogVisible}>
                        <Dialog.Title>Account delete</Dialog.Title>
                        <Dialog.Description>
                            Do you want to delete this account? You cannot undo this action.
                        </Dialog.Description>
                        <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                        <Dialog.Button label="Delete" onPress={this.handleDelete} />
                        </Dialog.Container>
                    </View>
                </View>
            </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      marginTop: '3%'
    },
    inputStyle: { 
      fontSize: 14
    },
    formStyle: {
      marginRight: '5%'
    },
    labelStyle: {
      fontSize: 16,
      color: '#0066ff'
    },
    button: {
      alignItems: 'center',
      marginTop: 30,
      marginLeft:'5%',
      marginBottom: 30
    },
    updateBtn: {
      width: "100%",
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    textUpdate: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    headerStyle: {
      backgroundColor: "#0066ff",
      height: 45,
      textAlign: 'center'
    },
    checkboxContainer: {
        flexDirection: "row",
        marginLeft: '2%'
    },
      checkbox: {
        alignSelf: 'center',
    },
});