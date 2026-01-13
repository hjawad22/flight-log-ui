const getUserFlights = () => {
  return fetch('https://flight-log-api.vercel.app/api/flights')
    .then(response => {
      if (!response.ok) {
        throw new Error('Unable to fetch user flights. Please try again later.');
      }
      return response.json();
    });
};

export default getUserFlights