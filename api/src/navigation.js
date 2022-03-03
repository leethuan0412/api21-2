import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './list';
import watch from './watch';
const Init = () => {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} >
              <Stack.Screen name="List" component={List} />
              <Stack.Screen name="watch" component={watch} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
export default Init;