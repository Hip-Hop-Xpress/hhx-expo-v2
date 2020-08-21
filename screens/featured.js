import React, { useState, useEffect } from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Components
import Header from '../components/header';
import ArtistBody from '../components/featuredArtistBody';
import FeaturedArtistsList from '../components/featuredArtistsList';
import LoadingIcon from '../components/loadingIcon';

// Data/text imports
import FEATURED_ARTISTS from '../api/constants/featuredArtists';
import { ENDPOINTS } from '../api/endpoints';
import assignData from '../api/assignData';
import strings from '../assets/strings';

// Styles
import globalStyles from '../styles/global';
import featuredStyles from '../styles/featuredStyles';
import * as Colors from '../styles/colors';
/**
 * Screen showing the currently featured artist by HHX, as well as
 * artists that were featured in the past
 * 
 * @param {Object} navigation navigation object from Stack Navigation; lets user
 *                            transfer to individual previously featured artist screens 
 */
const Featured = ({navigation}) => {
  const [featuredArtists, setFeaturedArtists] = useState([]);

  useEffect(() => {
    assignData(ENDPOINTS.featured, setFeaturedArtists, FEATURED_ARTISTS);
  }, []);

  // Artist on featured page must be the "current" artist, as signified by .current member
  const currentArtist = featuredArtists.find(artist => artist.current);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[globalStyles.illiniBlue]}>
        <LinearGradient
            // Background Linear Gradient
            colors={Colors.LIGHT_MEDIUM_BLUE_GRADIENT}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 1000,
            }}
        />
        <Header />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          {featuredArtists.length === 0
            ? <LoadingIcon />
            : 
          (<ArtistBody
            name={currentArtist.name}
            date={currentArtist.date}
            bio={currentArtist.bio}
            socials={currentArtist.socials}
            headerImageUrl={currentArtist.headerImageUrl}
          />)}

          {/* Past artists */}
          {featuredArtists.length > 1 &&
            <View style={featuredStyles.pastArtistsBody}>
              <Text style={featuredStyles.pastArtistsTitle}>
                {strings.featured.pastArtists}
              </Text>
              <View style={featuredStyles.artistsContainer}>
                <FeaturedArtistsList 
                  featuredArtists={featuredArtists} 
                  navigation={navigation}
                />
              </View>
            </View>
          }
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Featured;
