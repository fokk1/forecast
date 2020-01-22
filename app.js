const fetchData = async (lat, lon) => {
	const response = await axios.get('https://api.weatherbit.io/v2.0/current/', {
		params: {
			key: '1a978d0248e34cd487d1a72091a53e8b',
			units: 'M',
			lat,
			lon
		}
	});

	const { data } = response.data;
	const [ { datetime, temp, city_name, wind_spd, wind_cdir_full, pres, rh, weather } ] = data;
	const { description } = weather;

	document.body.innerHTML = `
	<div class="forecast">
		<div class="container">

			<div class="up">
				<div class="time">${city_name}, ${datetime}</div>
				<div class="temperature">${Math.round(temp)}<span>&#8451<span></div>
				<div class="type">${description}</div>
			</div>

			<div class="down">
				<div class="wind">
					<h1>Wind</h1>
					<div><span>${Math.round(wind_spd)}</span> m/h ${wind_cdir_full}</div>
				</div>
				<div class="pressure">
					<h1>Pressure</h1>
					<div><span>${Math.round(pres)}</span> mbar</div>
				</div>
				<div class="humidity">
					<h1>Humidity</h1>
					<div><span>${rh}</span> %</div>
				</div>
			</div>
		</div>
	</div>
	`;
};
