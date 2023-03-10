import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import CourseScreen from '../screens/CourseScreen';
import Course1 from '../screens/Course1';
import Course2 from '../screens/Course2';

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CourseScreen} />
        <Stack.Screen name="Course1" component={Course1} />
        <Stack.Screen name="Course2" component={Course2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}