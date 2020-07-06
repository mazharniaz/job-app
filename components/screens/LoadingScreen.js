import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaView, View, StyleSheet, Image } from "react-native"
import { Container } from 'native-base'

export default class LoadingScreen extends Component {
    render() {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#abec9e', '#0066ff']} style={styles.gradient}>
                <SafeAreaView style={styles.container}>
                    <Container style={{backgroundColor: "transparent"}}>

                    
                    <View>
                    <Image 
                        source={require('../components/logo-mqs.png')} 
                        style={styles.logoStyling} 
                    /></View>
                    


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
        width: 250, 
        height: 250, 
        alignSelf: "center",
        margin: "50%"
    },  
});