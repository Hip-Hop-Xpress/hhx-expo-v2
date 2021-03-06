import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from '../components/header';
import UpdatesList from '../components/updatesList';
import strings from '../assets/strings';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import * as Colors from '../styles/colors';

const Updates = ({navigation}) => {
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
      </SafeAreaView>
      {/* Body */}
      <View  style={styles.body}>
        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.titleText}>{strings.updates.title}</Text>
        </View>
        <UpdatesList navigation={navigation} />

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  titleText: {
    fontFamily: Fonts.HEADER,
    marginTop: 5,
    marginBottom: 5,
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
  introText: {
    fontFamily: Fonts.SUBHEADER,
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 16,
    marginBottom: 30,
  },
  body: {
    marginBottom: 0,
    paddingBottom: 140,
    paddingHorizontal: 20,
  },

});

export default Updates;
