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

import HistoryDescription from '../../components/historyDescription';
import HistoryImages from '../../components/historyImages';

import globalStyles from '../../styles/global';
import * as Fonts from '../../styles/fonts';
import * as Colors from '../../styles/colors';

const Participant = props => {
  const {title} = props.route.params;
  const {paragraphs} = props.route.params;
  const {images} = props.route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.screen}>
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
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          {/* Screen body */}
          <View style={[styles.body]}>

            {/* Title (name) */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>

            {/* Body */}
            <View style={[styles.body]}>
              <HistoryImages images={images} />
              <HistoryDescription paragraphs={paragraphs} />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleText: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 30,
    textAlign: 'center',
    color: Colors.ILLINI_ORANGE,
  },
  title: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  body: {
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
});

export default Participant;
