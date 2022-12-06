const searchButton = document.querySelector(".search-icon")
const metricSymbol = document.querySelector(".metric-symbol")
const metricSymbolText = document.querySelector(".metric-symbol-text")
const cityText = document.querySelector(".city-text")
const temperatureText = document.querySelector(".temperature-text")
const errorMessage = document.querySelector(".error-message")
const feelsLikeText = document.querySelector(".feels-like-text")
const windText = document.querySelector(".wind-text")
const humidityText = document.querySelector(".humidity-text")
//CITY SEARCH EVENT LISTENER
searchButton.addEventListener('click', function() {
	//RESET ERROR MESSAGE
	if (errorMessage.innerHTML = "There was an error searching for this city") {
		errorMessage.innerHTML = ""
	}
	let citySearchValue = document.querySelector(".city-search")
		.value;
	getWeather(citySearchValue);
})
//METRIC SYMBOL EVENT LISTENER
const fahrenheitSymbol = "&#8457;"
const celsiusSymbol = "&#x2103;"
let tempMode = "fahrenheit"
console.log(tempMode)
metricSymbol.addEventListener('click', function() {
	metricSymbolHandler()
	let citySearchValue = document.querySelector(".city-search").value;
	getWeather(citySearchValue)
})

function metricSymbolHandler() {
	if (tempMode === "fahrenheit") {
		tempMode = "celsius"
		metricSymbolText.innerHTML = celsiusSymbol
		console.log(tempMode)
	} else {
		tempMode = "fahrenheit"
		metricSymbolText.innerHTML = fahrenheitSymbol
		console.log(tempMode)
	}
}
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
		const fahrenheitTemp = temperature
		const celsiusTemp = Math.round((temperature - 32) * (5 / 9))
		const fahrenheitFeelsLikeTemp = feelsLikeTemp
		const celsiusFeelsLikeTemp = Math.round((feelsLikeTemp - 32) * (5 / 9))
		console.log(celsiusTemp)
		//UPDATE TEXT
		function updateText() {
			if (tempMode === "fahrenheit") {
				temperatureText.innerHTML = fahrenheitTemp + fahrenheitSymbol
				feelsLikeText.innerHTML = "FEELS LIKE: " + fahrenheitFeelsLikeTemp + fahrenheitSymbol
			} else if (tempMode === "celsius") {
				temperatureText.innerHTML = celsiusTemp + celsiusSymbol
				feelsLikeText.innerHTML = "FEELS LIKE: " + celsiusFeelsLikeTemp + celsiusSymbol
			}
			cityText.innerHTML = cityName + ", " + countryOrigin
			windText.innerHTML = "WIND: " + windSpeed + " MPH"
			humidityText.innerHTML = "HUMIDITY: " + humidity + "%"
		}
		updateText();
	} catch (err) {
		(errorMessage.innerHTML = "There was an error searching for this city"), err;
	};
}