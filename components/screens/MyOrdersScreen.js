import React from 'react';
import { 
    View, 
    Text, 
    Button
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import OrderDelivered from '../screens/OrderDelivered';
import OrderProcessing from '../screens/OrderProcessing';
import OrderCancelled from '../screens/OrderCancelled';

const TopTab = createMaterialTopTabNavigator();

export default function MyOrdersScreen({navigation}) {
    return(
        <TopTab.Navigator>
            <TopTab.Screen name="Completed" component={OrderDelivered} />
            <TopTab.Screen name="Processing" component={OrderProcessing} />
            <TopTab.Screen name="Cancelled" component={OrderCancelled} />
        </TopTab.Navigator>
    )
} 