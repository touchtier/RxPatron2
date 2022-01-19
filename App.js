import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/home';
import ProfileScreen from './src/floorinsight';
import recordscreen from './src/records';

const Stack = createNativeStackNavigator();



const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen } options={{ title: 'Floor Safe'}} />
        <Stack.Screen name="Floor-Insight" component={ProfileScreen}  options={{ title: 'Floor Insight'}} />
        <Stack.Screen name="records" component={recordscreen}  options={{ title: 'Records'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;