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

export default function RequestStaffScreen({navigation}) {

    const [selectedValue, setSelectedValue] = React.useState("");
    const [isSelected, setSelection] = React.useState(false);
    
    return(
        <Container style={styles.container}>
        <Content style={styles.content}>
          <Form style={styles.formStyle}>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Job Title *</Label>
              <Input style={styles.inputStyle} placeholder="Enter a short title for your job" />
            </Item>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Job Description</Label>
              <Textarea rowSpan={5} style={{width: '100%'}} />
            </Item>
            <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
              <Label style={[styles.labelStyle, {marginLeft: '4%'}]}>Cover Image</Label>
              
              <Button small style={{marginLeft: '4%', width: 80, marginTop: '1%', marginBottom: '1%'}}>
                <Text style={{color: '#FFFFFF', marginLeft: '20%'}}>Browse</Text>
              </Button>
              
              <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>(Recommended size 1400×600px)</Text>
                
              </View>
            
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Job Category</Label>
                <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: '100%', color: '#05375a'}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Hospitality" value="key0" />
                        <Picker.Item label="Catering" value="key1" />
                </Picker>
            </Item>

            <View>
            <Label style={[styles.labelStyle, {marginLeft: '4%', marginTop: '3%'}]}>Job Location</Label>
            <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={[styles.label, {margin: 8}]}>The same as company location</Text>
                </View>

            <Item>
                <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: '100%', color: '#05375a'}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="London" value="key2" />
                        <Picker.Item label="UK" value="key3" />
                </Picker>
                
                </Item>
                <Label style={[styles.labelStyle, {marginLeft: '4%'}]}>+ Add new address</Label>
                </View>

            <Item stackedLabel>
              <Label style={styles.labelStyle}>Address</Label>
              <Input style={styles.inputStyle} />
            </Item>
            <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>Enter Street, Region, Locality, Country. e.g. 1600 Chestnut Street, Philadelphia, PA, USA</Text>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Postal Code</Label>
              <Input style={styles.inputStyle} />
            </Item>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Salary Offer</Label>
              <Input style={styles.inputStyle} />
            </Item>

            <Item stackedLabel>
              <Label style={styles.labelStyle}>Closing Date</Label>
              <Input style={styles.inputStyle} placeholder="Set Closing Date" />
            </Item>
            <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>Set a date or leave blank to automatically use the expire date</Text>

            <Item stackedLabel>
              <Label style={styles.labelStyle}>Notification Email</Label>
              <Input style={styles.inputStyle} />
            </Item>
            <View style={styles.button}>
                    <TouchableOpacity style={styles.updateBtn} onPress={{}}>
                        <LinearGradient style={styles.updateBtn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                            <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Post a job</Text>
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