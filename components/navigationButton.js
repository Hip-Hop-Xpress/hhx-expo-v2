import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

/**
 * Creates a navigation button used to navigate within a stack
 * 
 * @param {Object} navigation navigation object from StackNavigation
 * @param {string} title text shown on the button
 * @param {string} screenName the screen to navigate to on press 
 */
const NavigationButton = ({navigation, title, screenName}) => {
  return (
    <TouchableOpacity
      style={[globalStyles.button, globalStyles.transparent]}
      activeOpacity={0.8}
      onPress={
        () => {navigation.navigate(screenName, {
          navigation: navigation,
        })}
      }>
        <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navButton: {
    marginVertical: 5,
    paddingHorizontal: 12,
    paddingTop: 12,  // 12
    paddingBottom: 20,  // 20
    borderRadius: 20,
  },
  navButtontext: {
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default NavigationButton;