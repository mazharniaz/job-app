import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ActiveJobs from './ActiveJobs';
import DraftJobs from './DraftJobs';
import DeactivateJobs from './DeactivateJobs';
import PendingJobs from './PendingJobs'
import RequestStaffScreen from './RequestStaffScreen';

const TopTab = createMaterialTopTabNavigator();

// const RequestStaffStack = createStackNavigator(); 

// const RequestStaffStackScreen = ({navigation}) => (
//     <RequestStaffStack.Navigator>
//         <RequestStaffStack.Screen name="RequestStaff" component={RequestStaffScreen}/>
//     </RequestStaffStack.Navigator>
// );

export default class MyOrdersScreen extends Component {


    render(navigation) {
        return(
            <TopTab.Navigator>
                <TopTab.Screen name="Active" component={ActiveJobs} />
                <TopTab.Screen name="Pending" component={PendingJobs} />
                <TopTab.Screen name="Draft" component={DraftJobs} />
                <TopTab.Screen name="Decline" component={DeactivateJobs} />
            </TopTab.Navigator>
        )
  }
} 