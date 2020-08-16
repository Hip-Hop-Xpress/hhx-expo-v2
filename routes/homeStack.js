import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from '../screens/home';
import Update from '../screens/update';
import Courses from '../screens/history/courses';
import Participants from '../screens/history/participantsScreen';
import Participant from '../screens/history/participant';
import ArtistHistories from '../screens/history/artistHistoryScreen';
import ArtistHistory from '../screens/history/artistHistory';
import Variations from '../screens/history/variationsScreen';
import Variation from '../screens/history/variation';
import strings from '../assets/strings';
import * as Colors from '../styles/colors';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/stack-navigator/
const UpdateStack = props => {
  const responseDistance = 500;

  const nonLandingScreenOptions = {
    gestureDirection: 'horizontal',
    gestureResponseDistance: responseDistance,
    gestureEnabled: true,
  };

  return (
    <Stack.Navigator
      initialRouteName={strings.home.screenName}
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

      {/* Home Screen */}
      <Stack.Screen
        name={strings.home.screenName}
        component={Home}
        options={{
          gestureDirection: 'horizontal',
          gestureEnabled: true,
          gestureResponseDistance: responseDistance,
          title: null,
          headerShown: false,
        }}
      />

      {/* Update Screens */}
      <Stack.Screen
        name={strings.home.updatesInfo.screenName}
        component={Update}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.home.updatesInfo.headerTitle,
        }}
      />

      {/* Courses Screen */}
      <Stack.Screen
        name={strings.courses.screenName}
        component={Courses}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.courses.title,
          headerShown: false,
        }}
      />

      {/* Artist Histories Screen */}
      <Stack.Screen
        name={strings.artistHistories.screenName}
        component={ArtistHistories}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.artistHistories.title,
          headerShown: false,
        }}
      />

      {/* Artist History Individual Screen */}
      <Stack.Screen
        name={strings.artistHistories.individualScreenName}
        component={ArtistHistory}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.artistHistories.title,
          headerShown: false,
        }}
      />

      {/* Participants Screen */}
      <Stack.Screen
        name={strings.participants.screenName}
        component={Participants}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.participants.title,
          headerShown: false,
        }}
      />

      {/* Participant Individual Screen */}
      <Stack.Screen
        name={strings.participants.individualScreenName}
        component={Participant}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.participants.title,
          headerShown: false,
        }}
      />

      {/* Variations List Screen */}
      <Stack.Screen
        name="Variations"
        component={Variations}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.variations.title,
          headerShown: false,
        }}
      />

      {/* Variations Individual Screen */}
      <Stack.Screen
        name="Variation"
        component={Variation}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.variations.title,
          headerShown: false,
        }}
      />

      {/* Tester Main Screen
      <Stack.Screen
        name="Tester"
        component={Tester}
        options={{
          ...nonLandingScreenOptions,
          headerTitle: strings.variations.title,
        }}
      /> */}

    </Stack.Navigator>
  );
};

export default UpdateStack;
