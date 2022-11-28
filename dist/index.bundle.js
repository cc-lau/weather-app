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

eval("const searchButton = document.querySelector(\".search-icon\")\nconst temperatureText = document.querySelector(\".temperature-text\")\nconst errorMessage = document.querySelector(\".error-message\")\nsearchButton.addEventListener('click', getWeather)\n\n\n\nasync function getWeather() {\n/* \tconst citySearch = document.querySelector(\".city-search\").value;\n */\t\n  const citySearch = \"London\";\n  console.log(citySearch);\n\ttry {\n\t\tconst response = await fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1135e03f79d5ce571fbfdce744ed1984&units=imperial\", /* + citySearch, */ {\n\t\t\tmode: \"cors\"\n\t\t});\n\t\tconst weatherData = await response.json();\n\t\tconsole.log(weatherData)\n\t\tconst temperature = Math.round(weatherData.main.temp)\n\n\t\tconsole.log(temperature)\n\t\ttemperatureText.innerHTML = temperature + \"&#8457;\"\n\t} catch (err) {\n\t\t(errorMessage.innerHTML = \"There was an error searching for this city\"),\n\t\terr;\n\t};\n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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