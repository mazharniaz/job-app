import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
    CheckBox,
} from 'react-native';
import { Avatar } from 'react-native-paper'
import { Container, Content, Form, Item, Input, Button, Label, Body, Icon, ListItem, Picker, Footer, Textarea } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default function EditProfileScreen({navigation}) {
    return(
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Form style={styles.formStyle}>

              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '3%'}}>
                <Avatar.Image 
                  source={{
                    uri: 'https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg'
                  }}
                  size={100}
                  style={{marginBottom: '1%'}}
                />
                <Button small style={{marginLeft: '4%', width: 120, marginTop: '1%', marginBottom: '1%'}}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold', marginLeft: '11%'}}>Change Profile</Text>
                </Button>
              
                <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%', marginBottom: '2%'}}>(Recommended size 160×160px)</Text>
              </View>

              <Item stackedLabel>
                <Label style={styles.labelStyle}>Full Name *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>About Yourself</Label>
                <Textarea rowSpan={5} style={{width: '100%'}} />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Email *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Address *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>House/Flat no. *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Street name *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Town/City *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Country *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Postcode *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Birthday</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Phone no. *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Account no. *</Label>
                <Input style={styles.inputStyle} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Facebook</Label>
                <Input style={styles.inputStyle} placeholder="http://" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Twitter</Label>
                <Input style={styles.inputStyle} placeholder="http://" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>LinkedIn</Label>
                <Input style={styles.inputStyle} placeholder="http://" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Instagram</Label>
                <Input style={styles.inputStyle} placeholder="http://" />
              </Item>
              <View style={styles.button}>
                    <TouchableOpacity style={styles.updateBtn}>
                        <LinearGradient style={styles.updateBtn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Save My Profile</Text>
                        </LinearGradient>
                    </TouchableOpacity>
            </View>
            

          </Form>
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