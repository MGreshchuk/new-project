function fetchWeather(city) {
    const apiKey = "09c5c2dfec3b4287df8859c27e18db3c";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey) 
    .then((response) => response.json())
    .then((data) => console.log(data))
}