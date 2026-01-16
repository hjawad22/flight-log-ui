import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function FlightDetailsScreen({ route, navigation, removeFlight }) {
  const { flight } = route.params
  const [showModal, setShowModal] = useState(false);
  const isoDate = flight.date;
  const formattedDate = isoDate.split('T')[0];
 
  const handleDelete = () => {
    removeFlight(flight.id, navigation);
    setShowModal(false);
  }

  return (
    <ImageBackground
      source={require('../assets/hero-img.png')}
      style={styles.mainContainer} >
       <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>Flight Details</Text>

            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons name='trash-outline' size={26} color='#804728' />
            </TouchableOpacity>
          </View>

          <View style={styles.detailsContent}>
            <Text style={styles.label}>Date: {formattedDate}</Text>
            <Text style={styles.label}>Departure: {flight.start_location}</Text>
            <Text style={styles.label}>Arrival: {flight.end_location}</Text>
            <Text style={styles.label}>Day Hours: {flight.day_hours}</Text>
            <Text style={styles.label}>Night Hours: {flight.night_hours}</Text>
            <Text style={styles.label}>Aircraft: {flight.aircraft}</Text>
            <Text style={styles.label}>Role: {flight.role}</Text>
            <Text style={styles.label}>Description: {flight.description}</Text>
          </View>
        </View>
      </View>


      <Modal transparent animationType='fade' visible={showModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            
  
            <TouchableOpacity
              style={styles.modalCloseIcon}
              onPress={() => setShowModal(false)}
            >
              <Ionicons name='close' size={24} color='#5F5F5F' />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Delete flight?</Text>
            <Text style={styles.modalMessage}>
              This action cannot be undone.
            </Text>

            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleDelete}
            >
              <Text style={styles.confirmText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
// Containers
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  
  container: {
    padding: 30,
  },

  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '100%',
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },

  // Text
  titleText: {
    color: '#1D275F',
    fontSize: 28,
    fontWeight: 'bold',
   
  },

  detailsContent: {
    gap: 6
  },

  label: {
    color: '#474747',
    fontSize: 18,
    fontWeight:'semibold'
  },

// Modal Container
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(13, 3, 42, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },

  modalCloseIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 30,
  },

  modalMessage: {
    marginBottom: 20,
    textAlign: 'center',
  },

  confirmButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 6,
    alignItems: 'center',
  },

  confirmText: {
    color: 'white',
    fontWeight: 'bold',
  }
});

FlightDetailsScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      flight: PropTypes.object.isRequired,
    }).isRequired,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
  removeFlight: PropTypes.func.isRequired,
}

export default FlightDetailsScreen;
