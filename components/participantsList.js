import React, { useState, useEffect } from 'react';

import HistoryComponent from './historyComponent';
import LoadingIcon from './loadingIcon';

import PARTICIPANTS from '../api/constants/participants';
import assignData from '../api/assignData';
import { ENDPOINTS } from '../api/endpoints';

import strings from '../assets/strings';

/**
 * List of all participants comprised of HistoryComponents
 * @param {Object} props contains all data to be passed to the participant component and screen
 */
const ParticipantsList = props => {
  const [participantsData, setParticipantsData] = useState([]);

  useEffect(() => {
    assignData(ENDPOINTS.participants, setParticipantsData, PARTICIPANTS);
  }, []);

  const screenName = strings.participants.individualScreenName;
  let key = 0;

  const Participants = participantsData.map(participant => (
    <HistoryComponent
      title={participant.name}
      paragraphs={participant.description}
      images={participant.images}
      screenName={screenName}
      navigation={props.navigation}
      key={key++}
    />
  ));

  return (
    <>
      {participantsData.length === 0 && <LoadingIcon />}
      {Participants}
    </>
  );
};

export default ParticipantsList;
