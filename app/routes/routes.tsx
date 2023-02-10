import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/main/main';

const Stack = createNativeStackNavigator();

export const routes = {
  main: 'Main',
};

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.main}>
        <Stack.Screen name={routes.main} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
