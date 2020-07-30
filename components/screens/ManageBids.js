import React, { Component } from 'react';
import { 
    View, 
    Button,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Thumbnail, Left, Right } from 'native-base';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-spinkit';
import moment from "moment";

export default class ManageBids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: {},

            id: '',

            bid_id: ''
        }
    }

    componentDidMount() {
        this._retrieveJobBids();
    }

    _retrieveJobBids = async () => {
        try {
            const jobID = await AsyncStorage.getItem('jobData');
            const parse = JSON.parse(jobID);
            this.setState({ id: parse.id})
            //alert(JSON.stringify(this.state.data));
            console.log(parse.id, '---> job ID')

            axios.get(`http://myquickshift.com/app_api/manage_bids_api/${this.state.id}`)
            .then((response) => {
              console.log(response.data, "------> console log Job Bids")
              this.setState({
                  isLoading: false,
                  dataSource: response.data
             })
          }, (error) => {
            console.log(error,"------> console log Job Bids error");
          });
          
          } catch (error) {
            alert(error)
          }
     }

     _storeBidID = async (bid_id) => {
        try {
            let obj = {
              bid_id: bid_id,
            }
      
            await AsyncStorage.setItem(
              'bid_id', JSON.stringify(obj)        
            );
          } catch (error) {
            alert(error)
          }
     }

     handleBidID(bid_id) {
        this._storeBidID(bid_id) 
        this.props.navigation.navigate('BidsDescription');
     }

     list = () => {
         console.log(this.state.dataSource, '----> DATA SOUCRE')
        return this.state.dataSource.data.map((element, i) => {
            return (
                <TouchableOpacity onPress={() => this.handleBidID(element.bid_id)}>
                            <Card style={styles.cardStyle} key={i}>
                                <CardItem style={styles.cardStyle}>
                                <Thumbnail small source={{uri: element.image }} />
                                
                                    <Left style={{flex: 1, justifyContent: 'space-between'}}>
                                    <Text style={styles.textStyle}>
                                        { element.bidder_name } applied on this job.
                                    </Text>
                                
                                    <Text style={styles.timeStyle}>
                                        {moment(element.time).format("MMMM D, YYYY")}
                                    </Text>
                                    </Left>
                                </CardItem>
                            </Card>
                </TouchableOpacity>
            );
        });
      };
     

    render(navigation) {
        if(this.state.isLoading) {
            return(
                <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
                    <Spinner type='FadingCircleAlt' color='#0066ff' />
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
    cardStyle: {
        borderRadius: 10,
        marginLeft: '2%',
        marginRight: '2%',
        marginBottom: '1%'
    }, 
    textStyle: {
        fontSize: 12,
        marginLeft: '3%'
    },
    timeStyle: {
        fontSize: 10,
    }
});