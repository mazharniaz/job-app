import React from 'react';
import { 
    View, 
    StyleSheet,
    Image
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default function SettingScreen({navigation}) {
    return(
        <Container>
        <Content padder>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Card style={styles.card}>
              <CardItem header button style={styles.cardItemStyle} onPress={() => {navigation.navigate('EditProfile')}}>
                <Image
                  source={require('../../assets/icon-edit.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>Edit Profile</Text>
              </CardItem>
            </Card>
            <Card style={[styles.card, {marginLeft: '3%'}]}>
              <CardItem header button style={styles.cardItemStyle} onPress={() => {navigation.navigate('ChangePassword')}}>
              <Image
                  source={require('../../assets/icon-locker.png')}
                  style={styles.icon}
                />
                <Text style={styles.textStyle}>Change Password</Text>
              </CardItem>
            </Card>
          </View>
        </Content>
      </Container>
    )
} 

const styles = StyleSheet.create({
    cardItemStyle: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      height: 150,
      width: 180
    },
    icon: {
      height: 100,
      width: 100
    },
    textStyle: {
      color: '#0066ff'
    }
  });