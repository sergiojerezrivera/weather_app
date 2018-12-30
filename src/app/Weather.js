export class Weather {

    constructor(city, countryCode) {
      this.apiKey = '3d35e445debf464f0a119a60ba2fe0c9'; //replace it for you API key
      this.city = city;
      this.countryCode = countryCode;
    }
  
    async getWeather() {
      const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`;
      const response = await fetch(URI);
      const data = await response.json();
      return data;
    }
  
    changeLocation(city, countryCode) {
      this.city = city;
      this.countryCode = countryCode;
    }
  
  }