import Config from "react-native-config";

const fetchMainRoute = async () => {
    try {
      const apiKey = Config.API_KEY;
      const response = await fetch('https://lambda.rideyego.com/technical-test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': `${apiKey}`
        }
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('API response:', data);
      return data;
    } catch (error) {
      console.error('There was a problem with the API request:', error);
      return [];
    }
  };

export default fetchMainRoute;