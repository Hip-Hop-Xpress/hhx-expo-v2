import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import strings from '../assets/strings';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

const VariationComponent = ({name, date, description, images, navigation}) => {
  const shownImage = images.filter(image => image.componentImage)[0];
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={
        // Send props to screen in stack
        () =>
          navigation.navigate(strings.variations.individualScreenName, {
            name: name,
            date: date,
            description: description,
            images: images,
          })
      }>
      
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: shownImage.url }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 20,
  },
  image: {
    minHeight: 200,
    opacity: 0.5,
  },
  name: {
    fontFamily: Fonts.HEADER,
    fontSize: 30,
    fontWeight: "bold",
    color: 'lightgray',
  },
  date: {
    fontFamily: Fonts.SUBHEADER,
    fontSize: 18,
    color: 'lightgray',
  }
});

export default VariationComponent;
