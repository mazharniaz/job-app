import React, { Component } from 'react';
import { 
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import { Header, Left, Item, Title, Input, Thumbnail, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Badge, Text, Container, Content, Right} from "native-base";
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient'
// import ModalComponent from '../screens/ModalComponent'
import JobCarts from "../JobCarts"
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';


export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,

            isLoading: true,
            data: {},
            user_id: '',

            query: '',
            searchData: []
        }
    }

    componentDidMount() {
        this._retrieveData();
    }

    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };

    updateQuery(text) {
        this.setState({
            query: text
        })
    }

    _retrieveSearchQuery = async () => {
        try {
          const query = await AsyncStorage.getItem('query');
          const parse = JSON.parse(query);
          //alert(JSON.stringify(this.state.query));
          console.log(parse.query, '----> QUERY')
          this.setState({
              query: parse.query
          })
          
          // if (user !== null) {
            
          //   console.log(value);
          // }
        } catch (error) {
          alert(error)
        }
      };

      _retrieveData = async () => {
        
        try {
          const user = await AsyncStorage.getItem('user');
          const parse = JSON.parse(user);
          this.setState({ user_id: parse.user_id})
          //alert(JSON.stringify(this.state.data));
          console.log(parse.user_id, '---> user')
          axios.get(`http://production.myquickshift.com/app_api/shift_times/${this.state.user_id}`)
          .then((response) => {
            console.log(response.data, "------> console log Job Listing")
            this.setState({
                isLoading: false,
                data: response.data
           })
        }, (error) => {
          console.log(error,"------> console log Job Listing error");
        });
        
        } catch (error) {
          alert(error)
        }
      };

//     jobList = () => {
//         return this.state.data.singleJobb.map((element, key) => {
//           return (
            
                
            
