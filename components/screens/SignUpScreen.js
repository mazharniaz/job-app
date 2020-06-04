import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Picker,
    StatusBar,
    Platform,
    CheckBox,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


const SignUpScreen = ({navigation}) => {

    const [selectedValue, setSelectedValue] = React.useState("");

    const [isSelected, setSelection] = React.useState(false);
    
    const [data, setData] = React.useState({
        email: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    });

    const textInputChange = (val) => {
        if(val.length != 0 ) {
            setData({
                ... data,
                email: val,
                check_textInputChange: true
            })
        } else {
            setData({
                ... data,
                email: val,
                check_textInputChange: false
            }) 
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ... data,
            password: val, 
        })
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ... data,
            confirm_password: val, 
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ... data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ... data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }
    
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#9c71b3' barStyle='light-content' />

            <View style={styles.header}>
                <Text style={styles.text_header}>Sign Up</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color="#9c71b3"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize='none'
                        onChangeText={(val) => textInputChange(val)}
                    />
                    
                    {data.check_textInputChange ?
                    <Animatable.View animation="bounceIn">
                        <Feather 
                            name="check-circle"
                            size={20}
                            color='#9c71b3'
                        />
                    </Animatable.View>
                    : null}
                </View>

                <Text style={[styles.text_footer, {marginTop: 5}]}>Password</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#9c71b3"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        onChangeText={(val) => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <Feather 
                                name="eye-off"
                                size={20}
                                color='grey'
                            />
                            :
                            <Feather 
                                name="eye"
                                size={20}
                                color='#9c71b3'
                            />
                        }
                    </TouchableOpacity>
                </View>

                <Text style={[styles.text_footer, {marginTop: 5}]}>Confirm Password</Text>

                <View style={styles.action}>
                    <FontAwesome 
                        name="lock"
                        color="#9c71b3"
                        size={20}
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        style={styles.textInput}
                        autoCapitalize='none'
                        secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        onChangeText={(val) => handleConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                        {data.confirm_secureTextEntry ?
                            <Feather 
                                name="eye-off"
                                size={20}
                                color='grey'
                            />
                            :
                            <Feather 
                                name="eye"
                                size={20}
                                color='#9c71b3'
                            />
                        }
                    </TouchableOpacity>
                </View>
                
                <Text style={[styles.text_footer, {marginTop: 10}]}>- Select -</Text>
                <View style={{borderBottomWidth: 1, borderBottomColor: '#f2f2f2'}}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: '100%', color: '#05375a'}}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label=" " value="" />
                        <Picker.Item label="I'm an employer looking to hire" value="key0" />
                        <Picker.Item label="I'm a candidate looking for a job" value="key1" />
                    </Picker>
                </View>

                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <Text style={styles.label}>I agree the term of use</Text>
                </View>

                <View style={styles.button}>
                    <LinearGradient style={styles.signIn} colors={['#a474b2', '#7462b6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                        <Text style={[styles.textSign, {color: '#ffffff'}]}>Sign Up</Text>
                    </LinearGradient>

                    <TouchableOpacity 
                        onPress={() => navigation.navigate('SignInScreen')}
                        style={[styles.signIn, {borderColor: '#9c71b3', borderWidth: 1, marginTop: 8}]}
                    >
                        <Text style={[styles.textSign, {color: '#9c71b3'}]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#9c71b3'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: 7,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#9c71b3',
        fontSize: 16
    },
    action: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 3
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS ==='ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    checkboxContainer: {
        flexDirection: "row",
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
        color: '#9c71b3'
      },
});