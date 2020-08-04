import React from 'react';

import {
  StyleSheet,
  View,
  Linking,
} from 'react-native';

import {SocialIcon} from 'react-native-elements';

/**
 * Generates individual social media icons from list of platforms
 * @param {Array}  platforms     list of social media platforms
 * @param {string} platform.type specific type ('facebook', 'twitter', etc.)
 * @param {string} platform.url  url linking to social media
 */
const SocialMediaIcons = ({platforms}) => {
  const iconSize = 24;
  let key = 0;

  const Icons = platforms.map(platform => (
    <SocialIcon
      type={platform.type}
      button={true}
      style={styles.socialMediaButton}
      iconSize={iconSize}
      onPress={() => {
        Linking.openURL(platform.url);
      }}
      key={key++}
    />
  ));

  return <>{Icons}</>;
}

/**
 * Renders a list of social media buttons
 * @param {Array} platforms list of social media platforms
 */
const SocialMedia = ({platforms}) => {
  return (
    <View style={styles.socialMediaContainer}>
      <SocialMediaIcons platforms={platforms}/>
    </View>
  );
}

const styles = StyleSheet.create({
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
});

export default SocialMedia;