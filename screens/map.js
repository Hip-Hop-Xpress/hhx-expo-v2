import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RefreshControl } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Linking,
  TouchableOpacity
} from 'react-native';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

// Components
import Header from '../components/header';
import SocialMedia from '../components/socialMedia';

// Strings/data
import strings from '../assets/strings';
import assignData from '../api/assignData';
import { ENDPOINTS } from '../api/endpoints';
import {UIUC_LOCATION, COORDS, CONTACTS} from '../api/constants/mapConstants';

// Styles
import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';
import { LIGHT_MEDIUM_BLUE_GRADIENT, TRANSPARENT } from '../styles/colors';

const arcgisMapUrl = 'https://www.arcgis.com/apps/MapJournal/index.html?appid=5147c188b9664d00bdc88842b8ae4139';

const Map = () => {
  const [locationInfo, setLocationInfo] = useState(UIUC_LOCATION);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    assignData(ENDPOINTS.location, setLocationInfo, UIUC_LOCATION);
    setRefreshing(false);
  }

  useEffect(() => {
    assignData(ENDPOINTS.location, setLocationInfo, UIUC_LOCATION);
  }, []);

  let {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  
  const LATITUDE_DELTA = 0.05;  // originally 0.0922
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  // Prop for Map marker
  const busCoordinates = {
    latitude: locationInfo.latitude,
    longitude: locationInfo.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={globalStyles.lightBlue}>
        <Header />
        <LinearGradient
            // Background Linear Gradient
            colors={LIGHT_MEDIUM_BLUE_GRADIENT}
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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* Body */}
          <View style={[styles.body]}>
            {/* Title */}
            <View style={styles.title}>
              <Text style={styles.titleText}>{strings.maps.title}</Text>
            </View>

            {/* Subtitle */}
            <Text style={styles.bodyText}>{strings.maps.subtitle}</Text>
            <Text style={styles.bodyText}>
              Current location: {locationInfo.name}
            </Text>

            {/* Map */}
            <View style={styles.mapContainer}>
              <MapView
                style={styles.mapStyle}
                provide={PROVIDER_GOOGLE}
                showsUserLocation={true}
                initialRegion={{
                  latitude: COORDS.mapStartLat,
                  longitude: COORDS.mapStartLong,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                }}>
                <MapView.Marker coordinate={busCoordinates} />
              </MapView>
            </View>
            
            {/* ArcGIS Story Map Link */}
            <Text style={styles.bodyText}>
                {strings.maps.storyMapDesc}
            </Text>
            <View style={styles.navButtonView}>
            <TouchableOpacity 
              style={styles.navButton} 
              onPress={() => {
                Linking.openURL(arcgisMapUrl)
              }}
            >
              <Text style={styles.navButtontext}>
                {strings.maps.storyMapTitle}
              </Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.contactContainer}>
              {/* Request */}
              <Text style={styles.bodyText}>{strings.maps.request}</Text>

              {/* Contacts */}
              <SocialMedia platforms={CONTACTS} />
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
  bodyText: {
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
  mapContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 30,
  },
  mapStyle: {
    height: 400,
    width: '90%',
    borderRadius: 20,
  },
  navButton: {
    paddingVertical: 15,
    marginVertical: 2,
    backgroundColor: TRANSPARENT,
    borderRadius: 20,
  },
  navButtontext: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  contactContainer: {
    marginVertical: 25
  },
  navButtonView: {
    paddingHorizontal: 20,
  },
});

export default Map;
