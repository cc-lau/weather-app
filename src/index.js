const searchButton = document.querySelector(".search-icon")
const cityText = document.querySelector(".city-text")
const temperatureText = document.querySelector(".temperature-text")
const errorMessage = document.querySelector(".error-message")
const feelsLikeText = document.querySelector(".feels-like-text")
const windText = document.querySelector(".wind-text")
const humidityText = document.querySelector(".humidity-text")

//CITY SEARCH EVENT LISTENER
searchButton.addEventListener('click', function() {
	let citySearchValue = document.querySelector(".city-search")
		.value;
	getWeather(citySearchValue);
})

//INITIAL PAGE LOAD CITY WEATHER CALL
window.onload = function pageLoadWeather() {
	getWeather("Los Angeles");
}

//OPEN_WEATHER API CALL
async function getWeather(citySearch) {
	console.log(citySearch)
	try {
		const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=1135e03f79d5ce571fbfdce744ed1984&units=imperial", {
			mode: "cors"
		});
		const weatherData = await response.json();
		console.log(weatherData)
		//WEATHER DATA VARIABLES
		const cityName = weatherData.name
		const countryOrigin = weatherData.sys.country
		const temperature = Math.round(weatherData.main.temp)
		const feelsLikeTemp = Math.round(weatherData.main.feels_like)
		const windSpeed = Math.round(weatherData.wind.speed)
		const humidity = weatherData.main.humidity
		//UPDATE TEXT
		temperatureText.innerHTML = temperature + "&#8457;"
		cityText.innerHTML = cityName + ", "  + countryOrigin
		feelsLikeText.innerHTML = "FEELS LIKE: " + feelsLikeTemp + "&#8457;"
		windText.innerHTML = "WIND: " + windSpeed + "MPH"
		humidityText.innerHTML = "HUMIDITY: " + humidity + "%"
	} catch (err) {
		(errorMessage.innerHTML = "There was an error searching for this city"), err;
	};
}