import React from 'react'
import { View, Text, StyleSheet, ImageBackground} from 'react-native'
import PropTypes from 'prop-types'
import Header from './Header';

const ErrorComponent = ({ errorMessage }) => {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{errorMessage}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'#F6F9FF'
  },
  errorText: {
    color: 'rgb(111, 110, 110)',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    padding:15,
    marginBottom: 400
  
  },
});

ErrorComponent.propTypes = {
  errorMessage: PropTypes.string.isRequired
}


export default ErrorComponent