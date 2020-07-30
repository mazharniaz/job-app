import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Textarea } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { DataTable } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import moment from "moment";

export default class ReferalScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {},

      user_id: '',

      refferal_email: '',
      message: '',

      referalData: {}
    }
  }

  componentDidMount() {
    this._retreiveUserID()
  }
  
  _retreiveUserID = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const parse = JSON.parse(user);
      this.setState({ user_id: parse.user_id})

      console.log(parse.user_id, '---> user')

      axios.get(`http://myquickshift.com/app_api/refferal_list/${this.state.user_id}`)
          .then((response) => {
            console.log(response.data, "------> console log Referal List")
            this.setState({
                isLoading: false,
                referalData: response.data,
           })
           //console.log(this.state.referalData, "------> console log Referal List")
        }, (error) => {
          console.log(error,"------> console log Referal List error");
        });

    } catch (error) {
      alert(error)
    }
  };

  referalList() {

    return this.state.referalData.refferal_list.map((element, i) => {
      console.log(element, '---> element')
      return (
          <DataTable.Row key={i}>
              <DataTable.Cell>{moment(element.updated_at).format("MMMM D, YYYY")}</DataTable.Cell>
              <DataTable.Cell>{element.refferal_email}</DataTable.Cell>
              <DataTable.Cell numeric>{element.staus}</DataTable.Cell>
          </DataTable.Row>
      )  
    })   
   
  }

  referalPost(refferal_email, message) {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

    console.log(refferal_email, message, "------->>>")
        axios.post(`http://myquickshift.com/app_api/reffferal_post_api/${this.state.user_id}`, JSON.stringify({
            refferal_email: refferal_email,
            message: message,
        }),axiosConfig)
        .then((response) => {
            console.log(response.data, " DATA RESPONSE ====>")
            this.setState({
                isLoading: true,
                data: response.data
        })
        if(response.data.message === 'Refferal send') {
          alert('Refferal send successfully!')
        }
        }, (error) => {
                console.log(error,"///////////////////////////////////");
        });
  }

  handleSend() {
    this.referalPost(this.state.refferal_email, this.state.message);
    this._retreiveUserID();
  }
  
  render(navigation) {

    if(this.state.isLoading) {
      return(
          <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
              <Spinner type='FadingCircleAlt' color='#0066ff' />
          </View>
      )
    } else {

    return(
        <Container>
        <Content style={styles.content}>
          <Form style={styles.formStyle}>
            <Item stackedLabel>
              <Label style={styles.labelStyle}>Your friend email</Label>
              <Input onChangeText={text => this.setState({refferal_email: text})} />
            </Item>
            <Item stackedLabel style={styles.ItemStyle}>
              <Label style={styles.labelStyle}>Message</Label>
              <Textarea rowSpan={5} style={{width: '100%'}} onChangeText={text => this.setState({message: text})} />
            </Item>
            <View style={styles.button}>
                <TouchableOpacity style={styles.updateBtn} onPress={() => this.handleSend()}>
                    <LinearGradient style={styles.updateBtn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Text style={[styles.textUpdate, {color: '#ffffff'}]}>Send</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
          </Form>

          <DataTable>
              <DataTable.Header>
                  <DataTable.Title>Date</DataTable.Title>
                  <DataTable.Title>Email</DataTable.Title>
                  <DataTable.Title numeric>Status</DataTable.Title>
              </DataTable.Header>  

              {
                this.referalList()
              }

          </DataTable>
        </Content>
      </Container>
    )
   }
  }
} 

const styles = StyleSheet.create({
    content: {
        marginTop: '5%'
    },
    button: {
        alignItems: 'center',
        marginTop: 30,
        marginLeft:'5%',
        marginBottom: 30
      },
      updateBtn: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
      },
      textUpdate: {
        fontSize: 18,
        fontWeight: 'bold'
      },
    ItemStyle: {
        marginBottom: '2%'
    },
    formStyle: {
        marginRight: '5%'
    },
    labelStyle: {
        fontSize: 16,
        color: '#0066ff'
    },
});