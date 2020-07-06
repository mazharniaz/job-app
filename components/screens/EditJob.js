import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity, 
    CheckBox,
} from 'react-native';
import { Container, Content, Form, Item, Input, Button, Label, Body, Icon, ListItem, Picker, Footer, Textarea } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ActivityIndicator } from 'react-native-paper';

export default class EditJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filepath: {
                data: '',
                uri: ''
              },
              image: '',
              fileUri: '',
        
              isLoading: true,
              data: {},
              category: {},
        
              id: '',
              job_title: '',
              job_description: '',
              job_category: '',
              job_location: '',
              Address: '', 
              prezi_quotes: '', 
              postal_date: '', 
              salary_offer: '', 
              closing_date: '',
              notification_email: '',
        }
    }

    clearText() {
        this.setState({Address : ''})
      }
    
    
      addressHandleChange(text){
          this.setState({ Address: text})
      }

      chooseImage = () => {
        let options = {
          title: 'Select Image',
          // customButtons: [
          //   { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
          // ],
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
    
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            // alert(JSON.stringify(response));s
            console.log('response', JSON.stringify(response));
            this.setState({
              filePath: response,
              image: response.data,
              fileUri: response.uri
            });
          }
        });
      }

    componentDidMount() {
            axios.get('http://production.myquickshift.com/app_api/catagory_job_api')
            .then((response) => {
            console.log(response.data.jobs_search_list, "------> Job Category console")
            //resp = response;
            this.setState({
                isLoading: false,
                category: response.data.jobs_search_list
            })
        }, (error) => {
                console.log(error,"------> Job Category API Error");
        });

        this._retrieveJobData();
    }

    editAJob(id, job_title, job_description, job_category, job_location, Address, prezi_quotes, postal_date, salary_offer, closing_date, notification_email, image) {
        let resp;
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };
        //console.log(this.state,"-----> Post a job state console")
        //console.log(job_title, job_description, job_category, job_location, Address, prezi_quotes, postal_date, salary_offer, closing_date, notification_email, image, "------->>>")
        axios.post('http://production.myquickshift.com/app_api/register_api', JSON.stringify({
          id: id,
          job_title: job_title,
          job_description: job_description,
          job_category: job_category,
          job_location: null,
          Address: Address, 
          prezi_quotes: prezi_quotes, 
          postal_date: postal_date, 
          salary_offer: salary_offer, 
          closing_date: closing_date,
          notification_email: notification_email, 
          image: image
        }),axiosConfig)
          .then((response) => {
            console.log(response.data, "-----> Post a job response checker")
            resp = response;
            this.setState({
                isLoading: true,
                data: response
           })
        }, (error) => {
          console.log(error,"-----> Post a job error checker");
        });
  }

    _retrieveJobData = async (id) => {
        
        try {
          const job = await AsyncStorage.getItem('job');
          const parse = JSON.parse(job);
          this.setState({ id: parse.id})
          //alert(JSON.stringify(this.state.data));
          console.log(parse.id, '---> edit user')

          axios.get(`http://production.myquickshift.com/app_api/JobDetail_api/${this.state.id}`)
          .then((response) => {
            console.log(response.data.job_details[0].job_title, "------> console log Edit Jobs")
            this.setState({
                isLoading: false,
                data: response.data,
                job_title: response.data.job_details[0].job_title,
                job_description: response.data.job_details[0].job_description,
                job_category: response.data.job_details[0].job_category,
                job_location: response.data.job_details[0].job_location,
                Address: response.data.job_details[0].Address,
                prezi_quotes: response.data.job_details[0].prezi_quotes,
                postal_date: response.data.job_details[0].postal_date,
                salary_offer: response.data.job_details[0].salary_offer,
                closing_date: response.data.job_details[0].closing_date,
                notification_email: response.data.job_details[0].notification_email,
                job_image_id: response.data.job_details[0].job_image_id,
           })
        }, (error) => {
          console.log(error,"------> console log Edit jobs retrieve error");
        });
        
        } catch (error) {
          alert(error)
        }
      };

    render(navigation) {

        if(this.state.isLoading) {
            return(
              <View style={{flex: 1, alignContent: "center", justifyContent: 'center'}}>
                <ActivityIndicator />
              </View>
            )
        }
        else {
          return(
              <Container style={styles.container}>
              <Content style={styles.content}>
                <Form style={styles.formStyle}>
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Job Title *</Label>
                    <Input style={styles.inputStyle} value={this.state.job_title} onChangeText={text => this.setState({job_title: text})} placeholder="Enter a short title for your job" />
                  </Item>
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Job Description</Label>
                    <Textarea onChangeText={text => this.setState({job_description: text})} value= {this.state.job_description} rowSpan={5} style={{width: '100%'}} />
                  </Item>
                  <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
                    <Label style={[styles.labelStyle, {marginLeft: '4%'}]}>Cover Image</Label>
                    
                    <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Button onPress={() => this.chooseImage()} small style={{marginLeft: '4%', width: 80, marginTop: '1%', marginBottom: '1%'}}>
                        <Text style={{color: '#FFFFFF', marginLeft: '20%'}}>Choose</Text>
                      </Button>
    
                      <Label style={{fontSize: 12, color: 'grey', marginLeft: '1%', marginTop: '2%'}}>{this.state.fileUri}</Label>
                    </View>
    
                      <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>(Recommended size 1400×600px)</Text>
                    
                    </View>
                  
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Job Category</Label>
                      <Picker
                              selectedValue={this.state.job_category}
                              style={{ height: 50, width: '100%', color: '#05375a'}}
                              value={this.state.job_category}
                              onValueChange={(itemValue, itemIndex) => this.setState({job_category:itemValue})}
                          >
                              {this.state.category.map((category, key)=>(
                                  <Picker.Item label={String(this.state.category[key].catagory)} value={String(this.state.category[key].id)} key={key} />)
                              )}
                      </Picker>
                  </Item>
    
                  <View>

                    <Label onPress={() => this.clearText()} style={[styles.labelStyle, {marginLeft: '4%'}]}>+ Add new address</Label>
                </View>
    
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Address</Label>
                    <Input onChangeText={(text) => this.addressHandleChange(text)}
                           value={this.state.Address}
                           style={styles.inputStyle} />
                           
                  </Item>
    
                  <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>Enter Street, Region, Locality, Country. e.g. 1600 Chestnut Street, Philadelphia, PA, USA</Text>
                  
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Prerequisite (Optional)</Label>
                    <Input style={styles.inputStyle} value={this.state.prezi_quotes} onChangeText={text => this.setState({prezi_quotes: text})} />
                  </Item>
                  
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Postal Code</Label>
                    <Input style={styles.inputStyle} value={this.state.postal_date} onChangeText={text => this.setState({postal_date: text})} />
                  </Item>
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Salary Offer</Label>
                    <Input style={styles.inputStyle} value={this.state.salary_offer} onChangeText={text => this.setState({salary_offer: text})} />
                  </Item>
    
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Closing Date</Label>
                    <Input style={styles.inputStyle} value={this.state.closing_date} onChangeText={text => this.setState({closing_date: text})} placeholder="Set Closing Date" />
                  </Item>
                  <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>Set a date or leave blank to automatically use the expire date</Text>
    
                  <Item stackedLabel>
                    <Label style={styles.labelStyle}>Notification Email</Label>
                    <Input style={styles.inputStyle} value={this.state.notification_email} onChangeText={text => this.setState({notification_email: text})} />
                  </Item>
                  <View style={styles.button}>
                          <TouchableOpacity 
                            style={styles.updateBtn} 
                            onPress={() => this.editAJob(
                                this.state.id,
                                this.state.job_title,
                                this.state.job_description,
                                this.state.image,
                                this.state.job_category,
                                this.state.job_location,
                                this.state.Address,
                                this.state.prezi_quotes,
                                this.state.postal_date,
                                this.state.salary_offer,
                                this.state.closing_date,
                                this.state.notification_email
                            )}
                          >
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
