import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import FlightTime from './FlightTime';
import FlightCard from './FlightCard';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const FlightHistoryScreen = ({ userFlights}) => {
  const navigation = useNavigation()
   if (!userFlights) {
   return (
    <View style={styles.center}>
      <Text>Loading Flight History...</Text>
    </View>
  )};

  const handleFlightCardPress = (flight) => {
    navigation.navigate('Flight Details', { flight });
  }

  return (
    <View style={styles.mainContainer}>
      <FlightTime userFlights={userFlights} />
      <View style={styles.topContainer}>
        <Text style={styles.topText}>Logged Flights</Text>
      </View>
      <ImageBackground
        source={require('../assets/hero-img.png')}
        style={styles.bottomContainer} >
       <ScrollView
          contentContainerStyle={styles.cardsContainer}
          showsVerticalScrollIndicator={false} >
          {userFlights.length === 0 ? (
            <View style={styles.noFlightsContainer}>
              <Text style={styles.noFlightsText}> No flights logged yet… </Text>
            </View>
          ) : (
            userFlights.map((flight) => {
              const formattedDate = flight.date.split('T')[0];
              return (
                <TouchableOpacity
                  key={flight.id}
                  onPress={() => handleFlightCardPress(flight)} >
                  
                  <FlightCard
                    date={formattedDate}
                    departure={flight.start_location}
                    arrival={flight.end_location}
                    aircraft={flight.aircraft}
                    pilot={flight.role} />
                </TouchableOpacity>
              );
            })
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
// Containers
  mainContainer: {
    flex: 1,
    backgroundColor: '#F6F9FF',
  },
  
  topContainer: {
    backgroundColor: '#804728',
    height: 60,
    alignItems: 'center'
 },

  bottomContainer: {
    flex:1,
    paddingTop: 25,
  },

  cardsContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    flexGrow: 1,
  },
// Text
 topText: {
  color: '#eff0f5',
  fontSize: 20,
  fontWeight: 'bold',
  padding: 20,
 },

// Error Container
  noFlightsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  noFlightsText: {
    color:  '#1D275F',
    fontSize: 18,
    fontWeight: 'bold',
  }
});


FlightHistoryScreen.propTypes = {
  userFlights: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      date: PropTypes.string.isRequired,
      start_location: PropTypes.string.isRequired,
      end_location: PropTypes.string.isRequired,
      aircraft: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      day_hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      night_hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
    })
  ),
}

export default FlightHistoryScreen;
