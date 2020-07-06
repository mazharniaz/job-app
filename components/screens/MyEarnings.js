import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-spinkit';

export default class MyEarnings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            user_id: '',
            data: {},

            job_title: '',
            count_salary: '',
            per_hour_salary: '',
            totalHours: ''
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

          axios.get(`http://production.myquickshift.com/app_api/myearnings_api/${this.state.user_id}`)
          .then((response) => {
            console.log(response.data.job_title, "------> console log Candidate My Earnings")
            this.setState({
                isLoading: false,
                data: response.data,
                job_title: response.data.job_title,
                count_salary: response.data.count_salary,
                per_hour_salary: response.data.working_details.per_hour_salary,
                totalHours: response.data.totalHours

           })
        }, (error) => {
          console.log(error,"------> console log Candidate My Earnings error");
        });
        
        } catch (error) {
          alert(error)
        }
      };

    // earningData() {

    //         return (
                
    //         )
    //     }

    render(navigation) {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Spinner type='FadingCircleAlt' color='#0066ff' />
                </View>
            )
        } else {

        return (
            <ScrollView>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Job Title</DataTable.Title>
                        <DataTable.Title>Per Hour</DataTable.Title>
                        <DataTable.Title>T. Hours</DataTable.Title>
                        <DataTable.Title numeric>T. Earnings</DataTable.Title>
                    </DataTable.Header>   
                    <DataTable.Row>
                        <DataTable.Cell>{this.state.job_title}
                            {this.state.job_title.length < 12
                                ? `${this.state.job_title}`
                                : `${this.state.job_title.substring(0, 12)}...`}
                        </DataTable.Cell>
                        <DataTable.Cell>${this.state.per_hour_salary}</DataTable.Cell>
                        <DataTable.Cell>{this.state.totalHours}</DataTable.Cell>
                        <DataTable.Cell numeric>${this.state.count_salary}</DataTable.Cell>
                    </DataTable.Row> 
                </DataTable>
            </ScrollView>
        )
      }
    }
}
