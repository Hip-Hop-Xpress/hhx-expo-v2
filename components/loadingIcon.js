import React from 'react';

import { ActivityIndicator } from 'react-native';
import { ILLINI_ORANGE } from '../styles/colors';

const LoadingIcon = ({color}) => {
  return (
    <ActivityIndicator 
      size="large" 
      color={color || ILLINI_ORANGE} 
      style={{alignSelf: "center"}}
    />
  )
}

export default LoadingIcon;