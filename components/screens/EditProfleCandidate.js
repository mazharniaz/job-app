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
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import base64 from 'react-native-base64';
import DatePicker from 'react-native-datepicker';

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

            name: '',
            introduction: '',
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
            Instagram: '',
            image_name: '',
            image_code: ''
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

      editProfile_API() {
        // let axiosConfig = {
        //   headers: {
        //     'Content-Type': 'application/json;charset=UTF-8',
        //     "Access-Control-Allow-Origin": "*",
        //   }
        // };
        console.log(this.state.user_id, '----> user ID')
        console.log(
          this.state.name,
          this.state.introduction,
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
          this.state.Facebook,
          this.state.Twitter,
          this.state.LinkedIn,
          this.state.Instagram,
          this.state.image_name,
          this.state.image_code, '----> Candidate Profile Data')
        
         let formdata = new FormData();

        formdata.append('name', this.state.name)
        formdata.append('introduction', this.state.introduction)
        formdata.append('email', this.state.email)
        formdata.append('dob', this.state.dob)
        formdata.append('phone', this.state.phone)
        formdata.append('resume', this.state.resume)
        formdata.append('addrs', this.state.addrs)
        formdata.append('flat_number', this.state.flat_number)
        formdata.append('street_name', this.state.street_name)
        formdata.append('city', this.state.city)
        formdata.append('county', this.state.county)
        formdata.append('postcode', this.state.postcode)
        formdata.append('national_incurance_num', this.state.national_incurance_num)
        formdata.append('sort_code', this.state.sort_code)
        formdata.append('account_no', this.state.account_no)
        formdata.append('emergency_person_name', this.state.emergency_person_name)
        formdata.append('emergency_person_no', this.state.emergency_person_no)
        formdata.append('emergency_person_relation', this.state.emergency_person_relation)
        formdata.append('Facebook', this.state.Facebook)
        formdata.append('Twitter', this.state.Twitter)
        formdata.append('LinkedIn', this.state.LinkedIn)
        formdata.append('Instagram', this.state.Instagram)
        formdata.append('image_name', this.state.image_name)
        formdata.append('image_code', this.state.image_code)

        axios.post(`http://myquickshift.com/app_api/update_profile_api/${this.state.user_id}`, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
                body: formdata
        })
        
        //     name: this.state.name,
        //     introduction: this.state.description,
        //     email: this.state.email,
        //     dob: this.state.dob,
        //     resume: this.state.resume,
        //     phone: this.state.phone,
        //     addrs: this.state.addrs,
        //     flat_number: this.state.flat_number,
        //     street_name: this.state.street_name,
        //     city: this.state.city,
        //     county: this.state.county,
        //     postcode: this.state.postcode,
        //     national_incurance_num: this.state.national_incurance_num,
        //     sort_code: this.state.sort_code,
        //     account_no: this.state.account_no,
        //     emergency_person_name: this.state.emergency_person_name,
        //     emergency_person_no: this.state.emergency_person_no,
        //     emergency_person_relation: this.state.emergency_person_relation,
        //     Facebook: this.state.Facebook,
        //     Twitter: this.state.Twitter,
        //     LinkedIn: this.state.LinkedIn,
        //     Instagram: this.state.Instagram,
        //     resume: this.state.resume,
        //     image_name: this.state.image_name,
        //     image_code: this.state.image_code
        // }), axiosConfig)
          .then((response) => {
            console.log(response.data, "------> console log Candidate Profile")
            this.setState({
                isLoading: false,
                data: response.data,
           })
           alert('Profile updated successfully!')
        }, (error) => {
          console.log(error,"------> console log Active Candidate Profile error");
        })
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
                image_code: images.data,
                image_name: name
                //filePath: images.data,
                //fileUri: Images,
                //image_code: binaryCode
              });
            console.log(this.state.image_name, '---> FILE URI')
          });
      }

    cvPicker = async () => {
      
      
      
      let idCardBase64 = '';
        try {
            const resume = await DocumentPicker.pick({
              type: [DocumentPicker.types.pdf],
              
            });
            console.log(
                resume,  
                resume.type, // mime type
                resume.name,
                resume.size,

            );

            let res = {
              uri: resume.uri,
              name: resume.name,
              type: resume.type
            }

            this.setState({resume: res})

            //console.log(res, '---> OBHBDSHBJSBD')

                

                // const fileToBase64 = (filename, filepath) => {
                //   return new Promise(resolve => {
                //     var file = new File([filename], filepath);
                //     console.log(file, '---> 1 FILE')

                //     var reader = new FileReader();
                //     console.log(reader, '---> 2 READER')
                    
                //     // Read file content on file loaded event
                //     reader.onload = function(event) {
                //       console.log(event, '----> 3 Event')
                      
                //       resolve(event.target.result);
                //     };
                    
                //     // Convert data to base64 
                //     reader.readAsArrayBuffer(file);
                //     console.log(file, '---> 4 Final')
                //   });
                // };

                // fileToBase64(resume.name, resume.uri).then(result => {
                //   console.log(result, '----> PDF TESTER');
                // });

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
                    uri: `data:image/gif;base64,${this.state.image_code}`
                  }}
                  size={100}
                  style={{marginBottom: '1%'}}
                />
                <Button small style={{marginLeft: '4%', width: 120, marginTop: '1%', marginBottom: '1%'}} onPress={() => this.ImagePicker()}>
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
                <DatePicker
                  style={{width: 200}}
                  date={this.state.dob} //initial date from state
                  mode="date" //The enum of date, datetime and time
                  //placeholder="select date"
                  format="DD-MM-YYYY"
                  //minDate="01-01-2016"
                  //maxDate="01-01-2019"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    // dateIcon: {
                    //   position: 'absolute',
                    //   left: 0,
                    //   top: 4,
                    //   marginLeft: '5%',
                    //   display: 'none'
                    // },
                    dateInput: {
                      marginLeft: '-32%',
                      borderColor: '#ffffff',
                      alignItems: 'flex-start',
                      marginTop: '3%'
                    }
                  }}
                  onDateChange={(date) => {this.setState({dob: date})}}
                />
              </Item>
              <Item stackedLabel>
                <Label style={styles.labelStyle}>Phone no. *</Label>
                <Input style={styles.inputStyle} keyboardType='number-pad' onChangeText={text => this.setState({ phone: text })} placeholder="" />
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
                <Input style={styles.inputStyle} keyboardType='number-pad' onChangeText={text => this.setState({ sort_code: text })} placeholder="" />
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
                <Input style={styles.inputStyle} keyboardType='number-pad' onChangeText={text => this.setState({ emergency_person_no: text })} placeholder="" />
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
                            this.state.introduction,
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
                            this.state.Facebook,
                            this.state.Twitter,
                            this.state.LinkedIn,
                            this.state.Instagram,
                            this.state.image_name,
                            this.state.image_code
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


// chooseProfile = async () => {
  //     // let options = {
  //     //   title: 'Choose Image',
  //     //   // customButtons: [
  //     //   //   { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
  //     //   // ],
  //     //   storageOptions: {
  //     //     skipBackup: true,
  //     //     path: 'images',
  //     //   },
  //     // };
  //     try {
  //         const res = await DocumentPicker.pick({
  //           type: [DocumentPicker.types.images],
  //         });
  //         console.log(
  //           res,  
  //           res.type, // mime type
  //           res.name,
  //           res.size
  //         );
  //         this.setState({image: res})
  //       } catch (err) {
  //         if (DocumentPicker.isCancel(err)) {
  //           // User cancelled the picker, exit any dialogs or menus and move on
  //         } else {
  //           throw err;
  //         }
  //       }
  // }