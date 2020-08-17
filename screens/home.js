import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Platform,
} from 'react-native';

// Components
import Header from '../components/header';
import Updates from '../components/updatesList';
import NavigationButton from '../components/navigationButton';
import SocialMedia from '../components/socialMedia';

// Text/data imports
import strings from '../assets/strings';
import assignData from '../api/assignData';
import { ENDPOINTS } from '../api/endpoints';
import PLATFORMS from '../api/constants/socialMedia';

// Styles
import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import * as Colors from '../styles/colors';

const Home = ({navigation}) => {
  const [socialMediaInfo, setSocialMedInfo] = useState([]);

  useEffect(() => {
    assignData(ENDPOINTS.socials, setSocialMedInfo, PLATFORMS);
  }, []);

  // App layout
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.lightBlue}>
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
        <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
              <Text style={styles.topIntroText}>{strings.home.upperTitle}</Text>
              <Text style={styles.topTitleText}>{strings.home.lowerTitle}</Text>
          </View>

          {/* Body of Home Screen */}

          {/* Updates section */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {strings.home.updatesInfo.title}
              </Text>
              <Text style={styles.sectionDescription}>
                {strings.home.updatesInfo.description}
              </Text>
              <Updates navigation={navigation} />
            </View>

            {/* History Section */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                {strings.home.history.title}
              </Text>
              <Text style={styles.sectionDescription}>
                {strings.home.history.description}
              </Text>
            </View>

            {/* Navigation to history modules*/}
            <View style={styles.navigationSection}>
              {/* Courses Navigation */}
              <NavigationButton
                navigation={navigation}
                title={strings.courses.title}
                screenName={'Courses'}
              />

              {/* Participants Navigation */}
              <NavigationButton
                navigation={navigation}
                title={strings.participants.title}
                screenName={'Participants'} 
              />

              {/* Artist Histories Navigation */}
              <NavigationButton
                navigation={navigation}
                title={strings.artistHistories.title}
                screenName={'Artist Histories'}
              />

              {/* Variations on the HHX Navigation */}
              <NavigationButton 
                navigation={navigation}
                title={strings.variations.title}
                screenName={strings.variations.screenName}  
              />
            </View>

            {/* Social Media Section */}
            <View style={styles.sectionContainer}>
              <SocialMedia platforms={socialMediaInfo} />
            </View>

            {/* Contact */}
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>
                Contact Us
              </Text>
              <Text style={styles.sectionDescription}>
                Want to get in touch with the Hip Hop Xpress! Contact us below.
              </Text>
              <NavigationButton
                navigation={navigation}
                title={'Contact Us'}
                screenName={'Contact'}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.LIGHT_BLUE,
  },
  topImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topIntroText: {
    paddingTop: 40,
    color: Colors.WHITE,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.SUBHEADER,
  },
  topTitleText: {
    marginTop: 10,
    marginBottom: 5,
    color: Colors.WHITE,
    fontSize: 40,
    textAlign: 'center',
    fontFamily: Fonts.HEADER,
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
  },
  body: {
    paddingVertical: 20,
    marginBottom: 40,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: Colors.ILLINI_BLUE,
    marginBottom: 18,
  },
  sectionDescription: {
    fontFamily: Fonts.BODY,
    marginTop: 0,
    marginBottom: 25,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.WHITE,
  },
  busImage: {
    width: screen.width,
    height: 250,
    flex: 1,
  },
  navigationSection: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  navButton: {
    paddingVertical: 15,
    marginVertical: -1,
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
});

export default Home;
