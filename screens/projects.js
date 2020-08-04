import React from 'react';
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
      <SafeAreaView style={globalStyles.illiniBlue}>
        <Header />
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
    backgroundColor: 'white',
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  introText: {
    fontFamily: Fonts.KARLA_REGULAR,
    textAlign: 'center',
    marginHorizontal: 30,
    fontSize: 16,
    marginBottom: 30,
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
  },
  projectsContainer: {
    flexDirection: 'column',
  },
});

export default Projects;
