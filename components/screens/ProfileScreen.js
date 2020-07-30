import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-spinkit';

export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            email: '',
            phone: '',
            name: '',
            city: '',
            county: '',
            image: '',
            introduction: '',
            addrs: '',

            Facebook: '',
            splitFB: '',

            Twitter: '',
            splitTwitter: '',

            LinkedIn: '',
            splitLinkedIn: '',

            Instagram: '',
            splitInstagram: ''
        }
    }

    componentDidMount() {
        this.profileData_API();
    }

    profileData_API = async () => {
        try {
            const user = await AsyncStorage.getItem('user');
            const parse = JSON.parse(user);
            this.setState({ user_id: parse.user_id})
            console.log(parse.user_id, '---> User')
  
            axios.get(`http://myquickshift.com/app_api/profile_data_api/${this.state.user_id}`)
            .then((response) => {
              console.log(response.data.All_data.image, "------> console log Profile Data")
              this.setState({
                  isLoading: false,
                  data: response.data,

                  email: response.data.All_data.email,
                  phone: response.data.All_data.phone,
                  name: response.data.All_data.name,
                  city: response.data.All_data.city,
                  county: response.data.All_data.county,
                  image: response.data.All_data.image,
                  introduction: response.data.All_data.introduction,
                  Facebook: response.data.All_data.Facebook,
                  Twitter: response.data.All_data.Twitter,
                  LinkedIn: response.data.All_data.LinkedIn,
                  Instagram: response.data.All_data.Instagram,
                  addrs: response.data.All_data.addrs
             })

             this.splitFacebook()
             this.splitTwitter()
             this.splitLinkedin()
             this.splitInstagram()

             this._storeAddress(this.state.addrs);

          }, (error) => {
            console.log(error,"------> console log Profile Data error");
          });
          
          } catch (error) {
            alert(error)
          }
    }

    splitFacebook() {
        let file = String(this.state.Facebook).split("/")
        let name = file[file.length-1]

        console.log(name,"----> FACEBOOK")

        this.setState({
            splitFB: name
        })

        console.log(this.state.splitFB, '-----> SPLIT FB')
    }

    splitTwitter() {
        let file = String(this.state.Twitter).split("/")
        let name = file[file.length-1]

        console.log(name,"----> Twitter")

        this.setState({
            splitTwitter: name
        })

        console.log(this.state.splitTwitter, '-----> SPLIT Twitter')
    }

    splitLinkedin() {
        let file = String(this.state.LinkedIn).split("/")
        let name = file[file.length-1]

        console.log(name,"----> LinkedIn")

        this.setState({
            splitLinkedIn: name
        })

        console.log(this.state.splitLinkedIn, '-----> SPLIT LinkedIn')
    }

    splitInstagram() {
        let file = String(this.state.Instagram).split("/")
        let name = file[file.length-1]

        console.log(name,"----> Instagram")

        this.setState({
            splitInstagram: name
        })

        console.log(this.state.splitInstagram, '-----> SPLIT Instagram')
    }

    _storeAddress = async () => {
        try {
            let obj = {
              address: this.state.addrs,
            }
      
            await AsyncStorage.setItem(
              'address', JSON.stringify(obj)        
            );
          } catch (error) {
            alert(error)
          }
    }

    render(navigation) {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Spinner type='FadingCircleAlt' color='#0066ff' />
                </View>
            )
        } else {

        return(
            <ScrollView>
                <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                    <Avatar.Image 
                    source={{
                    uri: `http://myquickshift.com/public/UserImages/${this.state.image}`
                    }}
                    size={100}
                    style={{marginBottom: '1%', marginTop: '4%'}}
                    />
        
                    <Text style={{color: '#0066ff', fontSize: 18}}>{this.state.name}</Text>
                    
                    <View style={{flexDirection: 'row'}}>
                        <Icon 
                            name="md-pin"
                            style={{fontSize: 14, color: '#0066ff', marginTop: '1%'}}
                        />
                        <Text style={{marginBottom: '2%', marginLeft: '2%', fontSize: 16, color: '#0066ff'}}>{this.state.city}, {this.state.county}</Text>
                    </View>
        
                    <Text style={{textAlign: 'center', fontSize: 12, color: 'grey'}}>
                    {this.state.introduction}
                    </Text>
        
                    <View style={{marginLeft: '-46%', marginTop: '5%'}}>
                        <Text style={{color: '#0066ff', fontSize: 18}}>Contact Information</Text>
        
                        <View>
                            <Text style={styles.headingInfo}>EMAIL ADDRESS</Text>
                            <Text style={styles.textInfo}>{this.state.email}</Text>
                        </View>
        
                        <View>
                            <Text style={styles.headingInfo}>PHONE NUMBER</Text>
                            <Text style={styles.textInfo}>{this.state.phone}</Text>
                        </View>
        
                        <View>
                            <Text style={styles.headingInfo}>LOCATION</Text>
                            <Text style={styles.textInfo}>{this.state.addrs}</Text>
                        </View>
        
                        <View>
                            <Text style={styles.headingInfo}>FACEBOOK</Text>
                            <Text style={styles.textInfo}>{this.state.splitFB}</Text>
                        </View>
                        <View>
                            <Text style={styles.headingInfo}>TWITTER</Text>
                            <Text style={styles.textInfo}>{this.state.splitTwitter}</Text>
                        </View>
                        <View>
                            <Text style={styles.headingInfo}>LINKEDIN</Text>
                            <Text style={styles.textInfo}>{this.state.splitLinkedIn}</Text>
                        </View>
                        <View>
                            <Text style={styles.headingInfo}>INSTAGRAM</Text>
                            <Text style={styles.textInfo}>{this.state.splitInstagram}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
  }
} 

const styles = StyleSheet.create({
    headingInfo: {
        color: 'grey',
        marginTop: 10,
        fontSize: 12
    },
    textInfo: {
        fontSize: 12,
        marginBottom: 10,
        color: '#0066ff'
    }
});