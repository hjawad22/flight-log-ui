import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import PropTypes from 'prop-types'

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
    <SafeAreaView style={styles.flightTime}>
      <View style={styles.main}>
        <View style={styles.container}>
        <View style={styles.detailsContainer}>
            <Text style={styles.textSize}>Total Flights</Text>
            <Text style={styles.textSize}>{getNumFlights()}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.textSize}>Total Hours</Text>
            <Text style={styles.textSize}>{getTotalHours()}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.textSize}>Night Hours</Text>
            <Text style={styles.textSize}>{getNightHours()}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.textSize}>Day Hours</Text>
            <Text style={styles.textSize}>{getDayHours()}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  flightTime: {
    height: '25%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: '30%',
    width: '100%',
    backgroundColor: '#1f4f99',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  main: {
    height: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '75%',
    width: '60%',
    backgroundColor: '#1f4f99',
    borderRadius: 10,
    justifyContent: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textSize: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }

})

FlightTime.propTypes = {
  userFlights: PropTypes.arrayOf(
    PropTypes.shape({
      attributes: PropTypes.shape({
        day_hours: PropTypes.string.isRequired,
        night_hours: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default FlightTime

