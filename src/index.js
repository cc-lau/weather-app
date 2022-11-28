const searchButton = document.querySelector(".search-icon")
const temperatureText = document.querySelector(".temperature-text")
const errorMessage = document.querySelector(".error-message")
searchButton.addEventListener('click', getWeather)



async function getWeather() {
/* 	const citySearch = document.querySelector(".city-search").value;
 */	
  const citySearch = "London";
  console.log(citySearch);
	try {
		const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1135e03f79d5ce571fbfdce744ed1984&units=imperial", /* + citySearch, */ {
			mode: "cors"
		});
		const weatherData = await response.json();
		console.log(weatherData)
		const temperature = Math.round(weatherData.main.temp)

		console.log(temperature)
		temperatureText.innerHTML = temperature + "&#8457;"
	} catch (err) {
		(errorMessage.innerHTML = "There was an error searching for this city"),
		err;
	};
}