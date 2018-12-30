// IMPORTS/REQUIRE FILES/CLASSES
require('./index.css');
const { UI } = require('./UI');
const { Weather } = require('./Weather');
const { Store } = require('./Store');


//NEW INSTANCES/OBJECTS OF CLASSES
const storage = new Store();
const {city, countryCode}= storage.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();


async function fetchWeather() {
    const data = await weather.getWeather();
    //console.log(data);
    ui.render(data);
}



//Create a (click) event on the Button + Collect input boxes from the Form and Store values to change the Weather Values & setLocation local Storage 
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const countryCode = document.getElementById('countryCode').value;
    weather.changeLocation(city, countryCode);
    storage.setLocationData(city, countryCode);
    fetchWeather();
});




document.addEventListener('DOMContenLoaded', fetchWeather());