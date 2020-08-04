import React from 'react';
import FeaturedArtistComponent from './featuredArtistComponent';
import FEATURED_ARTISTS from '../api/constants/featuredArtists';

/**
 * List of all artists previously featured by HHX.
 * 
 * @param {Object} navigation navigation object from Featured Stack, lets user click to artist page 
 */
const FeaturedArtistsList = ({featuredArtists, navigation}) => {
  let key = 0;
  
  const Artists = featuredArtists.map(artist => (
    artist.current ? null : (
    <FeaturedArtistComponent
      name={artist.name}
      date={artist.date}
      bio={artist.bio}
      headerImageUrl={artist.headerImageUrl}
      socials={artist.socials}
      navigation={navigation}
      key={key++}
    />
  )));

  return (
    <>
      {Artists}
    </>);
};

export default FeaturedArtistsList;
