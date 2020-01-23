function locationSucess(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	fetchData(lat, lon);
}

function locationError(error) {
	const alert = document.querySelector('.alert');
	alert.classList.remove('hidden');
}

navigator.geolocation.getCurrentPosition(locationSucess, locationError);
