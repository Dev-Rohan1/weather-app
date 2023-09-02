/**
 * Title: Weather application using JavaScript.
 * Description: This js file has all the js functions necessary to control the weather apps.
 * Author: (Dev Rohan).
 * Date: 26/08/2023.
 */

// select elements & assing them to variable  
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const apiKey = "fb5a7e5108487f26623c8c0ad572eb36"; // weather Apikey
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // weather Apiurl

// function
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // Invalid city name checking
    if (response.status === 404) {
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await response.json();

        // select element
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
        // checking & weather iocn change
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "../images/clouds.png";
        } else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "../images/clear.png";
        } else if (data.weather[0].main == 'Rain') {
            weatherIcon.src ="../images/ain.png";
        } else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src ="../images/drizzle.png";
        }else if(data.weather[0].main == 'mist') {
            weatherIcon.src ="../images/mist.png";
        }
    
       document.querySelector('.weather').style.display = "block";
       document.querySelector('.error').style.display = 'none';
    }



}

// event handler
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

