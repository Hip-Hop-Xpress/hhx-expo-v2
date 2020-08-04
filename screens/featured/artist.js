import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

import FeaturedArtistBody from '../../components/featuredArtistBody';

import globalStyles from '../../styles/global';
import featuredStyles from '../../styles/featuredStyles';

/**
 * Featured artist screen for a previously/past featured artist
 * 
 * @param {Object} props all data passed to the artist body
 */
const Artist = props => {
  const {name} = props.route.params;
  const {date} = props.route.params;
  const {headerImageUrl} = props.route.params;
  const {bio} = props.route.params;
  const {socials} = props.route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={featuredStyles.screen}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          {/* Screen body */}
          <FeaturedArtistBody
            name={name}
            date={date}
            title={title}
            bio={bio}
            headerImageUrl={headerImageUrl}
            socials={socials}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Artist;
