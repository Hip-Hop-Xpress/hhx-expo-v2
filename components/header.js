import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import globalStyles from '../styles/global';

export default function Header() {
  return (
    <View style={globalStyles.illiniBlue}>
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={require('../assets/images/hhx_logo_transparent.png')}
      />
    </View>
  );
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  logo: {
    marginVertical: 10,
    marginHorizontal: win.width / 3.9,
    width: 209,
    height: 18,
  },
});
