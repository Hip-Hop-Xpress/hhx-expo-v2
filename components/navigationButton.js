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
      style={[styles.navButton, globalStyles.illiniBlue]}
      activeOpacity={0.75}
      onPress={
        () => {navigation.navigate(screenName, {
          navigation: navigation,
        })}
      }>
        <Text style={styles.navButtontext}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navButton: {
    paddingVertical: 15,
    marginVertical: 2,
  },
  navButtontext: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});

export default NavigationButton;