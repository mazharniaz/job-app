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

import { AuthContext } from '../context/Context'

export default function DrawerEmployerContent(props) {

    //const { signOut } = React.useContext(AuthContext);

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
                            onPress={() => {props.navigation.navigate('Home')}}
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
                            onPress={() => {props.navigation.navigate('Profile')}}
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
                            onPress={() => {props.navigation.navigate('MyJobs')}}
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
                            onPress={() => {{props.navigation.navigate('MyEarnings')}}}
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
                            onPress={() => {{props.navigation.navigate('SupportScreen')}}}
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
                            onPress={() => {{props.navigation.navigate('Setting')}}}
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
                    onPress={() => {props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'SignInScreen' }],
                      });}}
                />
            </Drawer.Section>
        </View>
    )
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