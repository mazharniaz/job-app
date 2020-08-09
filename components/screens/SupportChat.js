import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform,
    PermissionsAndroid
} from 'react-native';
//import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import firebase from '../firebase/firbaseconf';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import { ChatScreen } from 'react-native-easy-chat-ui';

export default class SupportChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {},
      admin_id: '',
      user_id: '',
      
      inverted: true,
      userProfile: {
        id:'',
        avatar:'',
        nickName:""
      },
      messages: [],
      image_name: '',
      image_code: ''
    }
  }

  componentDidMount() {
    this.getAdminID();
  }

      getAdminID() {
        axios.get(`http://myquickshift.com/app_api/get_admin_id`)
            .then((response) => {
              console.log(response.data, "------> console log get Admin ID")
              this.setState({
                  isLoading: false,
                  data: response.data,

                  admin_id: response.data.admin_id
            })

            this.getMessage()
            
            
          }, (error) => {
            console.log(error,"------> console log get Admin ID error");
          });

    }

        getMessage = async (user_id) => {
      
      
        try {
          
          const user = await AsyncStorage.getItem('user');
          const parse = JSON.parse(user);
          this.setState({ user_id: parse.user_id})
          //alert(JSON.stringify(this.state.data));
          console.log(parse.user_id, '---> user')

          const db = firebase.database().ref('user_id_' + this.state.user_id);
          console.log(db, '----> Checkin db')

          //this.getAdminID()
          console.log(this.state.admin_id, '---> ADMIN ID')

          const messages = db.child(`messages/user_id_${this.state.admin_id}`);
          //console.log(notification, '----> Checking notification')
          console.log(messages,"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
          //const list = messages.orderByKey().startAt('user_id');
          this.setState({
            userProfile: {
              id: this.state.user_id,
              nickName: 'reffer',
              avatar: `https://ui-avatars.com/api/?name=ABC&rounded=true&background=0066ff&color=ffffff`
            }
          })
          messages.on("value",snapshot => {
             let count=0;
              snapshot.forEach((child) => {
                  //console.log(child.val(), '---> chld val()')  
                          
                  // child.forEach(childsnap => {
                    console.log(this.state.user_id, '----> ------> user ID')
                    let message=[]
                      console.log(typeof(child.val().user_id), typeof(this.state.user_id), '-----> USERIDDDDD')
                      message = {
                        id: `${new Date().getTime()}`,
                        type: 'text',
                        content: child.val().text,
                        targetId: parseInt(child.val().user_id),
                        chatInfo: {
                          avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
                          id: 12345678,
                          nickName: 'Test'
                        },
                        renderTime: true,
                        sendStatus: 1,
                        time: child.val().date
                      }
                    
                    
                      //console.log(count, '---> childsnap')
                   //   console.log(message,"***************************************")
                      this.setState({messages:[...this.state.messages, message]},console.log('dfdf', '-->MESSAGES'));
                     // count+=1;
                      console.log(this.state.messages)
                //  })
                
            })
        })

       

      } catch (error) {
        alert(error)
      }

    }

    chatSend_API(text) {
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      axios.post(`http://myquickshift.com/app_api/chat_send_api/${this.state.user_id}/${this.state.admin_id}`, JSON.stringify({
        image_name: this.state.image_name, 
        image_code: this.state.image_code,
        message: text
      }), axiosConfig)
        .then((response) => {
          console.log(response.data, "Chat Send console")
          this.setState({
              isLoading: false,
        })

      }, (error) => {
        console.log(error,"Chat Send console error!");
      });

    }

    sendMessage = (type, content, isInverted) => {
      this.chatSend_API(content)
      console.log(type, content, isInverted, 'msg')
      let messagem = {
        id: `${new Date().getTime()}`,
        type: 'text',
        content: content,
        targetId:this.state.user_id,
        chatInfo: {
          avatar: `https://ui-avatars.com/api/?name=GG&rounded=true&background=0066ff&color=ffffff`,
          id: 12345678,
          nickName: 'Test'
        },
        renderTime: true,
        sendStatus: 0,
        time: `${new Date().getTime()}`
      }

      this.setState({messages:[...this.state.messages, messagem]},console.log(this.state.messages, '-->MESSAGES'));

    }


  render(navigation) {
    return (
      <ChatScreen
        ref={(e) => this.chat = e}
        messageList={this.state.messages}
        //androidHeaderHeight={androidHeaderHeight}
        sendMessage={this.sendMessage}
        userProfile={this.state.userProfile}
        placeholder="Type here.."
        useVoice={false}
      />
    )
  }
}


//   export default class SupportChat extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             admin_id: '',
//             data: {},

//             messages: [],
//             user_id: '',

//             image_name: '',
//             image_code: '',
//             message: ''
//         }
//     }

