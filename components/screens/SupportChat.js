import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform
} from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import firebase from '../firebase/firbaseconf';
import AsyncStorage from '@react-native-community/async-storage';

  export default class SupportChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            user_id: ''
        }
    }

    // send = messages => {
    //     messages.forEach(item => {
    //         const message = {
    //             text: item.text,
    //             timestamp: firebase.database.ServerValue.TIMESTAMP,
    //             user: item.user
    //         }
    //         this.db.push(message)
    //     });
    // }

    // parse = message => {
    //     const { text, timestamp, user } = message.val();
    //     const { key: _id } = message;
    //     const createdAt = new Date(itemstamp);

    //     return {
    //         _id,
    //         createdAt,
    //         text,
    //         user
    //     }
    // }

    // get = callback => {
    //     this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    // } 

    // get db() {
    //     return firebase.database().ref('messages')
    // }

    // get uid() {
    //     return (firebase.currentUser || {}).uid
    // }

    _retrieveData = async () => {
        
      
    };

    getMessage = async (user_id) => {

        try {
          const user = await AsyncStorage.getItem('user');
          const parse = JSON.parse(user);
          this.setState({ user_id: parse.user_id})
          //alert(JSON.stringify(this.state.data));
          console.log(parse.user_id, '---> user')

          const db = firebase.database().ref('user_id_' + this.state.user_id);
          console.log(db, '----> Checkin db')

          const messages = db.child("messages/user_id_140");
          //console.log(notification, '----> Checking notification')

          //const list = messages.orderByKey().startAt('user_id');
      
          messages.on("value",snapshot => {
              snapshot.forEach(child => {
                  console.log(child.val(), '---> chld val()')  
                          
                  // child.forEach(childsnap => {
                    console.log(this.state.user_id, '----> ------> user ID')
                      let message=    {
                          _id: this.state.user_id,
                          text: child.val().text,
                          createdAt: new Date(child.val().date).getTime(),
                          user: {
                            _id: child.val().user_id,
                            name: child.val().username,
                            avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
                          }
                      }
                      console.log(child.val().date,child.val().text, '---> cildsnap')
                      this.setState({messages:[...this.state.messages,message]});
                //  })
            })
        })

      } catch (error) {
        alert(error)
      }

    }

    componentDidMount() {
        //this._retrieveData();
        this.getMessage();
        //console.log(this.state.user_id, '---> IDIDIDIDID')
        
        // this.setState({
        //   messages: [
        //     {
        //       _id: 1,
        //       text: 'Hello developer!',
        //       createdAt: new Date().getTime(),
        //       user: {
        //         _id: 2,
        //         name: 'React Native',
        //         avatar: 'https://placeimg.com/140/140/any',
        //       },
        //     },
        //   ],
        // })
      }

      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
    

    render(navigation) {
        return(
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                _id: 1,
                }}
          /> 
        )
    }
} 





































// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#f5f5f5',
//       flex: 1
//     },
//     listTitle: {
//       fontSize: 22
//     },
//     listDescription: {
//       fontSize: 16
//     }
//   });



  //import firebaseFunctions from '../firebase/firebaseFunctions'

// export default class SupportChat extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             messages: [],
//         }
//     }

//     componentDidMount() {
//         firebaseFunctions.get(message => this.setState(previousState => {
//             messages.GiftedChat.append(previousState.messages, message)
//         }))
//     }

//     // componentWillMount() {
//     //     Fire.off()
//     // }

//     //   onSend(messages = []) {
//     //     this.setState(previousState => ({
//     //       messages: GiftedChat.append(previousState.messages, messages),
//     //     }))
//     //   }
    

//     render(navigation) {
//         const chat = <GiftedChat messages={this.state.messages} onSend={firebaseFunctions.send} user={this.user} />

//         if(Platform.OS === 'android') {
//             return (
//                 <KeyboardAvoidingView style={{flex: 1}} behaviour='padding' keyboardVerticalOffset={30} enabled>
//                     {chat}
//                 </KeyboardAvoidingView>
//             )
//         }

//         return(
//             <SafeAreaView style={{flex: 1}}>{chat}</SafeAreaView>
//         )
//     }
// } 

// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#f5f5f5',
//       flex: 1
//     },
//     listTitle: {
//       fontSize: 22
//     },
//     listDescription: {
//       fontSize: 16
//     }
//   });