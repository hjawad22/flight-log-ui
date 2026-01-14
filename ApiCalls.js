
export const getUserFlights = async () => {
  const response = await fetch('https://flight-log-api.vercel.app/api/flights');

  if (!response.ok) {
  throw new Error('Unable to fetch user flights. Please try again later.');
  }
  
  const data = await response.json();
  return data; 
};

export const postFlight = async (newFlight) => {
  const response = await fetch('https://flight-log-api.vercel.app/api/flights', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newFlight),
  });

  if (!response.ok) {
    throw new Error('Unable to add flight. Please try again later.');
  }

  const data = await response.json();
  return data;
};