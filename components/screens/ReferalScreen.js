import React from 'react';
import { 
    View, 
    Text, 
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Textarea } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


export default function ReferalScreen({navigation}) {
    return(
        <Container>
        <Content style={styles.content}>
          <Form style={styles.formStyle}>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Your friend email</Label>
              <Input />
            </Item>
            <Item stackedLabel style={styles.ItemStyle}>
              <Label style={styles.labelStyle}>Message</Label>
              <Textarea rowSpan={5} style={{width: '100%'}} />
            </Item>
            <View style={styles.button}>
                    <TouchableOpacity style={styles.updateBtn}>
                        <LinearGradient style={styles.updateBtn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Send</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>
          </Form>
        </Content>
      </Container>
    )
} 

const styles = StyleSheet.create({
    content: {
        marginTop: '5%'
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
    ItemStyle: {
        marginBottom: '2%'
    },
    formStyle: {
        marginRight: '5%'
    },
    labelStyle: {
        fontSize: 16,
        color: '#9c71b3'
    },
});