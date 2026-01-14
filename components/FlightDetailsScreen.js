import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

function FlightDetailsScreen({ route, navigation, removeFlight }) {
  const { flight } = route.params
  const [showModal, setShowModal] = useState(false);

  const isoDate = flight.date;
  const formattedDate = isoDate.split('T')[0];

   const handleDelete = () => {
    removeFlight(flight.id, navigation);
    setShowModal(false);
  };


  return (
  <ImageBackground source={require('../assets/hero-img.png')} style={styles.imageBackground}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>

          <View style={styles.header}>
            <Text style={styles.title}>Flight Details</Text>

            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons name="trash-outline" size={26} color="#d32f2f" />
            </TouchableOpacity>
          </View>

          

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

      <Modal transparent animationType="fade" visible={showModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Delete flight?</Text>
            <Text style={styles.modalMessage}>
              This action cannot be undone.
            </Text>

            <View style={styles.modalActions}>
              <TouchableOpacity 
        style={styles.modalCloseIcon} 
        onPress={() => setShowModal(false)}
      >
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleDelete}
              >
                <Text style={{ color: 'white' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
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
  
header: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 2,
},
modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(13, 3, 42, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  width: '80%',
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10
},
modalTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 8,
},
modalMessage: {
  marginBottom: 20,
},
modalActions: {
  flexDirection: 'row',
  justifyContent: 'center',
},
confirmButton: {
  backgroundColor: '#d32f2f',
  padding: 10,
  borderRadius: 6,
  position: 'center',
  width: 140, 
  alignItems: 'center'
},
modalCloseIcon: {
  position: 'absolute',
  right: 10,
  bottom: 80
}
  
})

export default FlightDetailsScreen
