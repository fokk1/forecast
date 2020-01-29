const fetchData = async (lat, lon) => {
	const response = await axios.get('https://api.weatherbit.io/v2.0/current/', {
		params: {
			key: '1a978d0248e34cd487d1a72091a53e8b',
			units: 'M',
			lat,
			lon
		}
	});

	return response.data;
};

const locationSucess = async (position) => {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const { data } = await fetchData(lat, lon);
	const [
		{ ob_time, temp, city_name, app_temp, wind_spd, wind_cdir_full, pres, rh, sunrise, sunset, weather }
	] = data;
	const { icon, description } = weather;

	const leftCard = document.querySelector('#left');
	leftCard.innerHTML = `
		<div class="header">
			<div>Current Weather</div>
			<div><span>&#8451;</span></div>
		</div>
		<div class="time">${city_name}, ${ob_time}</div>
		<div class="weather">
			<div class="temperatures">
				<div class="curr__temp">${Math.floor(temp)}<span>&#176;</span></div>
				<div class="type">${description}</div>
				<div class="real-feel">Feels like: ${Math.floor(app_temp)}<span>&#176;</span></div>
			</div>
			<img class="weather-icon" src="img/icons/${icon}.png" alt="">
		</div>
	`;

	const rightCard = document.querySelector('#right');
	rightCard.innerHTML = `
		<p>Wind: ${wind_cdir_full} at ${Math.floor(wind_spd)} m/s</p>
		<p>Pressure: ${Math.floor(pres)} mbar</p>
		<p>Humidity: ${rh}%</p>
		<p>Sunrise: ${sunrise}</p>
		<p>Sunset: ${sunset}</p>
	`;
};

const locationError = (error) => {
	const modal = document.querySelector('.modal');
	modal.classList.add('is-active');
};

navigator.geolocation.getCurrentPosition(locationSucess, locationError);
