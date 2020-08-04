import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';

import strings from '../assets/strings';
import globalStyles from '../styles/global';
import {componentStyles} from '../styles/historyStyles';
import * as Fonts from '../styles/fonts';

/**
 * Clickable component navigating to individual screen
 * Used in History screens
 * 
 * @param {string} title name or title of event; shown on component
 * @param {Array}  paragraphs list of strings shown on individual screen; passed through navigation
 * @param {Array}  images list of images shown on individual screen; passed through navigation
 * @param {string} screenName name of screen in stack to navigate to
 * @param {Object} navigation navigation object from StackNavigation
 */
const HistoryComponent = ({title, paragraphs, images, screenName, navigation}) => {
  const component = (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen (name=screenName) in stack
        () =>
          navigation.navigate(screenName, {
            title: title,
            paragraphs: paragraphs,
            images: images,
          })
      }>
      <View style={[componentStyles.container, globalStyles.illiniBlue]}>
        <Text style={componentStyles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  return component;
};

export default HistoryComponent;
