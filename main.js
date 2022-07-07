function fetchWeather(city) {
    const apiKey = "09c5c2dfec3b4287df8859c27e18db3c";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + apiKey) 
    .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
    .then((data) => displayWeather(data))
}

function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
}

function search() {
    const searchValue = document.querySelector(".search-bar").value;
    fetchWeather(searchValue);
}

document.querySelector(".button-search").addEventListener("click", function () {
    search();
});

document.addEventListener("DOMContentLoaded", function () {
    fetchWeather("Ivano-Frankivsk");
});

document.querySelector(".guide-button").addEventListener("click", function () {
    // document.querySelector(".weather").style.display = "none";
    
    // function hideCard() {
    //     const card = document.getElementById("card");
    //     card.style.display = "none";
    // }
    
    function showCards() {
        const cards = document.getElementById("3-day");
        cards.style.display = "flex";  	 
    }
    showCards();
});
