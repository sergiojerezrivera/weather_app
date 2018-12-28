// IMPORTS/REQUIRE FILES/CLASSES
require('./index.css');
const {Weather} = require('./Weather');


//NEW INSTANCES/OBJECTS OF CLASSES
const weather = new Weather('London', 'GB');


async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
}


document.addEventListener('DOMContenLoaded', fetchWeather);