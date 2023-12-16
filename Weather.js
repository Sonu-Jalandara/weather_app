const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5140475b9msh539baed7d5ad462p13a59fjsn6cf0ce24b957',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=' + city + '&format=json&u=f', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			humidity.innerHTML = response.current_observation.atmosphere.humidity
			pressure.innerHTML = response.current_observation.atmosphere.pressure
			visibility.innerHTML = response.current_observation.atmosphere.visibility
			sunrise.innerHTML = response.current_observation.astronomy.sunrise
			sunset.innerHTML = response.current_observation.astronomy.sunset
			var checkTime = response.forecasts[0].date;
			var checkTime = new Date().getTime();
			var checkDate = new Date(checkTime);
			console.log(checkDate.toDateString());
			date.innerHTML = checkDate.toDateString()
            temperature.innerHTML = Math.round((response.current_observation.condition.temperature-32)*5/9)
			text.innerHTML = response.current_observation.condition.text
			chill.innerHTML = Math.round((response.current_observation.wind.chill-32)*5/9)
			direction.innerHTML = response.current_observation.wind.direction
			speed.innerHTML = response.current_observation.wind.speed
			day2.innerHTML=response.forecasts[2].day
			day3.innerHTML=response.forecasts[3].day
			day4.innerHTML=response.forecasts[4].day
			day5.innerHTML=response.forecasts[5].day
			day6.innerHTML=response.forecasts[6].day
			day7.innerHTML=response.forecasts[7].day
		    lowtemp.innerHTML=Math.round((response.forecasts[0].low-32)*5/9)
		    lowtemp0.innerHTML=Math.round((response.forecasts[0].low-32)*5/9)
		    lowtemp1.innerHTML=Math.round((response.forecasts[1].low-32)*5/9)
		    lowtemp2.innerHTML=Math.round((response.forecasts[2].low-32)*5/9)
		    lowtemp3.innerHTML=Math.round((response.forecasts[3].low-32)*5/9)
		    lowtemp4.innerHTML=Math.round((response.forecasts[4].low-32)*5/9)
		    lowtemp5.innerHTML=Math.round((response.forecasts[5].low-32)*5/9)
		    lowtemp6.innerHTML=Math.round((response.forecasts[6].low-32)*5/9)
		    lowtemp7.innerHTML=Math.round((response.forecasts[7].low-32)*5/9)
		    hightemp.innerHTML=Math.round((response.forecasts[0].high-32)*5/9)
		    hightemp0.innerHTML=Math.round((response.forecasts[0].high-32)*5/9)
		    hightemp1.innerHTML=Math.round((response.forecasts[1].high-32)*5/9)
		    hightemp2.innerHTML=Math.round((response.forecasts[2].high-32)*5/9)
		    hightemp3.innerHTML=Math.round((response.forecasts[3].high-32)*5/9)
		    hightemp4.innerHTML=Math.round((response.forecasts[4].high-32)*5/9)
		    hightemp5.innerHTML=Math.round((response.forecasts[5].high-32)*5/9)
		    hightemp6.innerHTML=Math.round((response.forecasts[6].high-32)*5/9)
		    hightemp7.innerHTML=Math.round((response.forecasts[7].high-32)*5/9)
			text0.innerHTML=response.forecasts[0].text
			text1.innerHTML=response.forecasts[1].text
			text2.innerHTML=response.forecasts[2].text
			text3.innerHTML=response.forecasts[3].text
			text4.innerHTML=response.forecasts[4].text
			text5.innerHTML=response.forecasts[5].text
			text6.innerHTML=response.forecasts[6].text
			text7.innerHTML=response.forecasts[7].text
		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Kolkata")

const toggleButton = document.getElementById("toggle-icon")
const togglesearch = document.getElementById("find")
toggleButton.addEventListener('click', () => {
	togglesearch.classList.toggle('active')
})

