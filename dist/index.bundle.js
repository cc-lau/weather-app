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

eval("const searchButton = document.querySelector(\".search-icon\")\nconst metricSymbol = document.querySelector(\".metric-symbol\")\nconst metricSymbolText = document.querySelector(\".metric-symbol-text\")\nconst cityText = document.querySelector(\".city-text\")\nconst temperatureText = document.querySelector(\".temperature-text\")\nconst errorMessage = document.querySelector(\".error-message\")\nconst feelsLikeText = document.querySelector(\".feels-like-text\")\nconst windText = document.querySelector(\".wind-text\")\nconst humidityText = document.querySelector(\".humidity-text\")\n//CITY SEARCH EVENT LISTENER\nsearchButton.addEventListener('click', function() {\n\t//RESET ERROR MESSAGE\n\tif (errorMessage.innerHTML = \"There was an error searching for this city\") {\n\t\terrorMessage.innerHTML = \"\"\n\t}\n\tlet citySearchValue = document.querySelector(\".city-search\")\n\t\t.value;\n\tgetWeather(citySearchValue);\n})\n//METRIC SYMBOL EVENT LISTENER\nconst fahrenheitSymbol = \"&#8457;\"\nconst celsiusSymbol = \"&#x2103;\"\nlet tempMode = \"fahrenheit\"\nconsole.log(tempMode)\nmetricSymbol.addEventListener('click', function(){\n\tmetricSymbolHandler() \n\tlet citySearchValue = document.querySelector(\".city-search\").value;\n\tgetWeather(citySearchValue)\n})\n\nfunction metricSymbolHandler() {\n\tif (tempMode === \"fahrenheit\") {\n\t\ttempMode = \"celsius\"\n\t\tmetricSymbolText.innerHTML = celsiusSymbol\n\t\tconsole.log(tempMode)\n\t} else {\n\t\ttempMode = \"fahrenheit\"\n\t\tmetricSymbolText.innerHTML = fahrenheitSymbol\n\t\tconsole.log(tempMode)\n\t}\n}\n//INITIAL PAGE LOAD CITY WEATHER CALL\nwindow.onload = function pageLoadWeather() {\n\tgetWeather(\"Los Angeles\");\n}\n//OPEN_WEATHER API CALL\nasync function getWeather(citySearch) {\n\tconsole.log(citySearch)\n\ttry {\n\t\tconst response = await fetch(\"https://api.openweathermap.org/data/2.5/weather?q=\" + citySearch + \"&appid=1135e03f79d5ce571fbfdce744ed1984&units=imperial\", {\n\t\t\tmode: \"cors\"\n\t\t});\n\t\tconst weatherData = await response.json();\n\t\tconsole.log(weatherData)\n\t\t//WEATHER DATA VARIABLES\n\t\tconst cityName = weatherData.name\n\t\tconst countryOrigin = weatherData.sys.country\n\t\tconst temperature = Math.round(weatherData.main.temp)\n\t\tconst feelsLikeTemp = Math.round(weatherData.main.feels_like)\n\t\tconst windSpeed = Math.round(weatherData.wind.speed)\n\t\tconst humidity = weatherData.main.humidity\n\t\t\n\t\tconst fahrenheitTemp = temperature\n\t\tconst celsiusTemp = Math.round((temperature - 32) * (5 / 9))\n\n\t\tconst fahrenheitFeelsLikeTemp = feelsLikeTemp\n\t\tconst celsiusFeelsLikeTemp = Math.round((feelsLikeTemp - 32) * (5 / 9))\n\t\tconsole.log(celsiusTemp)\n\t\t//UPDATE TEXT\n\t\tfunction updateText() {\n\t\t\tif(tempMode === \"fahrenheit\") {\n\t\t\t\ttemperatureText.innerHTML = fahrenheitTemp + fahrenheitSymbol\n\t\t\t\tfeelsLikeText.innerHTML = \"FEELS LIKE: \" + fahrenheitFeelsLikeTemp + fahrenheitSymbol\n\t\t\t} else if (tempMode === \"celsius\") {\n\t\t\t\ttemperatureText.innerHTML = celsiusTemp + celsiusSymbol\n\t\t\t\tfeelsLikeText.innerHTML = \"FEELS LIKE: \" + celsiusFeelsLikeTemp + celsiusSymbol\n\t\t\t}\n\t\t\tcityText.innerHTML = cityName + \", \" + countryOrigin\n\t\t\twindText.innerHTML = \"WIND: \" + windSpeed + \" MPH\"\n\t\t\thumidityText.innerHTML = \"HUMIDITY: \" + humidity + \"%\"\n\t\t}\n\t\tupdateText();\n\t} catch (err) {\n\t\t(errorMessage.innerHTML = \"There was an error searching for this city\"), err;\n\t};\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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