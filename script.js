document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '8ee9ae942b2249c6504e3c26f9882166';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const location = 'Brahmapur'; // Replace with your desired city
  
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById('location').innerText = data.name + ', ' + data.sys.country;
        document.getElementById('temperature').innerText = data.main.temp + '°C';
        document.getElementById('description').innerText = data.weather[0].description;
      })
      .catch(error => console.error('Error fetching weather data:', error));
  });