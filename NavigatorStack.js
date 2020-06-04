import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GetOTP from './components/GetOTP';
import VerifyOTP from './components/VerifyOTP';

const Stack = createStackNavigator();
export default function NavigatorStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={GetOTP} />
            <Stack.Screen name="login" component={VerifyOTP} />
        </Stack.Navigator>
    )
} 