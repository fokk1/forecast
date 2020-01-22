function complete() {
	navigator.geolocation.getCurrentPosition(function(position) {
		const lat = position.coords.latitude;
		const lon = position.coords.longitude;
		fetchData(lat, lon);
	});
}

window.onload = function() {
	complete();
};
