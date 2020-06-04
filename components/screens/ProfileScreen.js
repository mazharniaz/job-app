import React from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';

export default function ProfileScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            <Avatar.Image 
              source={{
              uri: 'https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg'
            }}
              size={100}
              style={{marginBottom: '1%', marginTop: '4%'}}
            />

            <Text style={{color: '#9c71b3', fontSize: 18}}>John Doe</Text>
            
            <View style={{flexDirection: 'row'}}>
                <Icon 
                    name="md-pin"
                    style={{fontSize: 15, color: '#9c71b3'}}
                />
                <Text style={{marginBottom: '2%', marginLeft: '2%', fontSize: 16, color: '#9c71b3'}}>United States</Text>
            </View>

            <Text style={{textAlign: 'center', fontSize: 12, color: 'grey'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar erat a orci venenatis.
            </Text>

            <View style={{marginLeft: '-46%', marginTop: '5%'}}>
                <Text style={{color: '#9c71b3', fontSize: 18}}>Contact Information</Text>

                <View>
                    <Text style={styles.headingInfo}>EMAIL ADDRESS</Text>
                    <Text style={styles.textInfo}>johndoe@email.com</Text>
                </View>

                <View>
                    <Text style={styles.headingInfo}>PHONE NUMBER</Text>
                    <Text style={styles.textInfo}>+61 235 235 265</Text>
                </View>

                <View>
                    <Text style={styles.headingInfo}>LOCATION</Text>
                    <Text style={styles.textInfo}>XYZ Street United States</Text>
                </View>

                <View>
                    <Text style={styles.headingInfo}>SKYPE</Text>
                    <Text style={styles.textInfo}>john.doe12</Text>
                </View>
            </View>
        </View>

        
    )
} 

const styles = StyleSheet.create({
    headingInfo: {
        color: 'grey',
        marginTop: 10,
        fontSize: 12
    },
    textInfo: {
        fontSize: 12,
        marginBottom: 10,
        color: '#9c71b3'
    }
});