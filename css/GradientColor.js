import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Container, Button, View, Text, Content, Form, Item, Input, Label } from 'native-base';

export default class GradientColor extends Component {
    render(children) {
        return (
            <LinearGradient colors={['#f953c6', '#3b5998']} style={styles.gradient}>
                <SafeAreaView style={styles.container}>
                <Container style={{backgroundColor: "transparent"}}>
          
          <Text style={{alignSelf: "center", marginTop: 150, fontSize: 30}}>Hello There!</Text>
            <Form>
              <Item floatingLabel style={{ marginLeft: 20, marginRight: 20 }}>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel style={{ marginLeft: 20, marginRight: 20 }}>
                <Label>Password</Label>
                <Input />
              </Item> 
              
              <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-between"}}>
  
                <Button primary small style={{ width: 80, marginTop: 30, marginLeft: 20}}><Text> Login </Text></Button>
                
                
                <Text style={{textDecorationLine: "underline", marginTop: 30, marginRight: 20}}>Need help?</Text>
              </View>
  
              <View style={{alignSelf: 'center', marginTop: 150}}>
                <Text>Not a member? <Text style={{textDecorationLine: "underline"}}>Register</Text></Text>
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
    }
});


