import React, { Component } from 'react';
import { 
    View, 
    Button,
    Image,
    StyleSheet
} from 'react-native';
import { Container, Content, Card, CardItem, Body, Text, Thumbnail, Left, Right } from 'native-base';
import firebase from '../firebase/firbaseconf';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-spinkit';

export default class NotificationScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        user_id: '',
        value: ''
      }
    }    

    componentDidMount() {
      this.getNotification()
    }

    getNotification = async (user_id) => {

      try {
        const user = await AsyncStorage.getItem('user');
        const parse = JSON.parse(user);
        this.setState({ user_id: parse.user_id})
        //alert(JSON.stringify(this.state.data));
        console.log(parse.user_id, '---> user')

        const db = firebase.database().ref('user_id_' + this.state.user_id);
        console.log(db, '----> Checkin db')

        const notifications = db.child("app_notification");
        //console.log(notification, '----> Checking notification')

        //const list = messages.orderByKey().startAt('user_id');
    
        notifications.on("value",snapshot => {
            snapshot.forEach(child => {
               child.forEach(subch =>{
                 console.log(subch.val(),"))))((((((")
               })
                console.log(child.val(), '---> chld val()')  

                this.setState({
                  isLoading: false,
                  value: child.val()
                })
                        
                // child.forEach(childsnap => {
                  // console.log(this.state.user_id, '----> ------> user ID')
                  //   let message=    {
                  //       _id: this.state.user_id,
                  //       text: child.val().text,
                  //       createdAt: new Date(child.val().date).getTime(),
                  //       user: {
                  //         _id: child.val().user_id,
                  //         name: child.val().username,
                  //         avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
                  //       }
                  //   }
                  //   console.log(child.val().date,child.val().text, '---> cildsnap')
                  //   this.setState({messages:[...this.state.messages,message]});
              //  })
          })
      })

    } catch (error) {
      alert(error)
    }

  }

  notification_list() {
    // console.log(this.state.value,"////=====")
    // for(let ele of this.state.value){
    //   console.log(ele,"===Atif lund he ")
    // }
    // return this.state.value.map((element, i) => {
    //   console.log(element, '---> element')

    //   let keys = Object.keys(element)
    //   console.log(keys, 'KEYS')


    //  return keys.map((elm, k) => {
    //       return(
    //         <Card style={styles.cardStyle} key={k}>
    //         <CardItem style={{borderRadius: 10}}>
    //         {/* <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2016/01/19/17/48/woman-1149911_960_720.jpg'}} /> */}
              
    //             <Left style={{flex: 1, justifyContent: 'space-between'}}>
    //             <Text style={styles.textStyle}>
    //                {element[elm].text}
    //             </Text>
              
    //             <Text style={styles.timeStyle}>
    //                07:30 pm
    //             </Text>
    //             </Left>
    //         </CardItem>
    //       </Card>
    //       )
    //   })
    // })
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
          <ScrollView>
            {this.notification_list()}
          </ScrollView>  
        )
       }
        
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