import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, navigation} from 'react-native'
import FlightTime from './FlightTime'
import FlightCard from './FlightCard'
import { useNavigation } from '@react-navigation/native'
import PropTypes from 'prop-types'

const FlightHistoryScreen = ({ userFlights}) => {
  const navigation = useNavigation()
  console.log('userFlights:', userFlights);
    
  if (!userFlights) {
      return (
        <View>
          <Text>Loading Flight History...</Text>
        </View>
      )
    }

if (userFlights.length === 0) {
    return (
      <View>
        <Text>No Flights Logged</Text>
      </View>
    );
  }
  
  const handleFlightCardPress = (flight) => {
    navigation.navigate('FlightDetails', { flight })
  }

  const flightCards = userFlights.length === 0 ? (
    <Text>No Flights Logged</Text>
  ) : (
          userFlights.map((flight) => {
          const flightId = flight.id;
          const isoDate = flight.date;
          const formattedDate = isoDate.split('T')[0];
      
      return (
      <TouchableOpacity key={flight.id} onPress={() => handleFlightCardPress(flight)}>
      <View>
        <FlightCard
          id={flightId}
          date={formattedDate}
          departure={flight.start_location}
          arrival={flight.end_location}
          aircraft={flight.aircraft}
          pilot={flight.role}
        />
      </View>
    </TouchableOpacity>
    )
  })
  )
  return (
    <ImageBackground source={require('../assets/hero-img.png')} style={styles.imageBackground}>
      <View style={[ styles.container, { flexDirection: 'column' }]}>
      <FlightTime style={styles.timeContainer} userFlights={userFlights} />
        <ScrollView style={styles.scrollContainer} 
                    contentContainerStyle={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
          <View style={styles.cardsContainer}>{flightCards}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  timeContainer: {
    flex: 2,
  },
  scrollContainer: {
    flex: 3,
  
  },
  contentContainer: {
    flexGrow: 1,
  },
  cardsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
    
  },
});


// FlightHistoryScreen.propTypes = {
//   userFlights: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       date: PropTypes.string.isRequired,
//       start_location: PropTypes.string.isRequired,
//       end_location: PropTypes.string.isRequired,
//       aircraft: PropTypes.string.isRequired,
//       role: PropTypes.string.isRequired,
//       day_hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       night_hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//       description: PropTypes.string,
//       created_at: PropTypes.string,
//       updated_at: PropTypes.string,
//     })
//   ),
// };

export default FlightHistoryScreen
