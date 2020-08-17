import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import Header from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/global';
import * as Colors from '../styles/colors';

const Contact = ({ navigation }) => {
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
    </>
  );
};

export default Contact;
