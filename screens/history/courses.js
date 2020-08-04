import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Timeline from 'react-native-timeline-flatlist'
import LoadingIcon from '../../components/loadingIcon';

// Text/data
import strings from '../../assets/strings';
import assignData from '../../api/assignData';
import { ENDPOINTS } from '../../api/endpoints';
import COURSES_DATA from '../../api/constants/coursesData';

// Styles
import globalStyles from '../../styles/global';
import * as Fonts from '../../styles/fonts';
import { ILLINI_BLUE, ILLINI_ORANGE } from '../../styles/colors';

/**
 * Screen showcasing past courses held by the Hip Hop Xpress
 */
const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  /**
   * Processes and assigns courses data from API to fit with
   * data prop in react-native-timeline-flatlist
   * @param {Array} coursesData courses data directly from API
   */
  const processCoursesData = (coursesData) => {
    // Map each course's data to the schema required for Timeline
    const processedData = coursesData.map((course) => {
      return {
        time: course.startDate + (
          course.endDate === null || course.endDate === course.startDate 
            ? '' 
            : '\n' + course.endDate
        ),
        title: course.name,
        description: course.description.reduce((bodyString, paragraph) => {
          return bodyString + '\n' + paragraph
        }, ''),
      };
    });

    // Assign processed course data to state variable
    setCoursesData(processedData);
  };

  // Grab courses data from API and process, or use constants if request fails
  useEffect(() => {
    assignData(ENDPOINTS.courses, processCoursesData, COURSES_DATA);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.illiniBlue}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">

          {/* Text over top image */}
          <View style={styles.topView}>
            <Text style={[styles.topText, globalStyles.illiniBlue]}>{strings.courses.title}</Text>
          </View>

          {/* Body */}
          <View style={styles.body}>
            {coursesData.length === 0 && <LoadingIcon />}
            <Timeline 
              style={styles.list}
              data={coursesData}
              separator={true}
              circleSize={20}
              circleColor={ILLINI_BLUE}
              lineColor={ILLINI_BLUE}
              timeContainerStyle={{minWidth:95, marginTop: 0}}
              timeStyle={styles.timeStyle}
              options={{
                style:{paddingTop:5}
              }}
            />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  topText: {
    fontFamily: 'Montserrat-Black',
    color: 'white',
    padding: 15,
    fontSize: 32,
    textAlign: 'center',
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    marginTop: 5,
    marginBottom: 10,
    fontSize: 32,
    textAlign: 'center',
  },
  body: {
    backgroundColor: 'white',
    marginBottom: 40,
    paddingBottom: 40,
    padding: 20,
  },
  timeStyle: {
    textAlign: 'center', 
    backgroundColor: ILLINI_ORANGE, 
    color: 'white', 
    padding: 5, 
    borderRadius: 13,
    overflow: 'hidden'
  },
});

export default Courses;
