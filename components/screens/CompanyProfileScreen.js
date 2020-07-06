import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Footer } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default function CompanyProfileScreen({navigation}) {
    return(
        <Container style={styles.container}>
        <Content style={styles.content}>
          <Form style={styles.formStyle}>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Full Address</Label>
              <Input style={styles.inputStyle} placeholder="Address Line" />
            </Item>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Website</Label>
              <Input style={styles.inputStyle} placeholder="http://" />
            </Item>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Facebook</Label>
              <Input style={styles.inputStyle} placeholder="http://" />
            </Item>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Twitter</Label>
              <Input style={styles.inputStyle} placeholder="http://" />
            </Item>
            <View style={styles.button}>
                    <TouchableOpacity style={styles.updateBtn} onPress={{}}>
                        <LinearGradient style={styles.updateBtn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Update</Text>
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
      marginLeft:'5%'
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
    }
});