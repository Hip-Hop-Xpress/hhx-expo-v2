import React, { useState } from 'react';
import { StatusBar, SafeAreaView, ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';
import Header from '../components/header';
import { LinearGradient } from 'expo-linear-gradient';
import globalStyles from '../styles/global';
import * as Colors from '../styles/colors';
import strings from '../assets/strings';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Contact = ({ navigation }) => {
  const initials = {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Type your message here...',
  };

  const [name, setName] = useState(initials.name);
  const [email, setEmail] = useState(initials.email);
  const [subject, setSubject] = useState(initials.subject);
  const [message, setMessage] = useState(initials.message);

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
              <TextInput
                style={styles.formInput}
                onChangeText={(text) => setName(text)}
                placeholder={initials.name}
                placeholderTextColor={Colors.TRANSPARENT}
                clearTextOnFocus
                returnKeyType="next"
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(text) => setEmail(text)}
                placeholder={initials.email}
                placeholderTextColor={Colors.TRANSPARENT}
                autoCompleteType="email"
                keyboardType="email-address"
                clearTextOnFocus
                returnKeyType="next"
              />

              <TextInput
                style={styles.formInput}
                onChangeText={(text) => setSubject(text)}
                placeholder={initials.subject}
                placeholderTextColor={Colors.TRANSPARENT}
                clearTextOnFocus
                returnKeyType="next"
              />

              <TextInput
                style={{ ...styles.formInput, height: 100, paddingTop: 15 }}
                onChangeText={(text) => setMessage(text)}
                placeholder={initials.message}
                placeholderTextColor={Colors.TRANSPARENT}
                multiline
                numberOfLines={12}
                clearTextOnFocus
                returnKeyType="send"
              />

              <TouchableOpacity
                style={[globalStyles.button, globalStyles.transparent]}
                activeOpacity={0.8}
                onPress={() => {
                  const submission = {
                    name,
                    email,
                    subject,
                    message,
                  };
                  console.log(submission);
                }}
              >
                <Text style={globalStyles.buttonText}>Submit</Text>
              </TouchableOpacity>
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
    marginBottom: 20,
    paddingVertical: 20,
  },
  body: {
    paddingVertical: 20,
    marginBottom: 40,
  },
});

export default Contact;
