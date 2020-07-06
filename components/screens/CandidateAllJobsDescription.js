import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header, Left, Title, Thumbnail, Card, Body, CardItem, Footer, FooterTab, Button, Badge, Container, Content, Right} from "native-base";
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-spinkit';
import Icon from 'react-native-vector-icons/Ionicons';
import { DataTable } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import moment from "moment";

export default class CandidateAllJobsDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            checkIn: {},
            checkOut: {},

            id: '',
            user_id: '',
            user_id_2: '',

            job_title: '',
            prezi_quotes: '',
            job_description: '',
            image_path: '',
            total_days_for_hiring: '',
            Address: '',
            per_hour_salary: '',
            perday_total_times: '',
            lastCheckinID: '',
            job_location: '',
            job_category: '',
            salary_offer: '',

            checkedInButton: false,
        }
    }

    componentDidMount() {
        this._retrieveCandidateAllJobData();
    }

    _retrieveCandidateAllJobData = async (id, user_id) => {
        
        try {
          const candidate = await AsyncStorage.getItem('CandidateAllJob');
          const parse1 = JSON.parse(candidate);

          const user = await AsyncStorage.getItem('user');
          const parse2 = JSON.parse(user);

          this.setState({ 
                            id: parse1.id,
                            user_id_2: parse1.user_id_2,

                            user_id: parse2.user_id
                        })
          //alert(JSON.stringify(this.state.data));
          //console.log(parse1.id, parse1.user_id_2, parse2.user_id, '---> candidate job')

          axios.get(`http://production.myquickshift.com/app_api/WorkFlowDetail_api/${this.state.id}/${this.state.user_id}`)
          .then((response) => {
            console.log(response.data.image_path, "------> console log All Candidate Jobs")
            this.setState({
                isLoading: false,
                data: response.data,
                job_title: response.data.job_details.job_title,
                prezi_quotes: response.data.job_details.prezi_quotes,
                job_description: response.data.job_details.job_description,
                image_path: response.data.image_path,
                total_days_for_hiring: response.data.working_details[0].total_days_for_hiring,
                Address: response.data.job_details.Address,
                per_hour_salary: response.data.working_details[0].per_hour_salary,
                perday_total_times: response.data.working_details[0].perday_total_times,
                lastCheckinID: response.data.lastCheckinID,
                job_location: response.data.job_details.job_location,
                job_category: response.data.job_details.job_category,
                salary_offer: response.data.job_details.salary_offer
           })
        }, (error) => {
          console.log(error,"------> console log All Candidate jobs retrieve error");
        });
        
        } catch (error) {
          alert(error)
        }
      };

      checkIn_checkOut() {
        return this.state.data.chek_in_out.map((element, i) => {
            console.log(element, '---> element')
            return (
                <DataTable.Row key={i}>
                    <DataTable.Cell>{moment(element.updated_at).format("MMMM D, YYYY")}</DataTable.Cell>
                    <DataTable.Cell numeric>{element.checkin_time}</DataTable.Cell>
                    <DataTable.Cell numeric>{element.checkout_time}</DataTable.Cell>
                </DataTable.Row>
            )
        })
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
                        <CardItem cardBody style={{marginLeft: '4%'}}>
                            <Thumbnail source={{uri: this.state.image_path}} />
                            
                        <Left>
                            <Body style={{marginTop: 2, marginLeft: "4%"}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text note style={{fontSize: 10}}>{this.state.perday_total_times} hours per day</Text>
                                </View>
                                <Text style={{fontSize: 14}}>{this.state.job_title}</Text>
                                <Text note style={{fontSize: 10}}>{this.state.Address}</Text>
                                <Text note style={{fontSize: 10}}>${this.state.per_hour_salary} per hour</Text>

                            </Body>
                        </Left>
                    </CardItem>
                </Card>
                
                <Card transparent style={{borderBottomWidth: 1, marginLeft: "4%", marginRight: "4%"}}>
                <Text style={{fontSize: 12, marginLeft: "1%"}}>Shifts ({this.state.total_days_for_hiring})</Text>
                    
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
                        <CardItem style={{ marginTop: "1%", marginBottom: '2%', marginLeft: "-4%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                            <Body>
                                <Text style={{fontSize: 12}}>Prerequisite (If any)</Text>
                                <Text note style={{fontSize: 10}}>
                                    {this.state.prezi_quotes}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
        
                    <Card transparent style={{marginTop: "-3%"}}>
                        <CardItem style={{ marginTop: "1%", paddingBottom: "2%", backgroundColor: "transparent"}}>
                            <Body>
                                <Text style={{fontSize: 12}}>Description</Text>
                                <Text note style={{fontSize: 10}}>
                                    {this.state.job_description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Date</DataTable.Title>
                            <DataTable.Title numeric>Check In</DataTable.Title>
                            <DataTable.Title numeric>Check Out</DataTable.Title>
                        </DataTable.Header>

                        {
                            this.checkIn_checkOut()
                        }

                    </DataTable>

                </Content>
                </ScrollView>

                
                
            </Container>
        )
      }
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
        marginTop: 30,
        marginLeft:'5%',
        marginBottom: 30
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
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