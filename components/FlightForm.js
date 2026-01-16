import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Modal } from 'react-native';
import PropTypes from 'prop-types';

class FlightForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      night_hours: '',
      day_hours: '',
      aircraft: '',
      description: '',
      date: '',
      start_location: '',
      end_location: '',
      role: '',
      isFormCompleted: false,
    }
  }

  handleChange = (name, value) => {
    if (name === 'night_hours' || name === 'day_hours') {
      const numericValue = value.replace(/[^0-9.]/g, '');
      this.setState({ [name]: numericValue });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newFlight = { ...this.state };
    this.props.addFlight(newFlight);
    this.clearInputs();
    this.showModal();
  };

  clearInputs = () => {
    this.setState({
      night_hours: '',
      day_hours: '',
      aircraft: '',
      description: '',
      date: '',
      start_location: '',
      end_location: '',
      role: '',
    });
  };

  showModal = () => {
    this.isModalVisible = true;
    setTimeout(() => {
      this.isModalVisible = false;
      this.forceUpdate();
    }, 2000);
  };

  renderModal() {
    if (this.isModalVisible) {
      return (
        <Modal transparent animationType='fade'>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Flight Submitted!</Text>
            </View>
          </View>
        </Modal>
      );
    }
    return null;
  }

  render() {
    const { navigation, userFlights } = this.props;
    const {
      night_hours,
      day_hours,
      aircraft,
      description,
      date,
      start_location,
      end_location,
      role,
    } = this.state;

    const isFormCompleted =
      night_hours !== '' &&
      day_hours !== '' &&
      aircraft !== '' &&
      description !== '' &&
      date !== '' &&
      start_location !== '' &&
      end_location !== '' &&
      role !== '';

    return (
      <ImageBackground source={require('../assets/hero-img.png')} style={styles.mainContainer}>
        <View style={styles.mainTextContainer}>
          <Text style={styles.labelText}>Log a Flight</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Night Hours'
              placeholderTextColor='gray'
              value={this.state.night_hours}
              onChangeText={(value) => this.handleChange('night_hours', value)}
              keyboardType='numeric' />

            <TextInput
              style={styles.input}
              placeholder='Day Hours'
              placeholderTextColor='gray'
              value={this.state.day_hours}
              onChangeText={(value) => this.handleChange('day_hours', value)}
              keyboardType='numeric' />

            <TextInput
              style={styles.input}
              placeholder='Aircraft'
              placeholderTextColor='gray'
              value={this.state.aircraft}
              onChangeText={(value) => this.handleChange('aircraft', value)} />

            <TextInput
              style={styles.input}
              placeholder='Description'
              placeholderTextColor='gray'
              value={this.state.description}
              onChangeText={(value) => this.handleChange('description', value)} />

            <TextInput
              style={styles.input}
              placeholder='Date (yyyy-mm-dd)'
              placeholderTextColor='gray'
              value={this.state.date}
              onChangeText={(value) => this.handleChange('date', value)}  />

            <TextInput
              style={styles.input}
              placeholder='Start location'
              placeholderTextColor='gray'
              value={this.state.start_location}
              onChangeText={(value) => this.handleChange('start_location', value)} />

            <TextInput
              style={styles.input}
              placeholder='End location'
              placeholderTextColor='gray'
              value={this.state.end_location}
              onChangeText={(value) => this.handleChange('end_location', value)} />

            <TextInput
              style={styles.input}
              placeholder='Role'
              placeholderTextColor='gray'
              value={this.state.role}
              onChangeText={(value) => this.handleChange('role', value)} />

            <TouchableOpacity style= {styles.flightButton} onPress={event => this.handleSubmit(event)} disabled={!isFormCompleted}>
              <Text style={styles.buttonText}>Log Flight</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Flight History', { userFlights })}>
              <Text style={styles.buttonText}>View Flight History</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {this.renderModal()}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
// Containers
  mainContainer: {
    flex: 1,
    justifyContent: 'center'
  },

  mainTextContainer: {
    alignItems: 'center'
  },

  inputContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    height: 40,
    width: 250,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },

// Buttons
  flightButton: {
    backgroundColor: '#2B3A8F',
    justifyContent: 'center',
    height: 50,
    width: 250,
    borderRadius: 20,
    margin: 15
  },
  button: {
    backgroundColor: '#804728',
    justifyContent: 'center',
    height: 50,
    width: 250,
    borderRadius: 20,
    shadowColor: '#070037',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },

  // Text
  labelText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1D275F',
  },

  buttonText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    shadowColor: '#070037',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
  },

  // Modal Container
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
  },

  modalText: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

FlightForm.propTypes = {
  addFlight: PropTypes.func.isRequired,
 }

export default FlightForm;

