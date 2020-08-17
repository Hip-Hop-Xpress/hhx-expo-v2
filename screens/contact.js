import React from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import Header from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/global';
import * as Colors from '../styles/colors';
import strings from '../assets/strings';

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
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View style={{...globalStyles.sectionContainer}}>
              <Text style={globalStyles.sectionTitle}>
                {strings.contact.title}
              </Text>
              <Text style={globalStyles.sectionDescription}>
                {strings.contact.description}
              </Text>
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingVertical: 20,
    marginBottom: 40,
  },
});

export default Contact;
