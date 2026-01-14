import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen'
import FlightForm from './components/FlightForm'
import FlightHistoryScreen from './components/FlightHistoryScreen'
import FlightDetailsScreen from './components/FlightDetailsScreen'
import ErrorComponent from './components/Error'
import { getUserFlights, postFlight } from './ApiCalls';


const Stack = createNativeStackNavigator()

class AppNavigator extends Component {
  constructor() {
    super()
    this.state = {
      userFlights: [],
      error: ''
    }
  }

  componentDidMount() {
    getUserFlights()
    .then((data) => this.setState({ userFlights: data }))
    .catch((error) => {
       console.error(error);
       this.setState({ error: error.message || 'Unable to add flight. Please try again later.' });
    });
}

  addFlight = (newFlight) => {
  postFlight(newFlight)
    .then((flight) => {
      this.setState({ userFlights: [...this.state.userFlights, flight] });
    })
    .catch((error) => {
      console.error(error);
      this.setState({ error: error.message || 'Could not add your flight, please try again.' });
    });
};

  render() {
    const {userFlights, error } = this.state;
      if (error !== '') {
      return <ErrorComponent errorMessage={error} />
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LogFlight" options={{ title: 'Log Flight' }}>
            {(props) => <FlightForm {...props} addFlight={this.addFlight} userFlights={userFlights} />}
          </Stack.Screen>
          <Stack.Screen
            name="Flight History"
            component={FlightHistoryScreen}
            initialParams={{
              userFlights: this.state.userFlights
            }} />
          <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default AppNavigator

