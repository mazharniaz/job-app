import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';
import moment from "moment";

export default class JobBlockerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: {},

            day: '',
            date: '',
            interview_start_timing: '',
            interview_close_timing: '',
            message: ''
        }
    }

    componentDidMount() {
        this._retrieveData()
    }

    _retrieveData = async () => {
        
        try {
          const user = await AsyncStorage.getItem('user');
          const parse = JSON.parse(user);
          this.setState({ user_id: parse.user_id})

          console.log(parse.user_id, '---> user')

          axios.get(`http://myquickshift.com/app_api/interview_show_api/${this.state.user_id}`)
          .then((response) => {
            console.log(response.data, "------> console log Interview Screen")
            this.setState({
                isLoading: false,
                data: response.data,

                day: response.data.interview_list[response.data.interview_list.length-1].day,
                date: response.data.interview_list[response.data.interview_list.length-1].date,
                interview_start_timing: response.data.interview_list[response.data.interview_list.length-1].interview_start_timing,
                interview_close_timing: response.data.interview_list[response.data.interview_list.length-1].interview_close_timing,
                message: response.data.interview_list[response.data.interview_list.length-1].message,
            })
        }, (error) => {
          console.log(error,"------> console log Interview Screen error");
        });
        
        } catch (error) {
          alert(error)
        }
      };

    render(navigation) {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Spinner type='FadingCircleAlt' color='#0066ff' />
                </View>
            )
          } else if(this.state.data === []) {
                return (
                    <View>
                        <Text>
                            Your account is not verified yet. conatact support to schedule interview.
                            Once we approve your account you will be able to apply on jobs.
                        </Text>
                    </View>
                )
          } else {
            return (
                <View style={{marginLeft: '2%', marginRight: '2%', marginTop: '5%'}}>
                    <View>
                        <Text style={styles.headingStyle}>Interview Date {`&`} Time</Text>
                        <Text style={styles.descriptionStyle}>{this.state.day} - {moment(this.state.date).format("MMMM D, YYYY")}</Text>
                    </View>
                    <View>
                        <Text style={styles.headingStyle}>Interview Start Time</Text>
                        <Text style={styles.descriptionStyle}>{this.state.interview_start_timing}</Text>
                    </View>
                    <View>
                        <Text style={styles.headingStyle}>Interview Ent Time</Text>
                        <Text style={styles.descriptionStyle}>{this.state.interview_close_timing}</Text>
                    </View>
                    <View>
                        <Text style={styles.headingStyle}>Message</Text>
                        <Text style={styles.descriptionStyle}>{this.state.message}</Text>
                    </View>
                </View>
            )
          }
        
    }
}

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0066ff',
        marginBottom: '2%'
    },
    descriptionStyle: {
        fontSize: 14,
        marginBottom: '5%'
    }
});