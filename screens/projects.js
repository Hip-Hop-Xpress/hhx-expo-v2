import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// Components and text
import Header from '../components/header';
import ProjectsList from '../components/projectsList';
import strings from '../assets/strings';

// Styles
import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

/**
 * Screen showcasing all Hip Hop Xpress Projects
 */
const Projects = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.lightBlue}>
        <Header />
        <LinearGradient
            // Background Linear Gradient
            colors={['rgba(0, 225, 255, 1)', 'rgba(0, 145, 255, 1)']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: 1000,
            }}
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {/* Body */}
          <View style={styles.body}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{strings.projects.title}</Text>
            </View>
            {/* Subtitle */}
            <Text style={styles.introText}>{strings.projects.subtitle}</Text>
            {/* Projects list */}
            <View styles={styles.projectsContainer}>
              <ProjectsList />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
    color: 'white',
  },
  introText: {
    fontFamily: Fonts.KARLA_REGULAR,
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 16,
    marginBottom: 30,
    color: 'white',
  },
  body: {
    marginBottom: 40,
    paddingBottom: 40,
  },
  projectsContainer: {
    flexDirection: 'column',
  },
});

export default Projects;
