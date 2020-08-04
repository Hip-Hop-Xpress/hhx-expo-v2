import React from 'react';
import { View, Text } from 'react-native';
import {descriptionStyles} from '../styles/historyStyles';

/**
 * Paragraphs describing an individual/event for use in History screens
 * 
 * @param {Array} paragraphs list of strings to show in paragraphs 
 */
const Description = ({paragraphs}) => {
  let key = 0;

  const Paragraphs = paragraphs.map(paragraph => (
    <Paragraph
      text={paragraph}
      key={key++}
    />
  ));

  return <>{Paragraphs}</>;
}

/**
 * Single paragraph for display in History screens
 * 
 * @param {string} text string to display about individual/event 
 */
const Paragraph = ({text}) => {
  return (
    <View style={descriptionStyles.paragraph}>
      <Text style={descriptionStyles.paragraphText}>
        {text}
      </Text>
    </View>
  )
}

export default Description;
