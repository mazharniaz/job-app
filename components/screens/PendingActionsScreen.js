import React from 'react';
import { 
    View, 
    Text, 
    Button
} from 'react-native';

export default function PendingActionsScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>No pending Items!</Text>
        </View>
    )
} 