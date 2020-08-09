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
import JobCarts from "../JobCarts"
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';


export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isLoading: true,
            data: {},
            user_id: '',

            id: '',

            query: '',
        }

        this.searchData = []
    }

    componentDidMount() {
        this.searchAPI();
    }

    updateQuery(text) {
        this.setState({
            query: text
        })

        console.log(this.state.query, '--->')
    }

    // _retrieveSearchQuery = async () => {
    //     try {
    //       const query = await AsyncStorage.getItem('query');
    //       const parse = JSON.parse(query);
    //       //alert(JSON.stringify(this.state.query));
    //       console.log(parse.query, '----> QUERY')
    //       this.setState({
    //           query: parse.query
    //       })
    //     } catch (error) {
    //       alert(error)
    //     }
    //   };

      // _retrieveData = async () => {
        
      //   try {
      //     const user = await AsyncStorage.getItem('user');
      //     const parse = JSON.parse(user);
      //     this.setState({ user_id: parse.user_id})
      //     //alert(JSON.stringify(this.state.data));
      //     console.log(parse.user_id, '---> user')
      //     axios.get(`http://production.myquickshift.com/app_api/shift_times/${this.state.user_id}`)
      //     .then((response) => {
      //       console.log(response.data, "------> console log Job Listing")
      //       this.setState({
      //           isLoading: false,
      //           data: response.data
      //      })
      //   }, (error) => {
      //     console.log(error,"------> console log Job Listing error");
      //   });
        
      //   } catch (error) {
      //     alert(error)
      //   }
      // };

      searchAPI() {
        axios.get(`http://production.myquickshift.com/app_api/search_api?job_title=${this.state.query}`)
          .then((response) => {
            console.log(response.data, "------> console log Search API")
            this.setState({
                isLoading: false,
                data: response.data
           },
            function() {
                console.log(response.data.jobs_search_list, '---> SEARCH LIST')
                this.searchData = response.data.jobs_search_list;
            }
           )
        }, (error) => {
          console.log(error,"------> console log Search API error");
        });
      }

      SearchFilterFunction(text) {
        console.log('FunctionCall')
        //passing the inserted text in textinput
        const newData = this.searchData.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.job_title ? item.job_title.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({
          //setting the filtered newData on datasource
          //After setting the data it will automatically re-render the view
          data: newData,
          query: text,
        });
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
          //console.log(element["0"].per_hour_salary, '--------> ELEMENT')
          return (
            <TouchableOpacity /*onPress={() => this.handlePress(element.id)}*/ >
              <Card style={styles.cardStyle} key={i}>
                  <CardItem cardBody>
                      <Image source={{uri: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'}} 
                      style={styles.cardImage}/>
                      
                      <Left>
                          <Body style={{marginTop: 2}}>
                              
                              <Text note style={{fontSize: 8}}>jhdkjhakjdhjkahsd</Text>
                              <Text style={{fontSize: 12}}>job title</Text>
                              <Text note style={{fontSize: 8}}>job address</Text>

                              <CardItem style={{marginTop:0}}>
                                  <Left style={{marginLeft: '-11%'}}>
                                      <Body style={{borderRightColor: '#000000', borderRightWidth: 1}}>
                                          <Text style={{fontSize: 8}}>Total Pay</Text>
                                          <Text style={{fontSize: 8}}>salary offer</Text>
                                      </Body>
                                  </Left>
                                  <Body style={{marginLeft: '5%', borderRightColor: '#000000', borderRightWidth: 1}}>
                                      <Text style={{fontSize: 8}}>Per hour</Text>
                                      <Text style={{fontSize: 8}}>per_hour_salary</Text>
                                  </Body>
                                  <Body style={{marginLeft: '5%'}}>
                                      <Icon type="FontAwesome" name="street-view" style={{fontSize: 12}} /> 
                                      <Text style={{fontSize: 8}}>job location</Text>
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

    render() {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Spinner type='FadingCircleAlt' color='#0066ff' />
                </View>
            )
          } 
        console.log(this.state.dataSource, '---- DATA')   
        return (
            <View>

                <Header searchBar style={{backgroundColor: '#0066ff'}}>
                    <Item style={{borderRadius: 20}}>
                        <Icon name="md-search" size={20} style={{marginLeft: '3%'}} />
                        <Input placeholder="Search" value={this.state.query} onChangeText={(text) => this.SearchFilterFunction(text)} />
                    </Item>
                </Header>

                <ScrollView>
                  <View>
                      {this.list()}
                  </View>
                </ScrollView>

                
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