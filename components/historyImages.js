import React from 'react';

import { View, Text, Image } from 'react-native';

import {imageStyles} from '../styles/historyStyles';

/**
 * Display of images in History screens
 * 
 * @param {Array} images array of image objects to display
 */
const HistoryImages = ({images}) => {
  let key = 0;

  const Images = images.map(image => (
    <HistoryImage
      url={image.url}
      caption={image.caption}
      key={key++}
    />
  ));

  return <>{Images}</>;
}

/**
 * Image display for use in History screens
 * 
 * @param {string} url address of image to display
 * @param {string} caption caption to display under image 
 */
const HistoryImage = ({url, caption}) => {
  return (
    <View style={imageStyles.imageContainer}>
      <Image style={imageStyles.image} source={{ uri: url }} />
      <Text style={imageStyles.caption}>{caption}</Text>
    </View>
  )
}

export default HistoryImages;