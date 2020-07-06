import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CandidateAllJobs from '../screens/CandidateAllJobs';
import CandidateActiveJobs from '../screens/CandidateActiveJobs';

const TopTab = createMaterialTopTabNavigator();

export default class MyJobs extends Component {
    
    
    
    render(navigation) {
        return(
            <TopTab.Navigator>
                <TopTab.Screen name="Active" component={CandidateActiveJobs} />
                <TopTab.Screen name="All Jobs" component={CandidateAllJobs} />
            </TopTab.Navigator>
        )
    }
} 