//     // send = messages => {
//     //     messages.forEach(item => {
//     //         const message = {
//     //             text: item.text,
//     //             timestamp: firebase.database.ServerValue.TIMESTAMP,
//     //             user: item.user
//     //         }
//     //         this.db.push(message)
//     //     });
//     // }

//     // parse = message => {
//     //     const { text, timestamp, user } = message.val();
//     //     const { key: _id } = message;
//     //     const createdAt = new Date(itemstamp);

//     //     return {
//     //         _id,
//     //         createdAt,
//     //         text,
//     //         user
//     //     }
//     // }

//     // get = callback => {
//     //     this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
//     // } 

//     // get db() {
//     //     return firebase.database().ref('messages')
//     // }

//     // get uid() {
//     //     return (firebase.currentUser || {}).uid
//     // }

//     _retrieveData = async () => {
  

      
//     };

//     getAdminID() {
//       axios.get(`http://myquickshift.com/app_api/get_admin_id`)
//           .then((response) => {
//             console.log(response.data, "------> console log get Admin ID")
//             this.setState({
//                 isLoading: false,
//                 data: response.data,

//                 admin_id: response.data.admin_id
//            })

//            this.getMessage();
           
//         }, (error) => {
//           console.log(error,"------> console log get Admin ID error");
//         });

//     }

//     getMessage = async (user_id) => {
      
      
//         try {
          
//           const user = await AsyncStorage.getItem('user');
//           const parse = JSON.parse(user);
//           this.setState({ user_id: parse.user_id})
//           //alert(JSON.stringify(this.state.data));
//           console.log(parse.user_id, '---> user')

//           const db = firebase.database().ref('user_id_' + this.state.user_id);
//           console.log(db, '----> Checkin db')

//           //this.getAdminID()
//           console.log(this.state.admin_id, '---> ADMIN ID')

//           const messages = db.child(`messages/user_id_${this.state.admin_id}`);
//           //console.log(notification, '----> Checking notification')

//           //const list = messages.orderByKey().startAt('user_id');
      
//           messages.on("value",snapshot => {
//               snapshot.forEach(child => {
//                   console.log(child.val(), '---> chld val()')  
                          
//                   // child.forEach(childsnap => {
//                     console.log(this.state.user_id, '----> ------> user ID')
//                       let message=    {
//                           _id: this.state.user_id,
//                           text: child.val().text,
//                           createdAt: new Date(child.val().date).getTime(),
//                           user: {
//                             _id: child.val().user_id,
//                             name: child.val().username,
//                             avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
//                           }
//                       }
//                       console.log(child.val().date,child.val().text, '---> childsnap')
//                       this.setState({messages:[...this.state.messages,message]});
//                 //  })
//             })
//         })

//       } catch (error) {
//         alert(error)
//       }

//     }

//     chatSend_API() {
//       let axiosConfig = {
//         headers: {
//             'Content-Type': 'application/json;charset=UTF-8',
//             "Access-Control-Allow-Origin": "*",
//         }
//       };
//     axios.post(`http://myquickshift.com/app_api/chat_send_api/${this.state.user_id}/${this.state.admin_id}`, JSON.stringify({
//       image_name: this.state.image_name, 
//       image_code: this.state.image_code,
//       message: this.state.message
//     }), axiosConfig)
//       .then((response) => {
//         console.log(response.data, "Chat Send console")
//         this.setState({
//             isLoading: false,
//        })

//     }, (error) => {
//       console.log(error,"Chat Send console error!");
//     });

//     }

//     componentDidMount() {
//       this.getAdminID()
      
      
//         //this._retrieveData();
        
//         //console.log(this.state.user_id, '---> IDIDIDIDID')
        
//         // this.setState({
//         //   messages: [
//         //     {
//         //       _id: 1,
//         //       text: 'Hello developer!',
//         //       createdAt: new Date().getTime(),
//         //       user: {
//         //         _id: 2,
//         //         name: 'React Native',
//         //         avatar: 'https://placeimg.com/140/140/any',
//         //       },
//         //     },
//         //   ],
//         // })
//       }

//       onSend(messages = []) {
//         this.chatSend_API(this.state.image_name, this.state.image_code, this.state.message)
//         this.setState(previousState => ({
//           messages: GiftedChat.append(previousState.messages, messages),
//         }))
//       }
    

//     render(navigation) {
//       if(this.state.isLoading) {
//         return(
//             <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
//                 <Spinner type='FadingCircleAlt' color='#0066ff' />
//             </View>
//         )
//       } else {
//           return(
//             <GiftedChat
//                 messages={this.state.messages}
//                 onSend={messages => this.onSend(messages)}
//                 user={{
//                 _id: 1,
//                 }}
//           /> 
//         )
//       }
        
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