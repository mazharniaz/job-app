import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header, Left, Item, Title, Input, Thumbnail, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Badge, Text, Container, Content, Right} from "native-base";
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default class JobSearchScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {},
      dataStatus: {},
      job_title: '',
      is_active: '',

      id: ''
    }

    console.log(this.props, '--> SEARCH SCREEN PROPS')
  }

  componentDidMount() {
    
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      
        this.activeStatus_API()
        console.log('---------> ComponentDIDMOUNT <---------')
      
      
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
    console.log('---------> ComponentWillMOUNT <---------')
  }

  // componentDidMount() {
    
  //   //setInterval(this.activeStatus_API(),15000)
  //   this.activeStatus_API();

  //   //this.searchAPI("");
  // }

//   _retreieveApproveStatus = async () => {
//     try {
//         const Is_Active = await AsyncStorage.getItem('ApproveStatus');
//         const parse = JSON.parse(Is_Active);
//         this.setState({ 
//             is_active: parse.is_active,
//         })

//         this.handleJobNavigation()

//         console.log(parse.is_active, '---> ACTIVE STATUS')
      
//       } catch (error) {
//         alert(error)
//       }
// }


activeStatus_API = async () => {
  //this.forceUpdate();
  try {
      const user = await AsyncStorage.getItem('user');
      const parse = JSON.parse(user);
      this.setState({ user_id: parse.user_id})
      console.log(parse.user_id, '---> user')

      axios.get(`http://myquickshift.com/app_api/check_candidate_status/${this.state.user_id}`)
      .then((response) => {
        console.log(response.data.is_active, "------> console log Candidate Status")
        this.setState({
            //isLoading: false,
            dataStatus: response.data,

            is_active: response.data.is_active

       })
       console.log(response.data.is_active, 'ACTIVE STATE')

      if(response.data.is_active == "Approved") {
        console.log('hdjkhakjshkjasjkdsah')
        this.searchAPI("");
      } else {
        this.props.navigation.navigate('JobBlocker')
      }

    }, (error) => {
      console.log(error,"------> console log Candidate Status");
    });
    
    } catch (error) {
      alert(error)
    }
 }

  // handleJobNavigation() {
  //   if(this.state.is_active == "Approved") {
  //     this.searchAPI("");
  //   } else {
  //     this.props.navigation.navigate('JobBlocker')
  //   }
  // }

  searchAPI(key) {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };
    axios.post(`http://myquickshift.com/app_api/search_api`, JSON.stringify({
        job_title: key,
      }),axiosConfig)
      .then((response) => {
        console.log(response.data, "------> console log Search API")
        this.setState({
            isLoading: false,
            data: response.data,
       }
      )
    }, (error) => {
      console.log(error,"------> console log Search API error");
    });
  }

  queryState(text) {
    this.setState({
      job_title: text
    })
    this.searchAPI(text);
    console.log(text, '---> QUERY')
  }

  _storeJobDescriptionData = async (_id) => {
    try {
      
      let obj = {
        id: _id,
      }

      await AsyncStorage.setItem(
        'jobData', JSON.stringify(obj)        
      );
    } catch (error) {
      alert(error)
    }
  };

  handlePress(_id) {
    this._storeJobDescriptionData(_id);
    this.props.navigation.navigate('SearchScreenJobDetails')
  }

  list = () => {
        
    return this.state.data.jobs_search_list.map((element, i) => {
      return (
        <TouchableOpacity onPress={() => this.handlePress(element.id)} >
          <Card style={styles.cardStyle} key={i}>
              <CardItem cardBody>
                  <Image source={{uri: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}} 
                  style={styles.cardImage}/>
                  
                  <Left>
                      <Body style={{marginTop: 2}}>
                          
                          <Text note style={{fontSize: 8}}>{element.job_category}</Text>
                          <Text style={{fontSize: 12}}>{element.job_title}</Text>
                          <Text note style={{fontSize: 8}}>{element.Address}</Text>

                          <CardItem style={{marginTop:0}}>
                              <Left style={{marginLeft: '-11%'}}>
                                  <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                      <Text style={{fontSize: 8}}>Total Pay</Text>
                                      <Text style={{fontSize: 8}}>{element.salary_offer}</Text>
                                  </Body>
                              </Left>
                              <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                  <Text style={{fontSize: 8}}>Per hour</Text>
                                  <Text style={{fontSize: 8}}>per_hour_salary</Text>
                              </Body>
                              <Body style={{marginLeft: '5%'}}>
                                  <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                  <Text style={{fontSize: 8}}>{element.job_location == '' ? "N/A" : element.job_location}</Text>
                              </Body>
                          </CardItem>

                      </Body>
                  </Left>
              </CardItem>
              </Card>
        </TouchableOpacity>
        );
      });
    };

  render(naviagtion) {
    if(this.state.isLoading) {
      return(
          <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
              <Spinner type='FadingCircleAlt' color='#0066ff' />
          </View>
      )
    } else {
      return (
        <Container>
            <Header searchBar style={{backgroundColor: '#0066ff'}}>
                <Item style={{borderRadius: 20}}>
                    <Icon name="md-search" size={20} style={{marginLeft: '3%'}} />
                    <Input placeholder="Search" onChangeText={text => this.queryState(text)} />
                </Item>
            </Header>

            <Content>
            <ScrollView>
              <View>
                  {this.list()}
              </View>
            </ScrollView>
            </Content>
        </Container>
      )
    }
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