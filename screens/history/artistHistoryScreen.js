import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  YellowBox
} from 'react-native';

import ArtistHistoriesList from '../../components/artistHistoriesList';

import strings from '../../assets/strings';

import globalStyles from '../../styles/global';
import * as Fonts from '../../styles/fonts';
import * as Colors from '../../styles/colors';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default function ArtistHistories(props) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
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
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            {/* Text over top image */}
            <View style={styles.topView}>
              <Text style={[styles.topText]}>{strings.artistHistories.title}</Text>
            </View>
          </View>

          {/* Body */}
          <View style={[styles.body]}>

            {/* Subtitle */}
            <Text style={styles.introText}>{strings.artistHistories.subtitle}</Text>

            <ScrollView horizontal>
            {/* Artist History Components Components */}
              <View style={styles.artistHistoriesListContainer}>
                <ArtistHistoriesList navigation={props.navigation}/>
              </View>
            </ScrollView>   
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    height: 180,
    flex: 1,
  },
  topText: {
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
    borderRadius: 20,
    paddingTop: 40,
  },
  introText: {
    fontFamily: Fonts.SUBHEADER,
    textAlign: 'center',
    color: 'white',
    marginHorizontal: 10,
    fontSize: 22,
    marginBottom: 35,
  },
  body: {
    marginBottom: 40,
    paddingBottom: 40,
  },
  artistHistoriesListContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: -25,
  },
});