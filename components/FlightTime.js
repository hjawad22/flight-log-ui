import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const FlightTime = ({ userFlights }) => {
  const getTotalHours = () => {
    let flights = userFlights.reduce((acc, cur) => {
    let time = parseInt(cur.day_hours) + parseInt(cur.night_hours)
    
    return acc + time
    }, 0)
    return flights
  }

  const getDayHours = () => {
    let flights = userFlights.reduce((acc, cur) => {
    let time = parseInt(cur.day_hours)
    
    return acc + time
    }, 0)
    return flights
  }

  const getNightHours = () => {
    let flights = userFlights.reduce((acc, cur) => {
    let time = parseInt(cur.night_hours)
    
    return acc + time
    }, 0)
    return flights
  }

  const getNumFlights = () => {
    let flights = userFlights.reduce((count) => count + 1, 0)
    return flights
  }

  return (
   <View style={styles.mainContainer}>
      <View style={styles.topLabelContainer}>
        <Text style= {styles.topLabelText}> Flight Time </Text>
      </View>
      <View style={styles.cardContainer}>
      <View style={styles.row}>
          <Text style={styles.label}>Total Flights</Text>
          <Text style={styles.value}>{getNumFlights()}</Text>
      </View>
      <View style={styles.row}>
          <Text style={styles.label}>Total Hours</Text>
          <Text style={styles.value}>{getTotalHours()}</Text>
      </View>
      <View style={styles.row}>
          <Text style={styles.label}>Night Hours</Text>
          <Text style={styles.value}>{getNightHours()}</Text>
        </View>
      <View style={styles.row}>
          <Text style={styles.label}>Day Hours</Text>
          <Text style={styles.value}>{getDayHours()}</Text>
        </View>
     </View>
   </View>
 );
}



const styles = StyleSheet.create({
// Containers
  mainContainer: {
    backgroundColor: '#2B3A8F',
  },

  topLabelContainer: {
    alignItems: 'center'
  },

  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 6
  },
  
// Text
  topLabelText: {
    color: '#eff0f5',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20
  },

  label: {
    color: '#1D275F',
    fontSize: 16,
    fontWeight: '600',
  },

  value: {
    color: '#804728',
    fontSize: 16,
    fontWeight: '700', 
  }
});

FlightTime.propTypes = {
  userFlights: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        day_hours: PropTypes.string.isRequired,
        night_hours: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
}

export default FlightTime;

