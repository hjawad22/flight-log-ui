import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const FlightCard = ({ date, departure, arrival, aircraft, pilot }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Aircraft:</Text>
          <Text style={styles.text}>{aircraft}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Departure:</Text>
          <Text style={styles.text}>{departure}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Role:</Text>
          <Text style={styles.text}>{pilot}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Arrival:</Text>
          <Text style={styles.text}>{arrival}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
// Containers
  mainContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    margin:  8,
    height: 180,
    width: 350,
    justifyContent: 'left',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,

  },

  column: {
    flex: 1,
  },

// Text
  label: {
    color: '#696969',
    fontWeight: 'bold',
    margin: 2
  },

  text: {
    color: '#1D275F',
    fontWeight: 'bold'
  }
});

FlightCard.propTypes = {
  date: PropTypes.string.isRequired,
  departure: PropTypes.string.isRequired,
  arrival: PropTypes.string.isRequired,
  aircraft: PropTypes.string.isRequired,
  pilot: PropTypes.string.isRequired,
}

export default FlightCard;