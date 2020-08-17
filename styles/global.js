import {StyleSheet} from 'react-native';
import * as Colors from './colors';
import * as Fonts from './fonts';

const globalStyles = StyleSheet.create({
  illiniOrange: {
    backgroundColor: Colors.ILLINI_ORANGE,
  },
  illiniBlue: {
    backgroundColor: Colors.ILLINI_BLUE,
  },
  lightBlue: {
    backgroundColor: Colors.LIGHT_BLUE,
  },
  mediumBlue: {
    backgroundColor: Colors.MEDIUM_BLUE,
  },
  white: {
    backgroundColor: Colors.WHITE,
  },
  transparent: {
    backgroundColor: Colors.TRANSPARENT,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  sectionTitle: {
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: Colors.ILLINI_BLUE,
    marginBottom: 18,
  },
  sectionDescription: {
    fontFamily: Fonts.BODY,
    marginTop: 0,
    marginBottom: 25,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.WHITE,
  },
});

export default globalStyles;
