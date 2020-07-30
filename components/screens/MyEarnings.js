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
            dataSource: {},

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
          console.log(parse.user_id, '---> user')

          axios.get(`http://myquickshift.com/app_api/myearnings_api/${this.state.user_id}`)
          .then((response) => {
            console.log(response.data.data, "------> console log Candidate My Earnings")
            this.setState({
                isLoading: false,
                dataSource: response.data,

           })
        }, (error) => {
          console.log(error,"------> console log Candidate My Earnings error");
        });
        
        } catch (error) {
          alert(error)
        }
      };

    earningData() {



        
        return this.state.dataSource.map((element, i) => {
            console.log(element, '---> element')

            let keys = Object.keys(element)
            console.log(keys, 'KEYS')


           return keys.map((elm, k) => {
                return(
                    <DataTable.Row key={k}>
                        <DataTable.Cell>{element[elm].jobs.job_title}</DataTable.Cell>
                        <DataTable.Cell>£{element[elm].workingDetails.per_hour_salary}</DataTable.Cell>
                        <DataTable.Cell>{element[elm].workHours}</DataTable.Cell>
                        <DataTable.Cell numeric>{element[elm].workHours * element[elm].workingDetails.per_hour_salary}</DataTable.Cell>
                    </DataTable.Row>
                )
            })

        })

        //     var result = Object.keys(element).map((key) => [Number(key), element[key]]);
        //     console.log(result, 'RESULT LELP')
        //     result.map((elm, k) => {
        //         console.log(elm[0], 'DUSRA ELEM')

        //         return (
        //             <DataTable.Row key={k}>
        //                 {console.log(element[elm[k-1]], 'LALALALLA',k)}
        //                 <DataTable.Cell>abc</DataTable.Cell>
        //                 <DataTable.Cell>abc</DataTable.Cell>
        //                 <DataTable.Cell>abc</DataTable.Cell>
        //                 <DataTable.Cell numeric>abc</DataTable.Cell>
        //             </DataTable.Row>
        //         )  
        //     })
            
         //  })
            
        
        
//          Object.keys(this.state.dataSource.data).forEach((element, i) => {
//               console.log(this.state.dataSource.data[element].jobs.job_title, '---> element')
//             return (
                
//                 // <DataTable.Row key={i}>
//                 //     {console.log('DATA TABLE ROW')}
//                 //     <DataTable.Cell>{this.state.dataSource.data[element].jobs.job_title}
//                 //         {this.state.dataSource.data[element].jobs.job_title.length < 12
//                 //             ? `${this.state.dataSource.data[element].jobs.job_title}`
//                 //             : `${this.state.dataSource.data[element].jobs.job_title.substring(0, 12)}...`}
//                 //     </DataTable.Cell>
//                 //     <DataTable.Cell>${this.state.dataSource.data[element].workingDetails.per_hour_salary}</DataTable.Cell>
//                 //     <DataTable.Cell>{this.state.dataSource.data[element].workHours}</DataTable.Cell>
//                 //     <DataTable.Cell numeric>${this.state.dataSource.data[element].workHours} * {this.state.dataSource.data[element].workingDetails.per_hour_salary}</DataTable.Cell>
//                 // </DataTable.Row>


//             )
//         })
    }

    render(navigation) {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Spinner type='FadingCircleAlt' color='#0066ff' />
                </View>
            )
        } else {
            console.log('RETURN')

        return (
            
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Job Title</DataTable.Title>
                        <DataTable.Title>Per Hour</DataTable.Title>
                        <DataTable.Title>T. Hours</DataTable.Title>
                        <DataTable.Title numeric>T. Earnings</DataTable.Title>
                    </DataTable.Header>

                    { 
                        this.earningData()

                    }
                      
                </DataTable>
            
        )
      }
    }
}
