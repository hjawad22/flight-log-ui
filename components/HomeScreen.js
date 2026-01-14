import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header'; // import your new header component

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header /> 
        <View style={styles.textContainer}>
          <Text style={styles.text} testID="question-text">
            What would you like to do today?
          </Text>
      

        <TouchableOpacity
          style={styles.button}
          testID="log-flight-button"
          onPress={() => navigation.navigate('LogFlight')}
        >
          <Text style={styles.buttonText}>Log a Flight</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          testID="view-flights-button"
          onPress={() => navigation.navigate('Flight History')}
        >
          <Text style={styles.buttonText}>View Flight History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
      justifyContent: 'center',
     alignItems: 'center'
  },
  text: {
    color: '#5F5F5F',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 30
  },
  button: {
    backgroundColor: '#2B3A8F',
    borderRadius: 20,
    width: 310,
    height: 50,
    padding:10,
    margin: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },   
});

export default HomeScreen;





