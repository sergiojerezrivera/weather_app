export class UI {

    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.string = document.getElementById('weather-string');
        this.humidity = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    //Fetch Data from the API in Weather-class in a object and fill the properties
    //of this UI class 
    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.string.textContent = weather.main.temp + 'ºC';
        this.humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %';
        this.wind.textContent = 'Wind: ' + weather.wind.speed + 'm/s'; 
    }





}