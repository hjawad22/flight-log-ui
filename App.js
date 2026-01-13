import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './components/HomeScreen'
import FlightForm from './components/FlightForm'
import FlightHistoryScreen from './components/FlightHistoryScreen'
import FlightDetailsScreen from './components/FlightDetailsScreen'
import ErrorComponent from './components/Error'
import getUserFlights from './ApiCalls'


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
      .then(data => {
        this.setState({ userFlights: data })
      }).catch(error => {
        console.error(error)
        this.setState({ error: 'Could not gather your flights, please try again later!' })
      })
  }

  addFlight = (newFlight) => {
    console.log(newFlight)
    fetch("https://flight-log-api.vercel.app/api/flights", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFlight)
    })
      .then(res => res.json())
      .then(data => {
        const flight = data.data
        this.setState({ userFlights: [...this.state.userFlights, flight] });
      })
      .catch(error => {
        console.error('Error adding flight:', error);
        this.setState({ error: 'Could not add your flight' });
      });
  }
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

