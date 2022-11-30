/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const searchButton = document.querySelector(\".search-icon\")\nconst cityText = document.querySelector(\".city-text\")\nconst temperatureText = document.querySelector(\".temperature-text\")\nconst errorMessage = document.querySelector(\".error-message\")\nconst feelsLikeText = document.querySelector(\".feels-like-text\")\nconst windText = document.querySelector(\".wind-text\")\nconst humidityText = document.querySelector(\".humidity-text\")\n\nlet citySearch = \"\";\n\n//CITY SEARCH EVENT LISTENER\nsearchButton.addEventListener('click', function() {\n\tcitySearchValue = document.querySelector(\".city-search\")\n\t\t.value;\n\tgetWeather(citySearchValue);\n})\n\n//INITIAL PAGE LOAD CITY WEATHER CALL\nwindow.onload = function pageLoadWeather() {\n\tgetWeather(\"Los Angeles\");\n}\n\n//OPEN_WEATHER API CALL\nasync function getWeather(citySearch) {\n\tconsole.log(citySearch)\n\ttry {\n\t\tconst response = await fetch(\"https://api.openweathermap.org/data/2.5/weather?q=\" + citySearch + \"&appid=1135e03f79d5ce571fbfdce744ed1984&units=imperial\", {\n\t\t\tmode: \"cors\"\n\t\t});\n\t\tconst weatherData = await response.json();\n\t\tconsole.log(weatherData)\n\t\t//WEATHER DATA VARIABLES\n\t\tconst cityName = weatherData.name\n\t\tconst countryOrigin = weatherData.sys.country\n\t\tconst temperature = Math.round(weatherData.main.temp)\n\t\tconst feelsLikeTemp = Math.round(weatherData.main.feels_like)\n\t\tconst windSpeed = Math.round(weatherData.wind.speed)\n\t\tconst humidity = weatherData.main.humidity\n\t\t//UPDATE TEXT\n\t\ttemperatureText.innerHTML = temperature + \"&#8457;\"\n\t\tcityText.innerHTML = cityName + \", \"  + countryOrigin\n\t\tfeelsLikeText.innerHTML = \"FEELS LIKE: \" + feelsLikeTemp + \"&#8457;\"\n\t\twindText.innerHTML = \"WIND: \" + windSpeed + \"MPH\"\n\t\thumidityText.innerHTML = \"HUMIDITY: \" + humidity + \"%\"\n\t} catch (err) {\n\t\t(errorMessage.innerHTML = \"There was an error searching for this city\"), err;\n\t};\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;