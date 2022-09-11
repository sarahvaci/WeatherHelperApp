// WHEN I view current weather conditions for that city
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city



//var apiKey = '42abd14e58eb4bf22ed53ff81d7dbf4a'; 
//https://api.openweathermap.org/data/2.5/weather?q=London&appid=42abd14e58eb4bf22ed53ff81d7dbf4a


var form = document.getElementById("form");
function handleForm(event){
    event.preventDefault();
    showCity();
}
form.addEventListener ('submit', handleForm);

const showCity = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=42abd14e58eb4bf22ed53ff81d7dbf4a');
    const data = await response.json();


//show city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index.
//{"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":286.49,"feels_like":286.36,"temp_min":284.46,"temp_max":288.15,"pressure":1018,"humidity":95},"visibility":10000,"wind":{"speed":1.03,"deg":350},"clouds":{"all":9},"dt":1662864690,"sys":{"type":2,"id":2075535,"country":"GB","sunrise":1662874131,"sunset":1662920753},"timezone":3600,"id":2643743,"name":"London","cod":200}

console.log(data.weather);
document.write(`weather: ${data.weather[0].description}
<br> temperature: ${main.temp}
<br> humidity: ${95}`); 

}
