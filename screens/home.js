import React, { useState, useEffect } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
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
        <Header />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={globalStyles.illiniBlue}>
          <View>
            {/* Bus image */}
            <Image
              style={styles.busImage}
              source={require('../assets/images/hhx_bus_blur_orange.jpg')}
            />
            {/* Text over bus image */}
            <View style={styles.topImage}>
              <Text style={styles.topIntroText}>{strings.home.upperTitle}</Text>
              <Text style={styles.topTitleText}>{strings.home.lowerTitle}</Text>
            </View>
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.ILLINI_BLUE,
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
    color: 'white',
    fontSize: 20,
    fontFamily: Fonts.MONTSERRAT_REGULAR,
  },
  topTitleText: {
    marginTop: 10,
    marginBottom: 15,
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontFamily: Fonts.MONTSERRAT_BLACK,
  },
  body: {
    backgroundColor: 'white',
    paddingVertical: 20,
    marginBottom: 40,
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  sectionTitle: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginBottom: 18,
  },
  sectionDescription: {
    fontFamily: Fonts.KARLA_REGULAR,
    marginTop: 0,
    marginBottom: 25,
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  busImage: {
    width: screen.width,
    height: 250,
    flex: 1,
  },
  navigationSection: {
    marginVertical: 20,
  },
  navButton: {
    paddingVertical: 15,
    marginVertical: -1,
  },
  navButtontext: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
});

export default Home;
