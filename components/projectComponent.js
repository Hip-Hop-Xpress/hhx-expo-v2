import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import globalStyles from '../styles/global';
import * as Fonts from '../styles/fonts';

/**
 * Clickable icon showing project information
 * 
 * @param {String} name name of the project
 * @param {Array} description description of the project
 * @param {Array} members array of all members
 * @param {String} startDate starting date of project
 * @param {String} endDate ending date of project, or null if still ongoing
 * @param {String} icon type of icon from MaterialCommunityIcons
 * @param {boolean} isSelected whether the project component is selected
 * @param {Function} setSelected notifies ProjectList that current project has been selected
 */
const ProjectComponent = ({name, description, members, startDate, endDate, icon, isSelected, setSelected}) => {
  let key = 0;
  return (
    <>
      <TouchableOpacity
        style={[styles.container, globalStyles.transparent]}
        onPress={setSelected}
        activeOpacity={0.75}>
        <MaterialCommunityIcons name={icon} color={'white'} size={65} />
        <Text style={styles.projectName}>{name}</Text>
      </TouchableOpacity>

      {/* Body text */}
      {isSelected ? (
        <View style={styles.projectInfo}>
          
          {/* Project title */}
          <Text style={styles.projectTitle}>{name}</Text>

          {/* Project date */}
          <Text style={styles.dateText}>{`${startDate} - ${endDate === null ? 'Present' : endDate}`}</Text>

          {/* Members list */}
          <Text style={styles.members} key={key++}>
            {'Members: ' + members.join(', ')}
          </Text>

          {/* Description */}
          {description.map(entry => (
            <Text style={styles.projectText} key={key++}>{entry + '\n'}</Text>
          ))}

        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 28,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  projectName: {
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 27,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  projectInfo: {
    marginVertical: 15,
    marginHorizontal: 20,
    paddingHorizontal: 10,

  },
  projectTitle: {
    fontFamily: Fonts.MONTSERRAT_BLACK,
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  members: {
    fontFamily: Fonts.KARLA_BOLDITALIC,
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  dateText: {
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 15,
    color: 'white',
  },
  projectText: {
    fontFamily: Fonts.KARLA_REGULAR,
    fontSize: 16,
    color: 'white',
  },
});

export default ProjectComponent;
