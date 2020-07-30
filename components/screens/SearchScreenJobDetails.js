import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Header, Left, Item, Title, Input, Thumbnail, Card, Body, CardItem, Footer, FooterTab, Button, Icon, Badge, Text, Container, Content, Right} from "native-base";
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';

export default class SearchScreenJobDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            id: '',
            job_title: '',
            Address: '',
            prezi_quotes: '',
            job_description: '',
            image_path: '',
            total_days_for_hiring: '',
            per_hour_salary: '',
            perday_total_times: '',
            job_location: '',
            job_category: '',
            salary_offer: '',
        }
    }

    componentDidMount() {
        this._retrieveJobDescription();
    }

    _retrieveJobDescription = async () => {
        try {
            const jobID = await AsyncStorage.getItem('jobData');
            const parse = JSON.parse(jobID);
            this.setState({ id: parse.id})
            //alert(JSON.stringify(this.state.data));
            console.log(parse.id, '---> job ID')
            axios.get(`http://production.myquickshift.com/app_api/applied_jobs_api/${this.state.id}`)
            .then((response) => {
              console.log(response.data.singleJobb.job_title, "------> console log Job Decription")
              this.setState({
                  isLoading: false,
                  data: response.data,

                  job_title: response.data.singleJobb.job_title,
                  Address: response.data.singleJobb.Address,
                  prezi_quotes: response.data.singleJobb.prezi_quotes,
                  job_description: response.data.singleJobb.job_description,
                  job_location: response.data.singleJobb.job_location,
                  job_category: response.data.singleJobb.job_category,
                  salary_offer: response.data.singleJobb.salary_offer,
                  total_days_for_hiring: response.data.jobs[0].total_days_for_hiring,
                  per_hour_salary: response.data.jobs[0].per_hour_salary
             })
          }, (error) => {
            console.log(error,"------> console log Job Description error");
          });
          
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
        return (
            <Container>
                <ScrollView>
                    <Content style={{paddingTop: '2%'}}>
                    <Card transparent style={styles.cardStyle}>
                        <CardItem cardBody>
                            <Thumbnail source={{uri: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}} />
                            
                        <Left>
                            <Body style={{marginTop: 2, marginLeft: "4%"}}>
                                
                                <Text note style={{fontSize: 10}}>Tomorrow at 8:00 AM - 10:00 AM </Text>
                                <Text style={{fontSize: 14}}>{this.state.job_title}</Text>
                                <Text note style={{fontSize: 10}}>{this.state.Address}</Text>
                                <Text note style={{fontSize: 10}}>${this.state.per_hour_salary} per hour</Text>

                            </Body>
                        </Left>
                    </CardItem>
                </Card>
                
                <Card transparent style={{borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
                <Text style={{fontSize: 14, marginLeft: "1%"}}>Shifts ({this.state.total_days_for_hiring})</Text>
                    
                <CardItem style={{marginTop: "-3%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                    
                        
                    <Body style={{marginRight: "-2%", marginTop: '1%'}}>
                        
                        <Text style={{fontSize: 10}}>Location: {this.state.job_location}</Text>
                    </Body>

                    <Text style={{marginRight: "2%"}}>|</Text>

                    <Body style={{marginRight: "-2%", marginTop: '1%'}}>
                        <Text style={{fontSize: 10}}>Category: {this.state.job_category}</Text>
                    </Body>

                    <Text style={{marginRight: "2%"}}>|</Text>

                    <Body style={{marginTop: '1%'}}>
                        <Text style={{fontSize: 10}}>Total Pay: ${this.state.salary_offer}</Text>
                    </Body>

                    </CardItem>
                </Card>

                <Card transparent style={{marginTop: "-3%", borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
                        <CardItem style={{ marginTop: "1%", marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                            <Body>
                                <Text style={{fontSize: 14}}>Prerequisite (If any)</Text>
                                <Text note style={{fontSize: 10}}>
                                    {this.state.prezi_quotes}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
        
                    <Card transparent style={{marginTop: "-3%"}}>
                        <CardItem style={{ marginTop: "1%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                            <Body>
                                <Text style={{fontSize: 14}}>Description</Text>
                                <Text note style={{fontSize: 10}}>
                                    {this.state.job_description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

            
            <View style={[styles.button, {marginBottom: '4%', marginLeft: '2%', marginRight: '4%'}]}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ApplyJob')} style={{width: '100%', marginLeft: '1%', marginTop: '2%'}}>
                    <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Text style={[styles.textSign, {color: '#ffffff'}]}>Apply now!</Text>
                    </LinearGradient>
                </TouchableOpacity> 
            </View>

            </Content>
                </ScrollView>
                
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
        width: "100%",
        height: 50,
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
