import React, { useState, useEffect } from 'react';

import VariationComponent from './variationComponent';
import LoadingIcon from './loadingIcon';

import VARIATIONS from '../api/constants/variations';
import assignData from '../api/assignData';
import { ENDPOINTS } from '../api/endpoints';

const VariationsList = ({navigation}) => {
  const [variationsData, setVariationsData] = useState([]);

  // Handle the promise obtained with fetching data from API
  useEffect(() => {
    assignData(ENDPOINTS.variations, setVariationsData, VARIATIONS);
  }, []);
  
  let key = 0;
  const Variations = variationsData.map(variation => (
    <VariationComponent
      name={variation.name}
      date={variation.date}
      description={variation.description}
      images={variation.images}
      navigation={navigation}
      key={key++}
    />
  ));

  return (
  <>
    {variationsData.length === 0 && <LoadingIcon />}
    {Variations}
  </>
  );
}

export default VariationsList;