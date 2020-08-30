import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  YellowBox
} from 'react-native';

import VariationsList from '../../components/variationsList';

import strings from '../../assets/strings';

import * as Colors from '../../styles/colors';
import * as Fonts from '../../styles/fonts';
import globalStyles from '../../styles/global';

const Variations = (props) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.areaView}>
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
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            {/* Title */}
            <View style={styles.topView}>
              <Text style={styles.title}>
                {strings.variations.title}
              </Text>
              <Text style={styles.subtitle}>
                {strings.variations.subtitle}
              </Text>
            </View>
          </View>

          <View style={styles.variationsContainer}>
            <VariationsList navigation={props.navigation} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  areaView: {
    //backgroundColor: Colors.ILLINI_BLUE,
  },
  topView: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: Colors.ILLINI_ORANGE,
  },
  topImage: {
    height: 250,
    flex: 1,
  },
  title: {
    fontFamily: Fonts.HEADER,
    fontWeight: "bold",
    color: 'white',
    paddingTop: 15,
    fontSize: 32,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: Fonts.SUBHEADER,
    color: 'white',
    fontSize: 23,
    padding: 15,
    paddingBottom: 20,
    textAlign: 'center',
  },
  variationsContainer: {
    paddingVertical: 10,
  },
});

export default Variations;
