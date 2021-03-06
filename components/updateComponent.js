import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import * as Colors from '../styles/colors';

const UpdateComponent = props => {
  const update = (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={
        // Send props to screen in stack
        () =>
          props.navigation.navigate('Update', {
            title: props.title,
            author: props.author,
            body: props.body,
            date: props.date,
            lastUpdated: props.lastUpdated
          })
      }>
      <View style={[styles.updateContainer, globalStyles.transparent]}>
        <Text style={styles.updateTitle}>{props.title}</Text>
        <Text style={styles.updateAuthor}>{props.author}</Text>
        <Text style={styles.updateDate}>{props.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return update;
};

const styles = StyleSheet.create({
  updateContainer: {
    marginVertical: 5,
    paddingHorizontal: 12,
    paddingTop: 12,  // 12
    paddingBottom: 20,  // 20
    borderRadius: 20,
  },
  updateTitle: {
    fontFamily: Fonts.HEADER,
    fontSize: 19,
    textAlign: 'left',
    color: Colors.ILLINI_BLUE,
    marginBottom: 10,
  },
  updateAuthor: {
    fontFamily: Fonts.SUBHEADER,
    fontSize: 18,
    textAlign: 'right',
    color: Colors.ILLINI_BLUE_TRANSLUCENT,
  },
  updateDate: {
    fontFamily: Fonts.SUBHEADER,
    fontSize: 17,
    textAlign: 'right',
    color: Colors.WHITE,
  },
});

export default UpdateComponent;
