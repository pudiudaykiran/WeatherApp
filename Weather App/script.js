const inputBox =document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


async function checkWeather(city){
	const api_key ="ab7a017de183ca7eb45bb8f5c3aa2e83";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	const weather_data = await fetch(`${url}`).then(response => response.json());

	temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
	description.innerHTML = `${weather_data.weather[0].description}`;

	humidity.innerHTML = `${weather_data.main.humidity}%`;
	wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

	switch(weather_data.weather[0].main){
		case 'Clouds':
			weather_img.src = "/images/cloud.jpg";
		case 'Rain':
			weather_img.src = "/images/rain.jpg";
		case 'Clear':
			weather_img.src = "/images/clear.png";
		case 'Fog':
			weather_img.src = "/images/fog.jpg";
	}
	console.log(weather_data);

}

searchBtn.addEventListener('click',()=>{
	checkWeather(inputBox.value);
});