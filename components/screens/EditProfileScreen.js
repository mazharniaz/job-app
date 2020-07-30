import React, { Component } from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';

export default class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: '',
      data: {},

      displayImage: '',
      image_name: '',

      // filepath: {
      //   data: '',
      //   uri: '',
      //   file: ''
      // },

      // fileUri: '',

      user_id: '',

      employer_name: '',
      description: '',
      email: '',
      phone: '',
      addrs: '',
      street_name: '',
      city: '',
      county: '',
      Facebook: '',
      Twitter: '',
      LinkedIn: '',
      Instagram: '',
      //image: ''
    }
  }

  componentDidMount() {
    this._retrieveUser()
}

_retrieveUser = async (user_id) => {
    
    try {
      
      const user = await AsyncStorage.getItem('user');
      const parse = JSON.parse(user);

      this.setState({ 
          user_id: parse.user_id
      })
      console.log(parse.user_id, '---> USER ID ARAHI HAI')

    } catch (error) {
      alert(error)
    }
  };

  editCompanyProfile() {
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };

    console.log(this.state.employer_name,
      this.state.description,
      this.state.email,
      this.state.phone,
      this.state.addrs,
      this.state.street_name,
      this.state.city,
      this.state.county,
      this.state.Facebook,
      this.state.Twitter,
      this.state.LinkedIn,
      this.state.Instagram,
      this.state.displayImage,
      this.state.image_name, '--> EMPLOYER')

    // let formdata = new FormData();

    // formdata.append('name', this.state.employer_name)
    // formdata.append('introduction', this.state.description)
    // formdata.append('email', this.state.email)
    // formdata.append('phone', this.state.phone)
    // formdata.append('addrs', this.state.addrs)
    // formdata.append('street_name', this.state.street_name)
    // formdata.append('city', this.state.city)
    // formdata.append('county', this.state.county)
    // formdata.append('Facebook', this.state.Facebook)
    // formdata.append('Twitter', this.state.Twitter)
    // formdata.append('LinkedIn', this.state.LinkedIn)
    // formdata.append('Instagram', this.state.Instagram)
    // formdata.append('image_code', this.state.displayImage)
    // formdata.append('image_name', this.state.image_name)

    console.log(this.state.user_id, 'YAHAN BHI USER ID ARAHI HAI')
    axios.post(`http://myquickshift.com/app_api/update_client_profile_api/${this.state.user_id}`, JSON.stringify({
      name: this.state.employer_name,
      introduction: this.state.description,
      email: this.state.email,
      phone: this.state.phone,
      addrs: this.state.addrs,
      street_name: this.state.street_name,
      city: this.state.city,
      county: this.state.county,
      Facebook: this.state.Facebook,
      Twitter: this.state.Twitter,
      LinkedIn: this.state.LinkedIn,
      Instagram: this.state.Instagram,
      displayImage: this.state.displayImage,
      image_name: this.state.image_name
    }), axiosConfig)
        
        // {
        //     // headers: {
        //     //     'Content-Type': 'multipart/form-data',
        //     // },
        //     body: formdata
        // })
          .then((response) => {
            console.log(response.data, "------> console log Edit Company Profile")
            this.setState({
                isLoading: false,
                data: response.data,
           })
           alert('Data updated successfully!')
        }, (error) => {
          console.log(error,"------> console log Edit Company Profile error");
        });
  }

  ImagePicker = (fileUri) => {
    ImagePicker.openPicker({
        //multiple: true,
        includeBase64: true
      }).then(images => {
        console.log(images);

        console.log(images.data, '---> BINARY DATA')

        let Images = ''

        let file = String(images.path).split("/")
        let name = file[file.length-1]

        console.log(name,"///////2323223")
        //Images.push(name)

        this.setState({
            displayImage: images.data,
            image_name: name
            //filePath: images.data,
            //fileUri: Images,
            //image_code: binaryCode
          });
        console.log(this.state.image_name, '---> FILE URI')
      });
}

  render(navigation) {
    return(
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Form style={styles.formStyle}>

              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: '3%'}}>
                <Avatar.Image 
                  source={{
                    uri: `data:image/gif;base64,${this.state.displayImage}`
                  }}
                  size={100}
                  style={{marginBottom: '1%'}}
                />
                <Button small onPress={() => this.ImagePicker()} style={{marginLeft: '4%', width: 120, marginTop: '1%', marginBottom: '1%'}}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold', marginLeft: '11%'}}>Change Profile</Text>
                </Button>
              
                <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%', marginBottom: '2%'}}>(Recommended size 160×160px)</Text>
              </View>

              <Item stackedLabel>
                <Label style={styles.labelStyle}>Full Name *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ employer_name: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>About Yourself</Label>
                <Textarea rowSpan={5} onChangeText={text => this.setState({ description: text })} style={{width: '100%'}} />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Email *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ email: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Address *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ addrs: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Street name *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ street_name: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Town/City *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ city: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Country *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ county: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Phone no. *</Label>
                <Input style={styles.inputStyle} keyboardType='number-pad' onChangeText={text => this.setState({ phone: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Facebook</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ Facebook: text })} placeholder="http://" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Twitter</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ Twitter: text })} placeholder="http://" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>LinkedIn</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ LinkedIn: text })} placeholder="http://" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Instagram</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ Instagram: text })} placeholder="http://" />
              </Item>
              <View style={styles.button}>
                    <TouchableOpacity style={styles.updateBtn} onPress={() => this.editCompanyProfile(
                      this.state.employer_name,
                      this.state.description,
                      this.state.email,
                      this.state.phone,
                      this.state.addrs,
                      this.state.street_name,
                      this.state.city,
                      this.state.county,
                      this.state.Facebook,
                      this.state.Twitter,
                      this.state.LinkedIn,
                      this.state.Instagram,
                      this.state.displayImage,
                      this.state.image_name
                    )}>
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