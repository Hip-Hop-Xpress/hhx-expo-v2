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

import Header from '../components/header';
import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import * as Colors from '../styles/colors';

const Update = props => {
  const {title} = props.route.params;
  const {body} = props.route.params;
  const {date} = props.route.params;
  const {lastUpdated} = props.route.params;
  const {author} = props.route.params;

  let bodyKey = 0;
  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={globalStyles.lightBlue}>
        <Header />
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
          contentInsetAdjustmentBehavior="automatic">
          {/* Screen body */}
          <View style={[styles.body]}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>

            {/* Date */}
            <View style={styles.info}>
              <Text style={styles.authorText}>{author}</Text>
              <Text style={styles.dateText}>{date}</Text>
              {/* Only show updated timestamp if the update has ever been updated */}
              {(lastUpdated !== null && lastUpdated !== undefined) && <Text style={styles.dateText}>{'Last updated: ' + lastUpdated.substring(0,21)}</Text>}
            </View>

            {/* Text body */}
            <View style={[styles.body]}>
              {body.map(paragraph => (
                <View style={styles.paragraph} key={bodyKey++}>
                  <Text style={styles.bodyText} key={bodyKey}>
                    {paragraph}
                  </Text>
                </View>
              ))}
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
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: Colors.ILLINI_BLUE,
  },
  title: {
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  info: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  authorText: {
    fontFamily: Fonts.BODY,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
    color: Colors.WHITE,
  },
  dateText: {
    fontFamily: Fonts.BODY,
    fontSize: 17,
    textAlign: 'right',
    color: Colors.WHITE,
  },
  paragraph: {
    marginVertical: 10,
  }, 
  bodyText: {
    fontFamily: Fonts.BODY,
    fontSize: 21,
    color: Colors.WHITE,
  },
  body: {
    paddingBottom: 40,
    paddingHorizontal: 12,
  },
});

export default Update;
