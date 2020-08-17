import React, { useState } from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import Header from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/global';
import * as Colors from '../styles/colors';
import strings from '../assets/strings';

const Contact = ({ navigation }) => {
  const [firstName, setFirstName] = useState('First name');
  const [lastName, setLastName] = useState('Last name');

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
            <View style={globalStyles.sectionContainer}>
              <Text style={styles.title}>
                {strings.contact.title}
              </Text>
              <Text style={globalStyles.sectionDescription}>
                {strings.contact.description}
              </Text>
            </View>
            <View style={globalStyles.sectionContainer}>
              <Text style={styles.formTitle}>
                First Name
              </Text>
              <TextInput
                style={styles.formInput}
                onChangeText={(text) => setFirstName(text)}
                value={firstName}
              />

              <Text style={styles.formTitle}>
                Last Name
              </Text>
              <TextInput
                style={styles.formInput}
                onChangeText={(text) => setLastName(text)}
                value={lastName}
              />
              
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    ...globalStyles.sectionTitle,
    color: Colors.WHITE,
    fontSize: 40,
  },
  formTitle: {
    ...globalStyles.sectionTitle,
    color: Colors.WHITE,
    textAlign: 'left',
  },
  formInput: {
    backgroundColor: Colors.TRANSPARENT,
    borderColor: Colors.TRANSPARENT,
    color: Colors.WHITE,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 18,
    height: 50,
    marginBottom: 20,
  },
  body: {
    paddingVertical: 20,
    marginBottom: 40,
  },
});

export default Contact;
