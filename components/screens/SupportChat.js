import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet,
    KeyboardAvoidingView,
    SafeAreaView,
    Platform,
    Image,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';
//import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import firebase from '../firebase/firbaseconf';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import { ChatScreen } from 'react-native-easy-chat-ui';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';

export default class SupportChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {},
      admin_id: '',
      user_id: '',
      image_data:null,
      useplus:true,
      inverted: true,
      userProfile: {
        id:'',
        avatar:'',
        nickName:""
      },
      messages: [],
      image_name: '',
      image_code: '',

      panelSource: [
        { 
          icon: <Image source={{uri: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80'}} style={{ width: 30, height: 30 }} />,
          title: 'Camera',
        }, {
          icon: <Image source={require('../../assets/facebook.png')} style={{ width: 30, height: 30 }} />,
          title: 'Photo'
        }
      ]
    }
  }

  animatedValue = new Animated.Value(0);

  componentDidMount() {

    Animated.timing(this.animatedValue,
      {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
      }).start();

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
                     if(child.val().hasfiles==1){
                        message = {
                          id: `${new Date().getTime()}`,
                          type: 'image',
                          content: {
                            uri: `https://www.myquickshift.com//public/chatting_files/${child.val().files}`,
                            width: 100,
                            height: 80,
                          }, 
                          targetId:parseInt(child.val().user_id),
                          chatInfo: {
                            avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
                            id: 12345678,
                            nickName: child.val().username
                          },
                          renderTime: true,
                          sendStatus: 0,
                          time: `${new Date().getTime()}`
                        }
                        this.setState({messages:[...this.state.messages, message]},console.log('dfdf', '-->MESSAGES'));
                        message = {
                          id: `${new Date().getTime()}`,
                          type: 'text',
                          content: child.val().text,
                          targetId: parseInt(child.val().user_id),
                          chatInfo: {
                            avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
                            id: 12345678,
                            nickName: child.val().username
                          },
                          renderTime: true,
                          sendStatus: 1,
                          time: child.val().date
                        }
                        this.setState({messages:[...this.state.messages, message]},console.log('dfdf', '-->MESSAGES'));

                      }
                      else{
                      message = {
                        id: `${new Date().getTime()}`,
                        type: 'text',
                        content: child.val().text,
                        targetId: parseInt(child.val().user_id),
                        chatInfo: {
                          avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
                          id: 12345678,
                          nickName: child.val().username
                        },
                        renderTime: true,
                        sendStatus: 1,
                        time: child.val().date
                      }
                      this.setState({messages:[...this.state.messages, message]},console.log('dfdf', '-->MESSAGES'));

                    }
                    /* message = {
                      id: `${new Date().getTime()}`,
                      type: 'text',
                      content: child.val().text,
                      targetId: parseInt(child.val().user_id),
                      chatInfo: {
                        avatar: `https://ui-avatars.com/api/?name=${child.val().username}&rounded=true&background=0066ff&color=ffffff`,
                        id: 12345678,
                        nickName: child.val().username
                      },
                      renderTime: true,
                      sendStatus: 1,
                      time: child.val().date
                    } */
                    
                      //console.log(count, '---> childsnap')
                   //   console.log(message,"***************************************")
                     // count+=1;
                      console.log(this.state.messages)
                //  })
                
            })
        })

       

      } catch (error) {
        alert(error)
      }

    }

    ImagePicker = (fileUri) => {
      ImagePicker.openPicker({
          //multiple: true,
          includeBase64: true
        }).then(images => {
          console.log(images);
  
         // console.log(images.data, '---> BINARY DATA')
  
          let Images = ''
  
          let file = String(images.path).split("/")
          let name = file[file.length-1]
  
          console.log(name,"///////2323223")
          //Images.push(name)
  
          this.setState({
              image_code: images.data,
              image_data:images,
              image_name: name,
              useplus:false
              //filePath: images.data,
              //fileUri: Images,
              //image_code: binaryCode
            });
            
            this.imageMessage();
         // console.log(this.state.image_data, '---> FILE URI')
        });
  }

    chatSend_API(text) {
      
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      axios.post(`http://myquickshift.com/app_api/chat_send_api/${this.state.admin_id}/${this.state.user_id}`, JSON.stringify({
        image_name: this.state.image_name, 
        image_code: this.state.image_code,
        message: text
      }), axiosConfig)
        .then((response) => {
          console.log(response.data, "Chat Send console")
          this.setState({
              isLoading: false,
              useplus:true
        })

      }, (error) => {
        console.log(error,"Chat Send console error!");
      });

    }

    sendMessage = (type, content, isInverted) => {
      this.chatSend_API(content)
      console.log(type, content, isInverted, 'msg')

    }

    imageMessage = (type, content, isInverted) => {
      //this.chatSend_API(content)

      console.log(type, content, isInverted, 'picmsg')
      let messagem = {
        id: `${new Date().getTime()}`,
        type: 'image',
        content: {
          uri:`data:image/gif;base64,${this.state.image_code}`,
          width: 100,
          height: 80,
        }, 
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

    renderPanelRow = (data, index) => {
      return <TouchableOpacity
      key={index}
      style={{ width: 50,
        height: 50,
        marginTop: '5%',
        marginLeft: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20 }}
      activeOpacity={0.7}
      onPress={() => this.ImagePicker()}
    >
      <View style={{ backgroundColor: '#fff', borderRadius: 8, padding: 15, borderColor: '#ccc', borderWidth: StyleSheet.hairlineWidth }}>
        {data.icon}
      </View>
      <Text style={{ color: '#7a7a7a', marginTop: 10 }}>{data.title}</Text>
    </TouchableOpacity>
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
          panelSource={this.state.panelSource}
          renderPanelRow={this.renderPanelRow}
          usePopView={true}
          usePlus={this.state.useplus}
     //   renderImageMessage={this.imageMessage}
          
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