import React, { useState, useEffect } from 'react';

import HistoryComponent from './historyComponent';
import LoadingIcon from './loadingIcon';

import ARTIST_HISTORIES from '../api/constants/artistHistories';
import { ENDPOINTS } from '../api/endpoints';
import assignData from '../api/assignData';

import strings from '../assets/strings';

/**
 * List of all artists featured on the Double Dutch Boom Bus
 * 
 * @param {Object} props data to be passed to artist history components and screen
 */
const ArtistHistoriesList = props => {
  const [historicArtists, setHistoricArtists] = useState([]);

  useEffect(() => {
    assignData(ENDPOINTS.historic, setHistoricArtists, ARTIST_HISTORIES);
  }, []);

  const screenName = strings.artistHistories.individualScreenName;
  let key = 0;

  const ArtistHistories = historicArtists.map(artistHistory => (
    <HistoryComponent
      title={artistHistory.name}
      paragraphs={artistHistory.description}
      images={artistHistory.images}
      navigation={props.navigation}
      screenName={screenName}
      key={key++}
    />
  ));

  return (
    <>
      {historicArtists.length === 0 && <LoadingIcon />}
      {ArtistHistories}
    </>
  );
};

export default ArtistHistoriesList;
