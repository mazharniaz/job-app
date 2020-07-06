import React, { Component } from "react"
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView, StyleSheet, Image } from "react-native"
import { Container, Button, View, Text, Icon, CheckBox, Body, ListItem, Picker, Form, Item, Input, Label } from 'native-base';

export default class Register extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
    
    render() {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#abec9e', '#0066ff']} style={styles.gradient}>
                <SafeAreaView style={styles.container}>
                    <Container style={{backgroundColor: "transparent"}}>

                    <Image 
                        source={require('../components/logo-mqs.png')} 
                        style={styles.logoStyling} 
                    />
 
                    <Text style={{alignSelf: "center", color: "#FFFFFF", marginTop: "-14%", fontSize: 24}}>Create New Account</Text>
                        
                        <Form>
                            <Item stackedLabel style={{marginTop: "-1%", marginLeft: "5%", marginRight: "5%"}}>
                                <Label style={styles.labelStyling}>Your Name</Label>
                                <Input style={styles.inputColor} />
                            </Item>

                            <Item stackedLabel style={styles.fieldStyling}>
                                <Label style={styles.labelStyling}>Email</Label>
                                <Input style={styles.inputColor} />
                            </Item>

                            <Item stackedLabel style={styles.fieldStyling}>
                                <Label style={styles.labelStyling}>Password</Label>
                                <Input secureTextEntry={true} style={styles.inputColor} />
                            </Item>

                            <Item stackedLabel style={styles.fieldStyling}>
                                <Label style={styles.labelStyling}>Reconfirm Password</Label>
                                <Input secureTextEntry={true} style={styles.inputColor} />
                            </Item>

                            <Item picker style={styles.fieldStyling}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined, color: "#FFFFFF", fontSize: 12 }}
                                    placeholder="Select your SIM"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="- Select -" value="key0" />
                                    <Picker.Item label="I'm an employer looking to hire" value="key1" />
                                    <Picker.Item label="I'm a candidate looking for a job" value="key2" />
                                </Picker>
                            </Item>

                            <ListItem style={styles.fieldStyling} noBorder>
                                <CheckBox checked={true} />
                                    <Body>
                                    <Text style={styles.labelStyling}>I agree the term of use</Text>
                                    </Body>
                            </ListItem>

              
              
              <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
  
                <Button style={{ width: 100, backgroundColor: "#2469e6", height: 35, marginLeft: "5%"}}><Text>Register</Text></Button>
            
              </View>

  
              <View style={{alignSelf: 'center', marginTop: "18%"}}>
                <Text style={{color: "#FFFFFF", fontSize: 15}}>Already a member? <Text style={{textDecorationLine: "underline", color: "#FFFFFF", fontSize: 15}}>Login</Text></Text>
              </View>
            </Form>
                    </Container>
                </SafeAreaView>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    container: {
        flex: 1,
        marginHorizontal: 15
    },
    logoStyling: {
        width: 150, 
        height: 150, 
        alignSelf: "center",
        marginTop: "-5%"
    },
    fieldStyling : {
        marginLeft: "5%",
        marginRight: "5%"
    },
    inputColor: {
        color : "#FFFFFF"
    },
    labelStyling : {
        color: "#FFFFFF", 
        fontSize: 14
    }
});