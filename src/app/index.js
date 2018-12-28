// IMPORTS/REQUIRE FILES/CLASSES
require('./index.css');
const {UI} = require('./UI');
const {Weather} = require('./Weather');


//NEW INSTANCES/OBJECTS OF CLASSES
const weather = new Weather('Madrid', 'es');
const ui = new UI();


async function fetchWeather(){
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}


document.addEventListener('DOMContenLoaded', fetchWeather);