import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';
import { Container, Thumbnail, Content, Left, Card, CardItem, Body } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import Hyperlink from 'react-native-hyperlink';
import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';

export default class BidsDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            bid_id: '',

            name: '',
            city: '',
            county: '',
            messege: '',
            competitor_resume: '',
            phone: '',
            email: '',
            rating: '',
            image: '',
            images: [],

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


    // downloadResume() {
    //     const { config, fs } = RNFetchBlob
    //     let PictureDir = fs.dirs.PictureDir // this is the pictures directory. You can check the available directories in the wiki.
    //     //let date = new Date()
    //     let options = {
    //     fileCache: true,
    //     addAndroidDownloads : {
    //         useDownloadManager : true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
    //         notification : true,
    //         path:  PictureDir, // this is the path where your downloaded file will live in
    //         description : 'Downloading PDF.'
    //     }
    //     }
    //     config(options).fetch('GET', "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf").then((res) => {
    //         alert('PDF DOWNLOADED SUCCESSFULLY!')
    //     })
    // }

    componentDidMount() {
        this._retrieveBidID()
        
    }

    _retrieveBidID = async () => {
        try {
            const bidID = await AsyncStorage.getItem('bid_id');
            const parse = JSON.parse(bidID);
            this.setState({ bid_id: parse.bid_id})
            console.log(parse.bid_id, '---> Bid ID')

            axios.get(`http://myquickshift.com/app_api/GetbidAndUserDetails/${this.state.bid_id}`)
            .then((response) => {
              console.log(response.data, "------> console log Bids Description")
              this.setState({
                  isLoading: false,
                  data: response.data,

                  name: response.data.user.name,
                  city: response.data.user.city,
                  county: response.data.user.county,
                  messege: response.data.bid.messege,
                  competitor_resume: response.data.bid.competitor_resume,
                  phone: response.data.user.phone,
                  email: response.data.user.email,
                  rating: response.data.rating,
                  image: response.data.user.image,
                  images: response.data.images,
                  Facebook: response.data.user.Facebook,
                  Twitter: response.data.user.Twitter,
                  LinkedIn: response.data.user.LinkedIn,
                  Instagram: response.data.user.Instagram

             })

             this.splitFacebook()
             this.splitTwitter()
             this.splitLinkedin()
             this.splitInstagram()

            }, (error) => {
                console.log(error,"------> console log Bids Description error");
            });

        } catch (error) {
            alert(error)
        }
    }

    acceptBid() {
        axios.get(`http://myquickshift.com/app_api/accxpt_app_api/${this.state.bid_id}`)
            .then((response) => {
              console.log(response.data, "------> console log Accept Bid")
              this.setState({
                  isLoading: false,
                  data: response.data,
             })

             if(response.data.mesasge === "application accpt") {
                alert('Application accepted!')
             }

            }, (error) => {
                console.log(error,"------> console log Accept Bid error");
            });
    }

    ImagesList() {
        return this.state.images.map((element, i) => {
            return (
                <View key={i}>
                    <Text onPress={() => Linking.openURL(`http://myquickshift.com/public/images/${element.filename}`)}>{element.filename}</Text>
                </View>
            )
        })
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
        let name = file[file.length-2]

        console.log(name,"----> Instagram")

        this.setState({
            splitInstagram: name
        })

        console.log(this.state.splitInstagram, '-----> SPLIT Instagram')
    }

    render(navigation) {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Spinner type='FadingCircleAlt' color='#0066ff' />
                </View>
            )
        }

        return (
            <Container>
                <ScrollView>
                    <Content>

                            <CardItem cardBody>
                                <Thumbnail large style={{marginLeft: '5%', marginTop: '2%'}} source={{uri: `http://myquickshift.com/public/UserImages/${this.state.image}`}} />

                                <Left>
                                    <Body>
                                        <Text style={{fontSize: 16, color: '#0066ff'}}>{this.state.name}</Text>
                                        <Text style={{fontSize: 14}}>{this.state.city}, {this.state.county}</Text>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={{fontSize: 14}}>{this.state.rating}</Text>
                                            <StarRating
                                                disabled={false}
                                                maxStars={5}
                                                rating={this.state.rating}
                                                fullStarColor={'red'}
                                                starSize={15}
                                                containerStyle={{width: 70, marginLeft: '2%', marginTop: '1%'}}
                                            /> 
                                        </View>
                                        
                                    </Body>
                                </Left>
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <Text style={{fontSize: 16, color: '#0066ff'}}>Proposal/Offer Letter</Text>
                                    <Text style={{fontSize: 14}}>
                                        {this.state.messege}
                                    </Text>
                                </Body>
                            </CardItem>

                            <CardItem>
                                    <Text style={{color: '#0066ff'}}>Resume:</Text>
                                    <Text onPress={() => Linking.openURL(`http://myquickshift.com/public/resume/${this.state.competitor_resume}`)}>{this.state.competitor_resume}</Text>
                            </CardItem>
                            <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%', marginTop: '-3%'}}>(Click to open the resume)</Text>

                            <CardItem>
                                <Body>
                                    <Text style={{color: '#0066ff'}}>Portfolio:</Text>
                                    {this.ImagesList()}
                                </Body>
                            </CardItem>

                            <Text style={{fontSize: 11, color: 'grey', marginLeft: '4%', marginTop: '-3%'}}>(Click to open the images)</Text>
                            
                            <CardItem>
                                <Body>
                                    <View style={[styles.iconView, {marginLeft: '-1%'}]}>
                                        <Image source={require('../../assets/phone.png')} style={{height: 30, width: 30}} />
                                        <Text style={{marginLeft: '1%', marginTop: '1%'}} onPress={() => Linking.openURL(`tel:${this.state.phone}`)}>{this.state.phone}</Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../assets/email.png')} style={{height: 25, width: 25}} />
                                        <Hyperlink linkStyle={ { color: '#2980b9', fontStyle: "italic", textDecorationLine: "underline" } }>
                                        <Text style={{marginLeft: '2%'}} onPress={() => Linking.openURL(`mailto:${this.state.email}`) }>{this.state.email}</Text>
                                        </Hyperlink>
                                        
                                    </View>
                                </Body>
                            </CardItem>

                            <CardItem>
                                <Body>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../assets/facebook.png')} style={styles.icon} />
                                        <Text style={{marginLeft: '1%'}} onPress={() => Linking.openURL(`fb://profile/${this.state.splitFB}`)}>/ {this.state.splitFB}</Text>
                                        
                                        
                                    </View>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../assets/twitter.png')} style={styles.icon} />
                                        <Text style={{marginLeft: '1%'}} onPress={() => Linking.openURL(`twitter://${this.state.splitTwitter}`)}>/ {this.state.splitTwitter}</Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../assets/linkedin.png')} style={styles.icon} />
                                        <Text style={{marginLeft: '1%'}} onPress={() => Linking.openURL(`linkedin://profile/[${this.state.splitLinkedIn}]`)}>/ {this.state.splitLinkedIn}</Text>
                                    </View>
                                    <View style={styles.iconView}>
                                        <Image source={require('../../assets/instagram.png')} style={styles.icon} />
                                        <Text style={{marginLeft: '1%'}} onPress={() => Linking.openURL(`instagram://user?username=${this.state.splitInstagram}`)}>/ {this.state.splitInstagram}</Text>
                                    </View>
                                </Body>
                            </CardItem>

                                <View style={styles.button}>
                                    <TouchableOpacity style={styles.updateBtn} onPress={() => this.acceptBid()}>
                                        <LinearGradient 
                                            style={styles.updateBtn} 
                                            colors={['#abec9e', '#0066ff']} 
                                            start={{x: 0, y: 0}} 
                                            end={{x: 1, y: 0}}
                                            
                                    >
                                            <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Accept</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                        

                    </Content>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        
    },
    button: {
        alignItems: 'center',
        marginTop: 20,
        marginLeft:'5%',
        marginBottom: 20,
        marginRight: '5%'
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
      icon: {
        height: 20,
        width: 20,
        marginBottom: '2%'
      },
      iconView: {
          flexDirection: 'row'
      }
});