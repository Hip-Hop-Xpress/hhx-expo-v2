import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens/stacks
import HomeStack from './homeStack';
import Projects from '../screens/projects';
import UpdateStack from './updateStack';
import FeaturedStack from './featuredStack';
import Map from '../screens/map';

// Styles
import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import * as Colors from '../styles/colors';

const Tab = createMaterialBottomTabNavigator();

function AppTabs() {
  const iconSize = 24;

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.ILLINI_BLUE}
      inactiveColor={Colors.WHITE}
      labeled={true}
      barStyle={[styles.navigator, globalStyles.mediumBlue]}>

      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={iconSize} />
          ),
        }}
      />

      {/* Projects Screen */}
      <Tab.Screen
        name="Projects"
        component={Projects}
        options={{
          tabBarLabel: 'Projects',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="wrench"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />    

      {/* Featured Screen */}
      <Tab.Screen
        name="Featured"
        component={FeaturedStack}
        options={{
          tabBarLabel: 'Featured',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="fire" color={color} size={iconSize} />
          ),
        }}
      />

      {/* Updates Screen */}
      <Tab.Screen
        name="Updates"
        component={UpdateStack}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={iconSize} />
          ),
        }}
      />

      {/* Map Screen */}
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="map-marker"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigator: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    paddingBottom: 0,
    height: 52,
  },
});

export default AppTabs;
