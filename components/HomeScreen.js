import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header'; 
import FlightTime from './FlightTime';
import PropTypes from 'prop-types';

function HomeScreen({ navigation, userFlights }) {
  return (
    <View style={styles.mainContainer}>
      <Header /> 
      <FlightTime userFlights={userFlights} />
        <View style={styles.textContainer} >
          <Text style={styles.mainText} testID='question-text'>
            What would you like to do today?
          </Text>
          <TouchableOpacity
            style={styles.logButton}
            testID='log-flight-button'
            onPress={() => navigation.navigate('Log Flight')} >
            <Text style={styles.buttonText}>Log a Flight</Text >
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.historyButton}
            testID='view-flights-button'
            onPress={() => navigation.navigate('Flight History')} >
            <Text style={styles.buttonText}>View Flight History</Text>
          </TouchableOpacity>
        </View>
      </View>
   );
}

const styles = StyleSheet.create({
// Containers
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  textContainer: {
    alignItems: 'center',
    backgroundColor: '#edf2fd',
    padding: 30
  },
  
  mainText: {
    color: '#1D275F',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15
  },
// Buttons
  logButton: {
    backgroundColor: '#2B3A8F',
    borderRadius: 20,
    width: 310,
    height: 50,
    padding:10,
    margin: 15,
    shadowColor: '#070037',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },

  historyButton: {
    backgroundColor: '#804728',
    borderRadius: 20,
    width: 310,
    height: 50,
    padding:10,
    margin: 15,
    shadowColor: '#070037',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});


HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  userFlights: PropTypes.array,
};

export default HomeScreen;





