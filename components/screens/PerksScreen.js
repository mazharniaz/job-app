import React from 'react';
import { 
    View, 
    Text, 
    Button,
    StyleSheet
} from 'react-native';

export default function PerksScreen({navigation}) {
    return(
        <View style={{marginLeft: '2%', marginRight: '2%', marginTop: '5%'}}>
            <View>
                <Text style={styles.headingStyle}>Refer your Friends</Text>
                <Text style={styles.descriptionStyle}>You will earn £15 when they complete their first shift. Your friend get a £15 bonus when they complete their first shift.</Text>
            </View>
            <View>
                <Text style={styles.headingStyle}>Get Discounts</Text>
                <Text style={styles.descriptionStyle}>At High Street brands, cinemas, gyms, etc..</Text>
            </View>
            <View>
                <Text style={styles.headingStyle}>New Offers</Text>
                <Text style={styles.descriptionStyle}>MyQuickShift provides a wide range of benefits and discounts to candidates including health and wellbeing promotions and exclusive retail offers. Verified candidates can access these at any time.</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0066ff',
        marginBottom: '2%'
    },
    descriptionStyle: {
        fontSize: 14,
        marginBottom: '5%'
    }
});