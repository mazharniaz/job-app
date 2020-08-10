import React, { Component } from 'react';
import { 
  View, 
  StyleSheet,
  SafeAreaView
} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { 
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import { AuthContext } from '../context/Context'

export default class DrawerEmployerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            is_active: ''
        }
    }

    //const { signOut } = React.useContext(AuthContext);

    componentDidMount() {
        this._retreieveApproveStatus()
    }

    _retreieveApproveStatus = async () => {
        try {
            const Is_Active = await AsyncStorage.getItem('ApproveStatus');
            const parse = JSON.parse(Is_Active);
            this.setState({ is_active: parse.is_active})

            console.log(parse.is_active, '---> ACTIVE STATUS')
          
          } catch (error) {
            alert(error)
          }
    }

    handlePress() {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'SignInScreen' }],
          });
        this._storeData();
    }

    _storeData = async () => {
        try {
          let obj = {
            email: '',
          }
    
          await AsyncStorage.setItem(
            'user', JSON.stringify(obj)        
          );
        } catch (error) {
          alert(error)
        }
        const user = await AsyncStorage.getItem('user');
        console.log(user, '----------->')
      };

      handleJobNavigation() {
          if(this.state.is_active === "Approved") {
            this.props.navigation.navigate('MyJobs')
          } else {
            this.props.navigation.navigate('JobBlocker')
          }
      }

   render(props) {

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ... props}>
                <View style={[styles.drawerContent, {marginTop: '-2%'}]}>

                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#abec9e', '#0066ff']} style={styles.gradient}>
                    <SafeAreaView>
                    <View style={[styles.userInfoSection, {paddingTop: 10, paddingBottom: 30}]}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2017/09/18/16/11/building-2762241_960_720.jpg'
                                }}
                                size={50}
                            />
                            <View style={{flexDirection: 'column', marginLeft: 15}}>
                                <Title style={[styles.title, {color: '#FFFFFF'}]}>Clay Jensen</Title>
                                <Caption style={[styles.caption, {color: '#FFFFFF'}]}>XYZ Street, LONDON UK</Caption>
                            </View>
                        </View>
                    </View>
                    </SafeAreaView>
                    </LinearGradient>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        
                        <DrawerItem style={[styles.drawerItem, {marginTop: '-3%'}]}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-home"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Home"
                            onPress={() => {this.props.navigation.navigate('Home')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-person"
                                color={color}
                                size={size}
                            />
                            )}
                            label="My Profile"
                            onPress={() => {this.props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-briefcase"
                                color={color}
                                size={size}
                            />
                            )}
                            label="My Jobs"
                            onPress={() => {this.handleJobNavigation()}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-cash"
                                color={color}
                                size={size}
                            />
                            )}
                            label="My Earnings"
                            onPress={() => {this.props.navigation.navigate('MyEarnings')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-help-buoy"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Support"
                            onPress={() => {this.props.navigation.navigate('SupportScreen')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-contacts"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Referal"
                            onPress={() => {this.props.navigation.navigate('Refer')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-settings"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Settings"
                            onPress={() => {this.props.navigation.navigate('Setting')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-star-outline"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Rate App"
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                            name="md-log-out"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => this.handlePress()}
                />
            </Drawer.Section>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingBottom: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'  
    },
    caption: {
        fontSize: 12,
        lineHeight: 12
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 12
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    drawerItem: {
        marginBottom: "-4%",
    },
    gradient: {
        flex: 1
    },
});