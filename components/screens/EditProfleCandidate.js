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
import ImagePicker from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default class EditProfileCandidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            filepath: {
                data: '',
                uri: ''
            },
            image: '',
            fileUri: '',

            type: '',
            name: '',
            size: '',

            user_id: '',

            candidate_name: '',
            description: '',
            email: '',
            dob: '',
            resume: '',
            phone: '',
            addrs: '',
            flat_number: '',
            street_name: '',
            city: '',
            county: '',
            postcode: '',
            national_incurance_num: '',
            sort_code: '',
            account_no: '',
            emergency_person_name: '',
            emergency_person_no: '',
            emergency_person_relation: '',
            Facebook: '',
            Twitter: '',
            LinkedIn: '',
            Instagram: ''
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
          //alert(JSON.stringify(this.state.data));
          //console.log(parse1.id, parse1.user_id_2, parse2.user_id, '---> candidate job')

        } catch (error) {
          alert(error)
        }
      };

      editProfile_API(
        candidate_name,
        email,
        addrs,
        flat_number, 
        street_name,
        city, 
        county,
        postcode,  
        dob,
        phone, 
        resume,
        national_incurance_num, 
        sort_code, 
        account_no,
        emergency_person_name,
        emergency_person_no,
        emergency_person_relation,
        description, 
        Facebook,
        Twitter,
        LinkedIn,
        Instagram,
        image) {
        let axiosConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Access-Control-Allow-Origin": "*",
            }
        };
        console.log(this.state.user_id, '----> user ID')
        console.log(candidate_name,
            description, 
            email, 
            dob, 
            resume, 
            phone, 
            addrs, 
            flat_number, 
            street_name, 
            city, 
            county, 
            postcode, 
            national_incurance_num, 
            sort_code, 
            account_no,
            emergency_person_name,
            emergency_person_no,
            emergency_person_relation,
            Facebook,
            Twitter,
            LinkedIn,
            Instagram,
            image, '----> Candidate Profile Data')
        
        let formdata = new FormData();

        formdata.append('name', candidate_name)
        formdata.append('introduction', description)
        formdata.append('email', email)
        formdata.append('dob', dob)
        formdata.append('phone', phone)
        formdata.append('resume', resume)
        formdata.append('addrs', addrs)
        formdata.append('flat_number', flat_number)
        formdata.append('street_name', street_name)
        formdata.append('city', city)
        formdata.append('county', county)
        formdata.append('postcode', postcode)
        formdata.append('national_incurance_num', national_incurance_num)
        formdata.append('sort_code', sort_code)
        formdata.append('account_no', account_no)
        formdata.append('emergency_person_name', emergency_person_name)
        formdata.append('emergency_person_no', emergency_person_no)
        formdata.append('emergency_person_relation', emergency_person_relation)
        formdata.append('Facebook', Facebook)
        formdata.append('Twitter', Twitter)
        formdata.append('LinkedIn', LinkedIn)
        formdata.append('Instagram', Instagram)
        formdata.append('image', image)

        axios.post(`http://production.myquickshift.com/app_api/update_profile_api/${this.state.user_id}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata
        })
          .then((response) => {
            console.log(response.data.image_path, "------> console log Candidate Profile")
            this.setState({
                isLoading: false,
                data: response.data,
           })
           alert('Data uploaded')
        }, (error) => {
          console.log(error,"------> console log Active Candidate Profile error");
        });
      } 

    cvPicker = async () => {
        try {
            const resume = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf],
            });
            console.log(
                resume,  
                resume.type, // mime type
                resume.name,
                resume.size
            );
                this.setState({resume: resume})
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
    }

    chooseProfile = async () => {
        // let options = {
        //   title: 'Choose Image',
        //   // customButtons: [
        //   //   { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
        //   // ],
        //   storageOptions: {
        //     skipBackup: true,
        //     path: 'images',
        //   },
        // };
        try {
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
            });
            console.log(
              res,  
              res.type, // mime type
              res.name,
              res.size
            );
            this.setState({image: res})
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
          }
    }

    render(navigation) {
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
                <Button small style={{marginLeft: '4%', width: 120, marginTop: '1%', marginBottom: '1%'}} onPress={() => this.chooseProfile()}>
                  <Text style={{color: '#FFFFFF', fontWeight: 'bold', marginLeft: '11%'}}>Change Profile</Text>
                </Button>
              
                <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%', marginBottom: '2%'}}>(Recommended size 160×160px)</Text>
              </View>

              <Item stackedLabel>
                <Label style={styles.labelStyle}>Full name *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ name: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>About yourself</Label>
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
                <Label style={styles.labelStyle}>House/Flat no. *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ flat_number: text })} placeholder="" />
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
                <Label style={styles.labelStyle}>Postcode *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ postcode: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Birthday</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ dob: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Phone no. *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ phone: text })} placeholder="" />
              </Item>
              <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start', marginTop: '1%'}}>
                <Label style={[styles.labelStyle, {marginLeft: '4%'}]}>Attach your CV</Label>
                
                <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Button onPress={() => this.cvPicker()} small style={{marginLeft: '4%', width: 80, marginTop: '1%', marginBottom: '1%'}}>
                    <Text style={{color: '#FFFFFF', marginLeft: '20%'}}>Choose</Text>
                  </Button>

                  <Label style={{fontSize: 12, color: 'grey', marginLeft: '1%', marginTop: '2%'}}></Label>
                </View>

                  <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>(Recommended size 2M)</Text>
                
              </View>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>National insurance no. *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ national_incurance_num: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Sort code *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ sort_code: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Account no. *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ account_no: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Emergency person's name *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ emergency_person_name: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Emergency person's no. *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ emergency_person_no: text })} placeholder="" />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Emergency person's relation *</Label>
                <Input style={styles.inputStyle} onChangeText={text => this.setState({ emergency_person_relation: text })} placeholder="" />
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
                    <TouchableOpacity 
                        style={styles.updateBtn}
                        onPress={() => this.editProfile_API(
                            this.state.name,
                            this.state.email,
                            this.state.addrs,
                            this.state.flat_number,
                            this.state.street_name,
                            this.state.city,
                            this.state.county,
                            this.state.postcode,
                            this.state.dob,
                            this.state.phone,
                            this.state.resume,
                            this.state.national_incurance_num,
                            this.state.sort_code,
                            this.state.account_no,
                            this.state.emergency_person_name,
                            this.state.emergency_person_no,
                            this.state.emergency_person_relation,
                            this.state.description,
                            this.state.Facebook,
                            this.state.Twitter,
                            this.state.LinkedIn,
                            this.state.Instagram,
                            this.state.image
                        )}
                    
                    >
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