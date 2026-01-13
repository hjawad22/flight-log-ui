import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'

function FlightDetailsScreen({ route }) {
  const { flight } = route.params
  return (
    <ImageBackground source={require('../assets/hero-img.png')} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Flight Details</Text>
          <Text style={styles.label}>Date: {flight.date}</Text>
          <Text style={styles.label}>Departure: {flight.start_location}</Text>
          <Text style={styles.label}>Arrival: {flight.end_location}</Text>
          <Text style={styles.label}>Day Hours: {flight.day_hours}</Text>
          <Text style={styles.label}>Night Hours: {flight.night_hours}</Text>
          <Text style={styles.label}>Aircraft: {flight.aircraft}</Text>
          <Text style={styles.label}>Role: {flight.role}</Text>
          <Text style={styles.label}>Description: {flight.description}</Text>

        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1D275F',
  },
  label: {
    marginBottom: 8,
    color: 'black',
    fontSize: 20,
  },
})

export default FlightDetailsScreen
