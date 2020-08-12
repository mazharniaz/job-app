import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet,
    Image,
    ScrollView,
    intervals,
    TouchableOpacity,
    Dimensions,
    SafeAreaView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { Card, CardItem, Thumbnail, Container, Content } from 'native-base';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Spinner from 'react-native-spinkit';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            name: ''
        }
    }

    componentDidMount() {
        this._retreieveName();
    }

    _retreieveName = async () => {
        try {
            const name = await AsyncStorage.getItem('ApproveStatus');
            const parse = JSON.parse(name);
            this.setState({
                isLoading: false, 
                name: parse.name,
            })

            console.log(parse.name, '---> ACTIVE STATUS')
          
          } catch (error) {
            alert(error)
          }
    }

    render(navigation) {

    const { width, height } = Dimensions.get('window');


    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#abec9e', '#0066ff']} style={styles.gradient}>
                
        <View style={styles.container}>
            
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#abec9e', '#0066ff']} style={styles.gradient}>
            <SafeAreaView>
            <TouchableOpacity>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Hi {this.state.name}</Text>
                    <Text style={styles.text_tagLine}>What are you looking for?</Text>
                </View>
            </TouchableOpacity>
            </SafeAreaView>
            </LinearGradient>
            
        {/* <SlidingUpPanel ref={c => (this._panel = c)}
            draggableRange={{top: height / 1.25 , bottom: 300}}
            animatedValue={this._draggedValue}
            showBackdrop={true}
        >
          {dragHandler => (
            
            <View style={[styles.container1, {backgroundColor: '#FFFFFF', borderTopLeftRadius: 30, borderTopRightRadius: 30}]}>
            
              <View style={[styles.dragHandler, {borderBottomWidth: 1, borderBottomColor: '#cccccc'}]} {... dragHandler}></View>
            
              
              <Text style={[styles.heading, {paddingTop: '5%'}]}>Popular Candidates</Text>
                 <View style={{marginBottom: '3%'}}>
                 <ScrollView 
                    horizontal={true}
                    contentContainerStyle={{ width: `${100 * intervals}%` }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                >
                    
                        <Card style={styles.card}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
                                    <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={styles.name}>Jonas Mathew</Text>
                                        <Text style={styles.tag}>4.5 stars rating</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <View style={styles.button}>
                                    <TouchableOpacity style={styles.signIn}>
                                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View>
                        </Card>
                        <Card style={styles.card}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
                                    <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={styles.name}>Jonas Mathew</Text>
                                        <Text style={styles.tag}>4.5 stars rating</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <View style={styles.button}>
                                    <TouchableOpacity style={styles.signIn}>
                                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View>
                        </Card><Card style={styles.card}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
                                    <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={styles.name}>Micheal</Text>
                                        <Text style={styles.tag}>4.5 stars rating</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <View style={styles.button}>
                                    <TouchableOpacity style={styles.signIn}>
                                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View>
                        </Card>
                        <Card style={styles.card}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
                                    <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={styles.name}>John Polard</Text>
                                        <Text style={styles.tag}>4.5 stars rating</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <View style={styles.button}>
                                    <TouchableOpacity style={styles.signIn}>
                                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View>
                        </Card>
                        <Card style={styles.card}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
                                    <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={styles.name}>Clay Jensen</Text>
                                        <Text style={styles.tag}>4.5 stars rating</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <View style={styles.button}>
                                    <TouchableOpacity style={styles.signIn}>
                                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View>
                        </Card>
                        <Card style={styles.card}>
                            <CardItem style={styles.cardItemStyle}>
                                <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
                                    <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
                                    <View style={{flex: 1, flexDirection: 'column'}}>
                                        <Text style={styles.name}>Jonas Mathew</Text>
                                        <Text style={styles.tag}>4.5 stars rating</Text>
                                    </View>
                                </View>
                            </CardItem>
                            <View style={styles.button}>
                                    <TouchableOpacity style={styles.signIn}>
                                        <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View>
                        </Card>
                </ScrollView>
            </View>
            
            <Text style={styles.heading}>Categories</Text>
                <Container>
                <Content>
                <ScrollView 
                    vertical={true}
                    contentContainerStyle={{ height: `${100 * intervals}%` }}
                    // showsVerticalScrollIndicator={false}
                    // scrollEventThrottle={200}
                    // decelerationRate="fast"
                    // pagingEnabled
                >
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Plumbing</Text>
                                <Text style={styles.tag}>50+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Mechanic</Text>
                                <Text style={styles.tag}>30+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Electrician</Text>
                                <Text style={styles.tag}>150+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Carpenter</Text>
                                <Text style={styles.tag}>90+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Carpenter</Text>
                                <Text style={styles.tag}>90+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Carpenter</Text>
                                <Text style={styles.tag}>90+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Carpenter</Text>
                                <Text style={styles.tag}>90+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                <Card>
                    <CardItem button style={styles.cardItemStyle}>
                        <View style={styles.thumbTextStyle}>
                            <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
                            <View style={{flex: 1, flexDirection: 'column'}}>
                                <Text style={styles.name}>Carpenter</Text>
                                <Text style={styles.tag}>90+ jobs</Text>
                            </View>
                        </View>
                    </CardItem>
                </Card>
                </ScrollView>
                </Content>
                </Container>
            </View>
          )}
        </SlidingUpPanel> */}
      </View>

      </LinearGradient>
      
        
        
        // <View style={styles.container}>
        //     <View style={styles.header}>
        //         <Text style={styles.text_header}>Hi </Text>
        //         <Text style={styles.text_tagLine}>What are you looking for?</Text>
        //     </View>
        //     <View style={styles.footer}>
        //         <Text style={[styles.heading, {paddingTop: '5%'}]}>Popular Candidates</Text>
        //         <View style={{marginBottom: '3%'}}>
        //         <ScrollView 
        //             horizontal={true}
        //             contentContainerStyle={{ width: `${100 * intervals}%` }}
        //             showsHorizontalScrollIndicator={false}
        //             scrollEventThrottle={200}
        //             decelerationRate="fast"
        //             pagingEnabled
        //         >
                    
        //                 <Card style={styles.card}>
        //                     <CardItem style={styles.cardItemStyle}>
        //                         <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
        //                             <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
        //                             <View style={{flex: 1, flexDirection: 'column'}}>
        //                                 <Text style={styles.name}>Jonas Mathew</Text>
        //                                 <Text style={styles.tag}>4.5 stars rating</Text>
        //                             </View>
        //                         </View>
        //                     </CardItem>
        //                     <View style={styles.button}>
        //                             <TouchableOpacity style={styles.signIn}>
        //                                 <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        //                                     <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
        //                                 </LinearGradient>
        //                             </TouchableOpacity>
        //                          </View>
        //                 </Card>
        //                 <Card style={styles.card}>
        //                     <CardItem style={styles.cardItemStyle}>
        //                         <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
        //                             <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
        //                             <View style={{flex: 1, flexDirection: 'column'}}>
        //                                 <Text style={styles.name}>Jonas Mathew</Text>
        //                                 <Text style={styles.tag}>4.5 stars rating</Text>
        //                             </View>
        //                         </View>
        //                     </CardItem>
        //                     <View style={styles.button}>
        //                             <TouchableOpacity style={styles.signIn}>
        //                                 <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        //                                     <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
        //                                 </LinearGradient>
        //                             </TouchableOpacity>
        //                          </View>
        //                 </Card><Card style={styles.card}>
        //                     <CardItem style={styles.cardItemStyle}>
        //                         <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
        //                             <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
        //                             <View style={{flex: 1, flexDirection: 'column'}}>
        //                                 <Text style={styles.name}>Micheal</Text>
        //                                 <Text style={styles.tag}>4.5 stars rating</Text>
        //                             </View>
        //                         </View>
        //                     </CardItem>
        //                     <View style={styles.button}>
        //                             <TouchableOpacity style={styles.signIn}>
        //                                 <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        //                                     <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
        //                                 </LinearGradient>
        //                             </TouchableOpacity>
        //                          </View>
        //                 </Card>
        //                 <Card style={styles.card}>
        //                     <CardItem style={styles.cardItemStyle}>
        //                         <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
        //                             <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
        //                             <View style={{flex: 1, flexDirection: 'column'}}>
        //                                 <Text style={styles.name}>John Polard</Text>
        //                                 <Text style={styles.tag}>4.5 stars rating</Text>
        //                             </View>
        //                         </View>
        //                     </CardItem>
        //                     <View style={styles.button}>
        //                             <TouchableOpacity style={styles.signIn}>
        //                                 <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        //                                     <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
        //                                 </LinearGradient>
        //                             </TouchableOpacity>
        //                          </View>
        //                 </Card>
        //                 <Card style={styles.card}>
        //                     <CardItem style={styles.cardItemStyle}>
        //                         <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
        //                             <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
        //                             <View style={{flex: 1, flexDirection: 'column'}}>
        //                                 <Text style={styles.name}>Clay Jensen</Text>
        //                                 <Text style={styles.tag}>4.5 stars rating</Text>
        //                             </View>
        //                         </View>
        //                     </CardItem>
        //                     <View style={styles.button}>
        //                             <TouchableOpacity style={styles.signIn}>
        //                                 <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        //                                     <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
        //                                 </LinearGradient>
        //                             </TouchableOpacity>
        //                          </View>
        //                 </Card>
        //                 <Card style={styles.card}>
        //                     <CardItem style={styles.cardItemStyle}>
        //                         <View style={[styles.thumbTextStyle, {paddingBottom: '4%', borderBottomWidth: 1, borderBottomColor: 'grey'}]}>
        //                             <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/12/07/10/57/electrician-1080590_960_720.jpg'}} />
        //                             <View style={{flex: 1, flexDirection: 'column'}}>
        //                                 <Text style={styles.name}>Jonas Mathew</Text>
        //                                 <Text style={styles.tag}>4.5 stars rating</Text>
        //                             </View>
        //                         </View>
        //                     </CardItem>
        //                     <View style={styles.button}>
        //                             <TouchableOpacity style={styles.signIn}>
        //                                 <LinearGradient style={styles.signIn} colors={['#abec9e', '#0066ff']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        //                                     <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
        //                                 </LinearGradient>
        //                             </TouchableOpacity>
        //                          </View>
        //                 </Card>
        //         </ScrollView>
        //         </View>

        //         <Text style={styles.heading}>Categories</Text>
        //         <ScrollView 
        //             vertical={true}
        //             contentContainerStyle={{ width: `${100 * intervals}%` }}
        //             showsHorizontalScrollIndicator={false}
        //             scrollEventThrottle={200}
        //             decelerationRate="fast"
        //             pagingEnabled
        //         >
        //         <Card>
        //             <CardItem button style={styles.cardItemStyle}>
        //                 <View style={styles.thumbTextStyle}>
        //                     <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
        //                     <View style={{flex: 1, flexDirection: 'column'}}>
        //                         <Text style={styles.name}>Plumbing</Text>
        //                         <Text style={styles.tag}>50+ jobs</Text>
        //                     </View>
        //                 </View>
        //             </CardItem>
        //         </Card>
        //         <Card>
        //             <CardItem button style={styles.cardItemStyle}>
        //                 <View style={styles.thumbTextStyle}>
        //                     <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
        //                     <View style={{flex: 1, flexDirection: 'column'}}>
        //                         <Text style={styles.name}>Mechanic</Text>
        //                         <Text style={styles.tag}>30+ jobs</Text>
        //                     </View>
        //                 </View>
        //             </CardItem>
        //         </Card>
        //         <Card>
        //             <CardItem button style={styles.cardItemStyle}>
        //                 <View style={styles.thumbTextStyle}>
        //                     <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
        //                     <View style={{flex: 1, flexDirection: 'column'}}>
        //                         <Text style={styles.name}>Electrician</Text>
        //                         <Text style={styles.tag}>150+ jobs</Text>
        //                     </View>
        //                 </View>
        //             </CardItem>
        //         </Card>
        //         <Card>
        //             <CardItem button style={styles.cardItemStyle}>
        //                 <View style={styles.thumbTextStyle}>
        //                     <Thumbnail small source={{uri: 'https://cdn.pixabay.com/photo/2015/07/11/14/53/plumbing-840835_960_720.jpg'}} />
        //                     <View style={{flex: 1, flexDirection: 'column'}}>
        //                         <Text style={styles.name}>Carpenter</Text>
        //                         <Text style={styles.tag}>90+ jobs</Text>
        //                     </View>
        //                 </View>
        //             </CardItem>
        //         </Card>
        //         </ScrollView>
                
        //     </View>
        // </View>
    )
          
} 

}

// const mapStateToProps = state => ({
//     //count: state.count,
//     isLoading: state.isLoading,
//     userName: state.userName,
//     userToken: state.userToken
//   });
  
//   const ActionCreators = Object.assign(
//     {},
//     {   isLoading: true,
//         userName: null,
//         userToken: null,
//         type: 'LOGIN'
//     }
//   );
//   const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators(ActionCreators, dispatch),
//   });

export default HomeScreen;

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    container1: {
        flex: 1,
        zIndex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
        height: 'auto'
      },
      dragHandler: {
        alignSelf: 'stretch',
        height: 10,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginLeft: '40%'
      },
    
    container : {
        flex: 1,
        backgroundColor: '#0066ff',
        zIndex: 1,
    },

    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        //paddingBottom: 50,
        paddingTop: 120
    },
    footer: {
        flex: 3,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // paddingVertical: 30,
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
        // flex: 1,
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 20
      },
      card: {
        height: 100,
        width: 180,
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
        marginTop: '-3%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    signIn: {
        width: "100%",
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
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