//         );
//     })
//   };

    
    
    render() {
        if(this.state.isLoading) {
            return(
              <View style={{flex: 1, alignContent: "center", justifyContent: 'center'}}>
                <ActivityIndicator />
              </View>
            )
          } 
        console.log(this.state.data, '---- DATA')   
        return (
            <View>

                {/* <View style={{marginTop: '-12%', flex: 1, zIndex: 1}}>
                    <Header searchBar style={{backgroundColor: '#0066ff'}}>
                        <Item style={{borderRadius: 20}}>
                            <Icon name="md-search" size={20} style={{marginLeft: '3%'}} />
                            <Input placeholder="Search" onChangeText={(text) => this.handleSearch(text)} />
                        </Item>
                    </Header> 
                </View> */}

                <View style={{marginTop: '15%',}}>

                <TouchableOpacity onPress={() => this.toggleModal()}>
                <Card style={styles.cardStyle}>
                    <CardItem cardBody>
                        <Image source={{uri: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}} 
                        style={styles.cardImage}/>
                        
                        <Left>
                            <Body style={{marginTop: 2}}>
                                
                                <Text note style={{fontSize: 8}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                                <Text style={{fontSize: 12}}>{this.state.data.singleJobb.job_title}</Text>
                                <Text note style={{fontSize: 8}}>{this.state.data.singleJobb.Address}</Text>

                                <CardItem style={{marginTop:0}}>
                                    <Left style={{marginLeft: '-11%'}}>
                                        <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                            <Text style={{fontSize: 8}}>Total Pay</Text>
                                            <Text style={{fontSize: 8}}>{this.state.data.singleJobb.salary_offer}</Text>
                                        </Body>
                                    </Left>
                                    <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                        <Text style={{fontSize: 8}}>Per hour</Text>
                                        <Text style={{fontSize: 8}}>{this.state.data.singleJobb["0"].per_hour_salary}</Text>
                                    </Body>
                                    <Body style={{marginLeft: '5%'}}>
                                        <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                        <Text style={{fontSize: 8}}>{this.state.data.singleJobb.job_location}</Text>
                                    </Body>
                                </CardItem>

                            </Body>
                        </Left>
                    </CardItem>
                </Card>
                </TouchableOpacity>

            <Modal isVisible={this.state.isModalVisible}>
            <Container>
                <ScrollView>
                    <Content style={{paddingTop: '2%'}}>
                    <Card transparent style={styles.cardStyle}>
                        <CardItem cardBody>
                            <Thumbnail source={{uri: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}} />
                            
                        <Left>
                            <Body style={{marginTop: 2, marginLeft: "4%"}}>
                                
                                <Text note style={{fontSize: 10}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                                <Text style={{fontSize: 14}}>{this.state.data.singleJobb.job_title}</Text>
                                <Text note style={{fontSize: 10}}>{this.state.data.singleJobb.Address}</Text>
                                <Text note style={{fontSize: 10}}>$10 Inc Holiday Pay</Text>

                            </Body>
                        </Left>
                    </CardItem>
                </Card>
                
                <Card transparent style={{borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
                <Text style={{fontSize: 14, marginLeft: "1%"}}>Shifts (3)</Text>
                    
                    <CardItem style={{marginTop: "-3%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                    
                        
                        <Body style={{marginRight: "-2%"}}>
                        
                            <Text style={{fontSize: 10}}>Tomorrow</Text>
                            <Text style={{fontSize: 10}}>08:00 AM - 11:00 AM</Text>
                        </Body>

                        <Text style={{marginRight: "2%"}}>&#8594;</Text>

                        <Body style={{marginRight: "-2%"}}>
                            <Text style={{fontSize: 10}}>Thu, 30 May</Text>
                            <Text style={{fontSize: 10}}>08:00 AM - 11:00 AM</Text>
                        </Body>

                        <Text style={{marginRight: "2%"}}>&#8594;</Text>

                        <Body>
                            <Text style={{fontSize: 10}}>Fri, 31 May</Text>
                            <Text style={{fontSize: 10}}>08:00 AM - 11:00 AM</Text>
                        </Body>

                    </CardItem>
                </Card>

                <Card transparent style={{marginTop: "-3%", borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
                
                    <CardItem style={{ marginTop: "1%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                        
                        
                        <Body style={{marginRight: "-2%"}}>
                        <Text style={{fontSize: 14}}>Location</Text>
                            <Text note style={{fontSize: 10}}>XYZ Street</Text>
                            <Text note style={{fontSize: 10}}>QRT Bakery, Park Estate</Text>
                            <Text note style={{fontSize: 10}}>LONDON, WC 5PT</Text>
                        </Body>
                        
                        <Image 
                            source={require('../google-map.png')} 
                            style={{height: 60, width: 210}} 
                        />
                    </CardItem>
                </Card>

                <Card transparent style={{marginTop: "-3%", borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
                        <CardItem style={{ marginTop: "1%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                            <Body>
                                <Text style={{fontSize: 14}}>Prerequisite (If any)</Text>
                                <Text note style={{fontSize: 10}}>
                                    {this.state.data.singleJobb.prezi_quotes}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
        
                    <Card transparent style={{marginTop: "-3%"}}>
                        <CardItem style={{ marginTop: "1%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                            <Body>
                                <Text style={{fontSize: 14}}>Description</Text>
                                <Text note style={{fontSize: 10}}>
                                    {this.state.data.singleJobb.job_description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
                </ScrollView>
                
            </Container>
            
            <View style={[styles.button]}>
                <TouchableOpacity 
                    onPress={this.toggleModal}
                    style={[styles.signIn, {borderColor: '#0066ff', borderWidth: 1, marginTop: 8}]}
                >
                    <Text style={[styles.textSign, {color: '#0066ff'}]}>Skip</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width: '98%', marginLeft: '1%', marginTop: '2%'}}>
                    <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Text style={[styles.textSign, {color: '#ffffff'}]}>Apply now!</Text>
                    </LinearGradient>
                </TouchableOpacity>       
            
            </View>

        </Modal>
        </View>

    </View>
        )
    }

}

const styles = StyleSheet.create({
    iconSize: {
        fontSize: 18,
        color: '#978cab'
    },
    navButton: {
        color: 'white',
        padding: 1,
        alignItems: 'center',
        display:'flex',
        margin: 0
      },
    searchRadius: {
        borderRadius: 20
    },
    gradient: {
        flex: 1,
        maxHeight: 40
    },
    container: {
        flex: 1
    },
    cardImage: {
        height: 90,
        width: 75,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5

    },
    cardStyle: {
        borderRadius: 10,
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '1%',      
    }, 
    signIn: {
        width: "50%",
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    textSign: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        alignItems: 'center',
        flexDirection: 'row'
    },
});


// constructor(props) {
    //     super(props);
    //     this.state = {
    //         isLoading: true,

    //         setModalVisible: false,
    //         modalSearchData: {}
    //     }
    // }

    // handleItemDataOnPress = (searchData) => {
    //     this.setState({
    //         setModalVisible: true,
    //         //modalSearchData: searchData
    //     })
    // }

    // handleModalClose = () => {
    //     this.setState({
    //         setModalVisible: false,
    //         //modalSearchData: {}
    //     })
    // }

    {/* <ModalComponent 
            showModal={this.state.setModalVisible}
            searchData={this.state.modalSearchData}
            onClose={this.handleModalClose}
        /> */}