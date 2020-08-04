import React from 'react';
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

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

export default function ArtistHistories(props) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.illiniOrange}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            {/* Top image */}
            <Image
              style={styles.topImage}
              source={require('../../assets/images/hhx-bus-art.jpeg')}
            />
            {/* Text over top image */}
            <View style={styles.topView}>
              <Text style={[styles.topText, globalStyles.illiniOrange]}>{strings.artistHistories.title}</Text>
            </View>
          </View>

          {/* Body */}
          <View style={[styles.body]}>

            {/* Subtitle */}
            <Text style={styles.introText}>{strings.artistHistories.subtitle}</Text>

            {/* Artist History Components Components */}
            <View style={styles.artistHistoriesListContainer}>
              <ArtistHistoriesList navigation={props.navigation} />
            </View>
            
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topImage: {
    height: 250,
    flex: 1,
  },
  topText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
  },
  introText: {
    fontFamily: Fonts.MONTSERRAT_REGULAR,
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    fontSize: 22,
    marginBottom: 30,
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
  },
  artistHistoriesListContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
});