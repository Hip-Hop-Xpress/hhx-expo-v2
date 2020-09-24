import {Dimensions, StyleSheet} from 'react-native';
import * as Fonts from './fonts';

const screen = Dimensions.get('screen');
const width = screen.width;
const height = screen.height;
export const componentStyles = StyleSheet.create({
  container: {
    width: width-50,
    height: height / 1.6,
    marginVertical: 5,
    //paddingVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    margin: 50,
  
  },
  title: {
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'left',
    //textAlignVertical: "bottom",
    color: 'white',
    //marginBottom: 10,
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: Fonts.KARLA_BOLDITALIC,
    fontSize: 17,
    textAlign: 'right',
    color: 'white',
  },
  description: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});

const imageSize = 270;
export const imageStyles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    marginTop: 25,
    width: imageSize,
    height: imageSize,
    borderRadius: 0,
  },
  caption: {
    fontSize: 15,
    textAlign: 'center',
    color: 'lightgray',
    fontFamily: Fonts.KARLA_BOLDITALIC,
  },
});

export const descriptionStyles = StyleSheet.create({
  paragraph: {
    marginVertical: 15,
  },
  paragraphText: {
    color: 'lightgray',
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 19,
  },
});
