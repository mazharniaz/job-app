
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default function OrderProcessing() {
    return(
        <Card style={styles.card}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={[styles.thumbTextStyle, {paddingBottom: '4%'}]}>
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={styles.name}>Order No. 1254634</Text>
                                        <Text style={{fontSize: 14, marginTop: '1%'}}>4-6-2020</Text>
                                    </View>
                                </View>
                            </CardItem>
                            {/* <View style={styles.button}>
                                    <TouchableOpacity style={styles.signIn}>
                                        <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View> */}
                        </Card>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#9c71b3'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 26
    },
    text_tagLine: {
        color: '#ffffff',
        fontSize: 16
    },
    cardItemStyle: {
        borderRadius: 20
      },
      card: {
        height: 100,
        borderRadius: 10
      },
      heading: {
          color: '#9c71b3',
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: '2%',
          marginBottom: '1%'
      },
      thumbTextStyle: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly'
      },
      button: {
        alignItems: 'center',
        marginTop: '-3%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    signIn: {
        width: "100%",
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    textSign: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    name: {
        marginTop: '1%', 
        marginLeft: '5%'
    },
    tag: {
        marginTop: '1%', 
        marginLeft: '5%', 
        fontSize: 10, 
        color: 'grey'
    }
});
