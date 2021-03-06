import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Updates from '../screens/updates';
import Update from '../screens/update';
import * as Colors from '../styles/colors';
import globalStyles from '../styles/global';

const Stack = createStackNavigator();

const UpdateStack = props => {
  const responseDistance = 500;

  return (
    <Stack.Navigator
      initialRouteName="Updates"
      headerMode="screen"
      mode="card"
      gesturesEnabled={true}
      gestureResponseDistance={responseDistance}
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: Colors.LIGHT_BLUE,
          height: 58,
        },
      }}
    >
      
      {/* Updates Screen */}
      <Stack.Screen
        name="Updates"
        component={Updates}
        options={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          gestureResponseDistance: responseDistance,
          title: null,
          headerShown: false,
        }}
      />

      {/* Update Screen */}
      <Stack.Screen
        name="Update"
        component={Update}
        options={{
          gestureDirection: 'horizontal',
          gestureResponseDistance: responseDistance,
          gestureEnabled: true,
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  )
}

export default UpdateStack;