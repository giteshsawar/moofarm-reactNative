import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetOTP from './components/GetOTP';

const Stack = createStackNavigator();
export default function NavigatorStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={GetOTP} />
        </Stack.Navigator>
    )
} 