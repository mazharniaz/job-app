import React from 'react';
import { 
    View, 
    Button,
    Image,
    StyleSheet
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Thumbnail, Left, Right } from 'native-base';

export default function NotificationScreen({navigation}) {
    return(
        <Container>
        <Content>
          <Card style={styles.cardStyle}>
            <CardItem>
            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg'}} />
              
                <Left style={{flex: 1, justifyContent: 'space-between'}}>
                <Text style={styles.textStyle}>
                   Sofia sent you a text message.
                </Text>
              
                <Text style={styles.timeStyle}>
                   07:30 pm
                </Text>
                </Left>
            </CardItem>
          </Card>
          <Card style={styles.cardStyle}>
            <CardItem>
            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg'}} />
              
                <Left style={{flex: 1, justifyContent: 'space-between'}}>
                <Text style={styles.textStyle}>
                   Sofia sent you a text message.
                </Text>
              
                <Text style={styles.timeStyle}>
                   07:30 pm
                </Text>
                </Left>
            </CardItem>
          </Card>
          <Card style={styles.cardStyle}>
            <CardItem>
            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg'}} />
              
                <Left style={{flex: 1, justifyContent: 'space-between'}}>
                <Text style={styles.textStyle}>
                   Sofia sent you a text message.
                </Text>
              
                <Text style={styles.timeStyle}>
                   07:30 pm
                </Text>
                </Left>
            </CardItem>
          </Card>
          <Card style={styles.cardStyle}>
            <CardItem>
            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg'}} />
              
                <Left style={{flex: 1, justifyContent: 'space-between'}}>
                <Text style={styles.textStyle}>
                   Sofia sent you a text message.
                </Text>
              
                <Text style={styles.timeStyle}>
                   07:30 pm
                </Text>
                </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
} 

const styles = StyleSheet.create({
    cardStyle: {
        borderRadius: 10,
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '1%'
    }, 
    textStyle: {
        fontSize: 12,
        marginLeft: '3%'
    },
    timeStyle: {
        fontSize: 10,
    }
});