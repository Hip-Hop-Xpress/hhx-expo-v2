import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';

import * as Fonts from '../styles/fonts';

/**
 * A single component linking to an individual artist's page 
 * that was previously featured in HHX.
 * 
 * @param {Object} navigation navigation object from the Featured Stack
 * @param {string} name        name of artist
 * @param {string} date        date the artist was featured
 * 
 * These next props are simply passed to the artist page; they are not used in this component
 * @param {string} bio            body paragraphs describing the artist
 * @param {string} headerImageUrl url for header image
 * @param {Array}  socials    hold's all artist's social media platforms
 */
const ArtistComponent = ({navigation, name, date, bio, socials}) => {
  const artist = (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.touchable}
      onPress={
        () => 
          navigation.navigate('Past Featured Artist', {
            name: name,
            date: date,
            bio: bio,
            socials: socials,
          })
      }
    >
      <View style={[styles.artistContainer]}>
        <Image
          style={styles.artistImage}
          // TODO: give each artist a separate image
          source={require('../assets/featured/default/default_profile.jpg')}
        />
        <Text style={styles.artistName}>{name}</Text>
        <Text style={styles.artistDate}>{date}</Text>
      </View>
    </TouchableOpacity>
  );

  return artist;
};

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;

const artistContainerPadding = 40;
const artistImageHeight = height / 5;
const artistImageWidth = width / 2 - artistContainerPadding * 1.5;

/*
  These styles were used to mimic the Spotify artists page
*/
const styles = StyleSheet.create({
  artistContainer: {
    width: width / 2 - 1,
    padding: 40,
  },
  artistImage: {
    alignSelf: 'center',
    width: artistImageWidth,
    height: artistImageHeight,
    borderRadius: 100,
    marginBottom: 20,
  },
  artistName: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginVertical: 5,
    fontFamily: Fonts.KARLA_REGULAR,
  },
  artistDate: {
    color: 'lightgray',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontFamily: Fonts.KARLA_BOLDITALIC,
  },
  touchable: {
    backgroundColor: 'black',
  }
});

export default ArtistComponent;
