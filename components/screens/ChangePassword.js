import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
    CheckBox,
} from 'react-native';
import { Container, Content, Form, Item, Input, Button, Label, Body, Icon, ListItem, Picker, Footer, Textarea } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default function ChangePassword({navigation}) {
    return(
        <Container style={styles.container}>
            <Content style={styles.content}>
                <Form style={styles.formStyle}>
                    <Item stackedLabel>
                        <Label style={styles.labelStyle}>Current Password *</Label>
                        <Input style={styles.inputStyle} placeholder="" />
                    </Item>
                    <Item stackedLabel>
                        <Label style={styles.labelStyle}>New Password *</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} />
                    </Item>
                    <Item stackedLabel>
                        <Label style={styles.labelStyle}>Confirm New Password *</Label>
                        <Input style={styles.inputStyle} secureTextEntry={true} />
                    </Item>

                    <View style={[styles.button, {marginBottom: '5%'}]}>
                        <TouchableOpacity style={styles.updateBtn}>
                            <LinearGradient style={styles.updateBtn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
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
                    <Text style={{fontSize: 22, color: '#9c71b3', marginLeft: '5%', marginTop: '5%'}}>
                        Delete Account
                    </Text>
                    <Text style={{fontSize: 14, marginLeft: '5%'}}>
                        Warning! Can not restore operation.
                    </Text>
                    <View style={[styles.button, {marginRight: '5%', marginTop: '4%'}]}>
                        <TouchableOpacity style={styles.updateBtn}>
                            <LinearGradient style={styles.updateBtn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Delete Account</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Content>
        </Container>
    )
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
      color: '#9c71b3'
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
      backgroundColor: "#9c71b3",
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