import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView, StyleSheet, Image } from 'react-native'
import { Container, Button, View, Text, Content, Form, Item, Input, Label } from 'native-base';

export default class Login extends Component {
    render() {

        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#abec9e', '#0066ff']} style={styles.gradient}>
                <SafeAreaView style={styles.container}>
                <Container style={{backgroundColor: "transparent"}}>
          
                <Image 
                  source={require('../../assets/logo-mqs.png')} 
                  style={styles.logoStyling} 
                />          


          <Text style={{alignSelf: "center", color: "#FFFFFF", marginTop: "-20%", fontSize: 40}}>Hello There!</Text>
            <Form>
              <Item stackedLabel style={{ marginLeft: "5%", marginRight: "5%" }}>
                <Label style={styles.labelStyling}>Email</Label>
                <Input style={styles.inputColor} />
              </Item>
              <Item stackedLabel style={{ marginLeft: "5%", marginRight: "5%" }}>
                <Label style={styles.labelStyling}>Password</Label>
                <Input style={styles.inputColor} secureTextEntry={true} />
              </Item> 
              
              <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
  
                <Button style={{ width: 80, height: 35, marginTop: "6%", marginLeft: "5%", backgroundColor: "#2469e6"}}><Text> Login </Text></Button>
                
              </View>

              <Text style={{textDecorationLine: "underline", fontSize: 15, color: "#FFFFFF", marginTop: "6%", marginLeft: "72%"}}>Need help?</Text>
  
              <View style={{alignSelf: 'center', marginTop: "35%"}}>
                <Text style={{color: "#FFFFFF", fontSize: 15}}>Not a member? <Text style={{textDecorationLine: "underline", color: "#FFFFFF", fontSize: 15}}>Register</Text></Text>
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
    inputColor: {
      color : "#FFFFFF"
    },
    labelStyling : {
      color: "#FFFFFF", 
      fontSize: 14
    },
    logoStyling: {
      width: 250, 
      height: 250, 
      alignSelf: "center",
      
    }
});


