import {StyleSheet} from 'react-native';
import * as Fonts from './fonts';
import * as Colors from './colors';

const featuredStyles = StyleSheet.create({
  title: {
    paddingTop: 20,
    paddingBottom: 15,
  },
  titleText: {
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
    fontSize: 29,
    textAlign: 'center',
    color: Colors.ILLINI_BLUE,
  },
  artistImage: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
    marginVertical: 20,
  },
  imageCard: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artistNameText: {
    fontFamily: Fonts.SUBHEADER,
    marginTop: 10,
    marginBottom: 15,
    color: Colors.WHITE,
    fontSize: 45,
    textAlign: 'center',
  },
  dateText: {
    fontFamily: Fonts.SUBHEADER,
    textAlign: 'center',
    fontSize: 20,
    color: Colors.ILLINI_BLUE_TRANSLUCENT,
  },
  body: {
    marginBottom: 40,
    paddingBottom: 40,
  },
  socialMediaContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    marginBottom: -1,
  },
  socialMediaButton: {
    borderRadius: 50,
    width: 55,
  },
  bioContainer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  bioTitle: {
    fontFamily: Fonts.HEADER,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: Colors.ILLINI_BLUE,
    marginBottom: 10,
  },
  bioBody: {
    fontFamily: Fonts.BODY,
    fontSize: 18,
    color: Colors.WHITE,
    lineHeight: 30,
  },
  pastArtistsBody: {
    backgroundColor: '#121212',
    marginBottom: 40,
  },
  pastArtistsTitle: {
    color: 'lightgray',
    fontSize: 30,
    fontFamily: Fonts.MONTSERRAT_BLACK,
    textAlign: 'center',
    marginVertical: 20,
  },
  artistsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignItems: 'center',
  },
});

export default featuredStyles;
