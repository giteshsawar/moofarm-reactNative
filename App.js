import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorStack from './NavigatorStack';

export default function App() {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  );
};
