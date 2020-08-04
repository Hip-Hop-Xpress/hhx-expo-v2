import React from 'react';
import {View, Text, Image} from 'react-native';

import SocialMedia from './socialMedia';

import globalStyles from '../styles/global';
import featuredStyles from '../styles/featuredStyles';

import strings from '../assets/strings';

/**
 * Shows a featured artist's information
 * @param {string} name           name of artist
 * @param {string} date           date the artist was featured
 * @param {string} bio            body paragraphs describing the artist
 * @param {string} headerImageUrl url for header image
 * @param {Array}  socials        holds all artist's social media platforms
 */
const ArtistBodyContent = ({name, date, bio, socials, headerImageUrl}) => {
  return (
    <View style={[featuredStyles.body, globalStyles.illiniBlue]}>
    
      {/* Title */}
      <View style={featuredStyles.title}>
        <Text style={featuredStyles.titleText}>
          {name}
        </Text>
        {/* Artist image */}
        <Image
          style={featuredStyles.artistImage}
          source={{ uri: headerImageUrl }}
        />
        <Text style={featuredStyles.dateText}>
          {date}
        </Text>
      </View>

      {/* Social Media Container */}
      <View style={globalStyles.illiniBlue}>
        <SocialMedia platforms={socials} />
      </View>

      {/* Bio */}
      <View style={[globalStyles.illiniBlue, featuredStyles.bioContainer]}>
        <Text style={featuredStyles.bioTitle}>About</Text>
        <Text style={featuredStyles.bioBody}>{bio}</Text>
      </View>

    </View>
  );
}

export default ArtistBodyContent;
