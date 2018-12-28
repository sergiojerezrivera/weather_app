export class Weather {

    constructor(city, countryCode) {
        this.apiKey = '3d35e445debf464f0a119a60ba2fe0c9';
        this.city = city;
        this.countryCode = countryCode;
    }



    //bring and return weather info of a city and country code from an API on internet
    async getWeather() {
        const URI = `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}`;
        const data = await fetch(URI);
        //const response = await fetch(URI);
        //const data = response.json();
        return data;
    }



}