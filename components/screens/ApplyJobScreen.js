import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Form, Item, Label, Input, Textarea, Button } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class ApplyJobScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: '',
            date: {},

            filepath: {
                data: '',
                uri: '',
                file: ''
              },
              //image: '',
              fileUri: [],

              message: '',
              image_name: [],
              image_code: [],

              id: '',
              user_id: ''
        }
        //this.conditionalPost = this.conditionalPost.bind(this);
    }

    componentDidMount() {
        this._retrieveData()
    }

    _retrieveData = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            const parse1 = JSON.parse(user);

            const jobID = await AsyncStorage.getItem('jobData');
            const parse2 = JSON.parse(jobID);

            this.setState({ user_id: parse1.user_id, id: parse2.id})
            console.log(parse1.user_id, parse2.id, '---> user')

        } catch (error) {
            alert(error)
        }
    }

    applyJob(image_name, image_code, message) {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        console.log(image_name, image_code, message, "------->>>")
        axios.post(`http://myquickshift.com/app_api/apply_on_job_api/${this.state.user_id}/${this.state.id}`, JSON.stringify({
            image_name: image_name,
            image_code: image_code,
            message: message,
        }),axiosConfig)
        .then((response) => {
            console.log(response.data, " DATA RESPONSE ====>")
            //resp = response;
            this.setState({
                isLoading: true,
                data: response
        })
        }, (error) => {
                console.log(error,"///////////////////////////////////");
        });
    }

    multipleImagePicker = (fileUri) => {
        let listimgs=[]
        ImagePicker.openPicker({
            multiple: true,
            includeBase64: true
          }).then(images => {
            console.log(images);
            let allImages = []
            let binaryCode = []

            console.log(images[0].data, '---> BINARY DATA')

            images.forEach(element => {
                console.log(element,"======>>>>")

                let file = String(element.path).split("/")
                let name = file[file.length-1]

                console.log(name,"///////2323223")
                allImages.push(name)
            });

            images.forEach(binary => {
                console.log(binary.data, "----> BINARY")

                binaryCode.push(binary.data)
            })
            

            this.setState({
                filePath: images,
                fileUri: allImages,
                image_code: binaryCode
              });
            console.log(this.state.fileUri, '---> FILE URI')
          });
    }

    list() {
        return this.state.fileUri.map((elm, i) => {
            return (
                <View key={i}>
                    <Text>{elm}</Text>
                </View>
            )
        })
    }

    conditionalPost() {
        console.log(this.state.fileUri,this.state.message, '---->Conditional')
        if(this.state.fileUri === [] && this.state.message === '') {
            this.applyJob([], [], [])

            alert('All Null')
            console.log(this.state.fileUri, this.state.image_code, this.state.message, '---> All Null')
        }
        if(this.state.fileUri !== [] && this.state.message === '') {
            this.applyJob(this.state.fileUri,this.state.image_code,[])

            alert("Message Null")
            console.log(this.state.fileUri, this.state.image_code, this.state.message, '---> Message Null')
        }
        if(this.state.fileUri === [] && this.state.message !== '') {
            this.applyJob([],[],this.state.message)

            alert('Image Null')
            console.log(this.state.fileUri, this.state.image_code, this.state.message, '---> Image Null')
        }
        if(this.state.fileUri !== [] && this.state.message !== '') {
            this.applyJob(this.state.fileUri, this.state.image_code, this.state.message)

            alert('ok')
            console.log(this.state.fileUri, this.state.image_code, this.state.message, '---> ok')
        }
    }

    render(navigation) {
        return (
            <View>
                <Text style={{fontWeight: 'bold', color: '#0066ff', marginLeft: '5%', marginTop: '3%'}}>You only bidd once in this job. When you click "Send Resume", your resume
                      will automatically send to this company.
                </Text>
                <Text style={{color: '#6e7378', marginLeft: '5%', marginTop: '2%'}}>
                    Note: You cannot cancel this bid after successfully submit your resume. So confirm first that this job
                    belongs to you before sending your resume.
                </Text>

                <View
                    style={{
                        borderBottomColor: '#99a0a7',
                        borderBottomWidth: 1,
                        marginLeft: '5%',
                        marginRight: '5%',
                        marginTop: '3%',
                        marginBottom: '3%'
                    }}
                    />

                <Form style={styles.formStyle}>
                    
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
                        <Label style={[styles.labelStyle, {marginLeft: '4%'}]}>Add work attachment (Optional)</Label>
                        
                        <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Button onPress={() => this.multipleImagePicker()} small style={{marginLeft: '4%', width: 80, marginTop: '1%', marginBottom: '1%'}}>
                            <Text style={{color: '#FFFFFF', marginLeft: '20%'}}>Choose</Text>
                        </Button>
                    </View>

                    {/* <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%'}}>(Recommended size 1400×600px)</Text> */}
                    
                    </View>

                    <View style={{marginTop: '16%', marginLeft: '4%'}}>
                        {this.list()}
                    </View>

                    <Item stackedLabel>
                        <Label style={styles.labelStyle}>Message (Optional)</Label>
                        <Textarea onChangeText={text => this.setState({message: text})} rowSpan={5} style={{width: '100%'}} />
                    </Item>
                   

                    <View style={styles.button}>
                      <TouchableOpacity onPress={() => this.conditionalPost()}>
                          <LinearGradient 
                            style={styles.updateBtn} 
                            colors={['#abec9e', '#0066ff']} 
                            start={{x: 0, y: 0}} 
                            end={{x: 1, y: 0}}
                            
                      >
                            <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Send Resume</Text>
                          </LinearGradient>
                      </TouchableOpacity>
                </View>

                </Form>

            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        //alignItems: 'center',
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
});