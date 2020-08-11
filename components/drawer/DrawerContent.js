import React, { Component } from 'react';
import { 
  View, 
  StyleSheet
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
import AsyncStorage from '@react-native-community/async-storage';
import SignInScreen from '../screens/SignInScreen';
import { StackActions, CommonActions } from '@react-navigation/native';

import { AuthContext } from '../context/Context'

export default class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            image: '',
            name: '',
            city: '',
            county: ''
        }
    }

    componentDidMount() {
        this._retreieveApproveStatus();
    }

    _retreieveApproveStatus = async () => {
        try {
            const Is_Active = await AsyncStorage.getItem('ApproveStatus');
            const parse = JSON.parse(Is_Active);
            this.setState({ 
                isLoading: false,
                image: parse.image,
                name: parse.name,
                city: parse.city,
                county: parse.county
            })

            console.log(parse.name, '---> ACTIVE STATUS')
          
          } catch (error) {
            alert(error)
          }
    }

    //const { signOut } = React.useContext(AuthContext);
    handlePress(){
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
            image: '',
            name: '',
            city: '',
            county: ''
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

   render(props) { 
    
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ... props}>
                <View style={[styles.drawerContent, {marginTop: '-2%'}]}>
                    <View style={[styles.userInfoSection, {backgroundColor: '#0066ff', paddingTop: 10, paddingBottom: 30}]}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: `http://myquickshift.com/public/UserImages/${this.state.image}`
                                }}
                                size={50}
                            />
                            <View style={{flexDirection: 'column', marginLeft: 15}}>
                                <Title style={[styles.title, {color: '#FFFFFF'}]}>{this.state.name}</Title>
                                <Caption style={[styles.caption, {color: '#FFFFFF'}]}>{this.state.city}, {this.state.county}</Caption>
                            </View>
                        </View>
                    </View>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem style={[styles.drawerItem, {marginTop: '-3%'}]}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-add"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Post a job"
                            onPress={() => {this.props.navigation.navigate('RequestStaff')}}
                        />
                        <DrawerItem style={styles.drawerItem}
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
                                name="md-briefcase"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Jobs"
                            onPress={() => {this.props.navigation.navigate('Orders')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-folder-open"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Open Jobs"
                            onPress={() => {this.props.navigation.navigate('Bids')}}
                        />
                        {/* <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-clipboard"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Company Pofile"
                            onPress={() => {this.props.navigation.navigate('CompanyProfile')}}
                        /> */}
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
                            label="Rate"
                            onPress={() => {}}
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
                    onPress={() =>this.handlePress() }
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
    }
});