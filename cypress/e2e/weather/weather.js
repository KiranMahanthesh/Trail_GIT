// import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// const { createCityCSV, getCityCoordinates, getWeatherData, saveWeatherStats } = require('../../support/utils');
// const fs = require('fs');
// const _ = require('lodash');

// Given('a city dataset {string} exists', (filename) => {
//   createCityCSV();
// });

// When('I fetch weather statistics for cities', async () => {
//   const cities = fs.readFileSync('cypress/fixtures/city.csv', 'utf-8')
//     .split('\n')
//     .slice(1) // Remove header
//     .map(line => line.trim())
//     .filter(city => city);

//   const weatherData = [];

//   for (const city of cities) {
//     const { lat, lon } = await getCityCoordinates(city);
//     const data = await getWeatherData(lat, lon);
//     const temp = _.minBy(data.daily, 'temp.day').temp.day; // Example: Fetch coldest temp
//     const humidity = _.maxBy(data.daily, 'humidity').humidity; // Example: Fetch highest humidity

//     weatherData.push({ city, temp, humidity });
//   }

//   saveWeatherStats(weatherData);
// });

// Then('I should get the top N coldest cities', () => {
//   const stats = fs.readFileSync('cypress/fixtures/city_stats.csv', 'utf-8');
//   // Implement validation for top N coldest cities
//   cy.log(stats);
// });

// Then('I should get the top N cities with the highest humidity', () => {
//   const stats = fs.readFileSync('cypress/fixtures/city_stats.csv', 'utf-8');
//   // Implement validation for top N cities with highest humidity
//   cy.log(stats);
// });
