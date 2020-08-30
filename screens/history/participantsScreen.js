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

// Components
import ParticipantsList from '../../components/participantsList';

// Text/styles
import strings from '../../assets/strings';
import globalStyles from '../../styles/global';
import * as Fonts from '../../styles/fonts';
import * as Colors from '../../styles/colors';

// Supresses visual warnings
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

/**
 * Screen showcasing all participants who founded and helped build the Hip Hop Xpress
 * 
 * @param {Object} navigation object from StackNavigation allowing users 
 *                            to navigate to individual participant screens
 */
const Participants = ({navigation}) => {
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
            {/* Text over top image */}
            <View style={styles.topView}>
              <Text style={[styles.topText]}>{strings.participants.title}</Text>
            </View>

          {/* Body */}
          <View style={[styles.body]}>

            {/* Subtitle */}
            <Text style={styles.introText}>{strings.participants.subtitle}</Text>

            {/* Participant Components */}
            <View style={styles.participantsListContainer}>
              <ParticipantsList navigation={navigation} />
            </View>
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
  participantsListContainer: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
});

export default Participants;
