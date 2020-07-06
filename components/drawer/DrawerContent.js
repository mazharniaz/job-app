import React, { Component } from 'react';
import { 
  View, 
  StyleSheet,
  AsyncStorage
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
import SignInScreen from '../screens/SignInScreen';
import { StackActions, CommonActions } from '@react-navigation/native';

import { AuthContext } from '../context/Context'

export default class DrawerContent extends Component {

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
                                    uri: 'https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg'
                                }}
                                size={50}
                            />
                            <View style={{flexDirection: 'column', marginLeft: 15}}>
                                <Title style={[styles.title, {color: '#FFFFFF'}]}>John Doe</Title>
                                <Caption style={[styles.caption, {color: '#FFFFFF'}]}>XYZ Street, United States</Caption>
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
                                name="md-apps"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Dashboard"
                            onPress={() => {this.props.navigation.navigate('Home')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-list"
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
                                name="md-chatbubbles"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Chat"
                            onPress={() => {this.props.navigation.navigate('Chat')}}
                        />
                        {/* <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-calendar"
                                color={color}
                                size={size}
                            />
                            )}
                            label="All Shifts"
                            onPress={() => {props.navigation.navigate('AllShifts')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-timer"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Pending Actions"
                            onPress={() => {props.navigation.navigate('Pending')}}
                        /> */}
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-thumbs-up"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Rate"
                            onPress={() => {}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-podium"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Company Pofile"
                            onPress={() => {this.props.navigation.navigate('CompanyProfile')}}
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
                        {/* <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-help-buoy"
                                color={color}
                                size={size}
                            />
                            )}
                            label="FAQ"
                            onPress={() => {props.navigation.navigate('FAQ')}}
                        /> */}
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-help-buoy"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Perks"
                            onPress={() => {this.props.navigation.navigate('Perks')}}
                        />
                        <DrawerItem style={styles.drawerItem}
                            icon={({color, size}) => (
                            <Icon 
                                name="md-help-buoy"
                                color={color}
                                size={size}
                            />
                            )}
                            label="Referal"
                            onPress={() => {this.props.navigation.navigate('Referal')}}
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