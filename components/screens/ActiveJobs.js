import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card, CardItem, Left, Right, Badge } from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default class ActiveJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},
            user_id: ''
        }
    }

    componentDidMount() {
        this._retrieveData();
        
    }

    _retrieveData = async () => {
        
        try {
          const user = await AsyncStorage.getItem('user');
          const parse = JSON.parse(user);
          this.setState({ user_id: parse.user_id})
          //alert(JSON.stringify(this.state.data));
          console.log(parse.user_id, '---> user')

          axios.get(`http://production.myquickshift.com/app_api/active_jobs_api/${this.state.user_id}`)
          .then((response) => {
            console.log(response.data, "------> console log Active Jobs")
            this.setState({
                isLoading: false,
                data: response.data
           })
        }, (error) => {
          console.log(error,"------> console log Active jobs error");
        });
        
        } catch (error) {
          alert(error)
        }
      };

    list = () => {
        return this.state.data.Active_jobs.map((element, i) => {
          return (
            <Card style={styles.card} key={i}>
            <CardItem style={[styles.cardItemStyle, {paddingTop: '1%'}]}>
                <View style={styles.thumbTextStyle}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        
                            <Text style={[styles.name, {fontSize: 17, fontWeight: 'bold', marginLeft: '0%'}]}>
                                {element.job_title.length < 20
                                    ? `${element.job_title}`
                                    : `${element.job_title.substring(0, 20)}...`}
                            </Text>
                            <Text style={{fontSize: 12, marginTop: '1%', color: 'red'}}>Closing date: {element.closing_date}</Text>
                               
                    </View>
                </View>
            </CardItem>

            <CardItem style={{marginTop: '-3%', borderRadius: 10}}>
                <View style={styles.thumbTextStyle}>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        
                            <Text style={[styles.name, { marginLeft: '0%', fontSize: 12 }]}>Pay per hour: ${element.salary_offer} | Location: {element.job_location.length < 12 ? `${element.job_location}` : `${element.job_location.substring(0, 12)}...`}</Text>
                            <Badge style={{ backgroundColor: '#479C47', height: 20, width: 70, alignItems: 'center' }}>
                                <Text style={{ color: 'white' }}>{element.job_active_status}</Text>
                            </Badge>
                               
                    </View>
                </View>
            </CardItem>
                            
        </Card>
        );
    });
  };

    render() {

        if(this.state.isLoading) {
            return(
              <View style={{flex: 1, alignContent: "center", justifyContent: 'center'}}>
                <ActivityIndicator />
              </View>
            )
          } 
            
          return (
            <ScrollView>
                <View>
                    {this.list()}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#0066ff'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 26
    },
    text_tagLine: {
        color: '#ffffff',
        fontSize: 16
    },
    cardItemStyle: {
        borderRadius: 20,
      },
      card: {
        height: 80,
        borderRadius: 10
      },
      heading: {
          color: '#0066ff',
          fontSize: 18,
          fontWeight: 'bold',
          marginLeft: '2%',
          marginBottom: '1%'
      },
      thumbTextStyle: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly'
      },
      button: {
        alignItems: 'center',
        marginTop: '-3%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    signIn: {
        width: "100%",
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    textSign: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    name: {
        marginTop: '1%', 
        marginLeft: '5%'
    },
    tag: {
        marginTop: '1%', 
        marginLeft: '5%', 
        fontSize: 10, 
        color: 'grey'
    }
});