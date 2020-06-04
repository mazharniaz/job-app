import React from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet,
    Image,
    ScrollView,
    intervals,
    TouchableOpacity
} from 'react-native';
import { Card, CardItem, Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Hi John!</Text>
                <Text style={styles.text_tagLine}>What are you looking for?</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.heading}>Popular Candidates</Text>
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
                                        <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
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
                                        <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
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
                                        <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
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
                                        <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
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
                                        <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
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
                                        <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                                            <Text style={[styles.textSign, {color: '#ffffff'}]}>Hire Now!</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                 </View>
                        </Card>
                </ScrollView>
                </View>

                <Text style={styles.heading}>Categories</Text>
                <ScrollView 
                    vertical={true}
                    contentContainerStyle={{ width: `${100 * intervals}%` }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
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
                </ScrollView>
                
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#9c71b3'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
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
          color: '#9c71b3',
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