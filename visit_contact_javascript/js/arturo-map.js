(function () {
	function initialize() {

			/*
				Dentsu Longitude Latitude
			*/
			var myLatlng = new google.maps.LatLng(3.150299, 101.652799);

			var	mapOptions = {
					center: myLatlng, // { lat: 3.150290, lng: 101.653260},
					zoom: 20
				};

			var map = new google.maps.Map(
				document.getElementById('map-canvas'),
				mapOptions
			);

			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title:"Dentsu"
			});


			map.set('styles', [
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [
					  	{ color: '#CCCCCC' },
					  	{ weight: 4.6 }
					]
				}, {
					featureType: 'road',
					elementType: 'labels',
					stylers: [

						{ saturation: -100 },
					  	{ invert_lightness: true },
					  	{ weight: 2 }
					]
				}, {
					featureType: 'road',
					elementType: 'labels.text.stroke',
					stylers: [
						{ color: '#CCCCCC' }
					]
				},
				{
					featureType: 'landscape',
					elementType: 'geometry',
					stylers: [
					  	{ hue: '#ffff00' },
					  	{ gamma: 1.4 },
					  	{ saturation: 82 },
					  	{ lightness: 96 }
					]
				}, {
					featureType: 'poi.school',
					elementType: 'geometry',
					stylers: [
					  	{ hue: '#fff700' },
					  	{ lightness: -15 },
					  	{ saturation: 99 }
					]
				}, {
					featureType: 'poi.business',
					elementType: 'labels.icon',
					stylers: [
						{ color: '#333333' }
					]
				}
			]);

	}

	function initializeb() {

		/*
			Uni Longitude Latitude
		*/
		var uniLatlng = new google.maps.LatLng(1.460880, 103.763147);

		var	mapOptions = {
				center: uniLatlng, // { lat: 3.150290, lng: 101.653260},
				zoom: 20
			};

		var map = new google.maps.Map(
			document.getElementById('map-canvas'),
			mapOptions
		);

		var marker = new google.maps.Marker({
			position: uniLatlng,
			map: map,
			title:"Uni"
		});

	}
	
	/*
		Animate visit container
	*/
	var visitAnimate = (function () {

		return {

			show: function () {

				setTimeout(function () {
					
					$('#visit-popup-container').removeClass('hide');

				}, 1000);

			}

		}

	})();

		
		/*
			On load ready
		*/
		document.addEventListener('DOMContentLoaded', function () {

			/*
				animate visit
			*/
			visitAnimate.show();


			/*
				google maps
			*/
			google.maps.event.addDomListener(window, 'resize', initialize);
			google.maps.event.addDomListener(window, 'load', initialize);

			var edubtn = document.getElementById('edu-btn');
			var citybtn = document.getElementById('city-btn');

			/*
				edu
			*/
			google.maps.event.addDomListener(edubtn, 'click', function () {
				
				$('#city-btn').parent().removeClass('active');
				$('#edu-btn').parent().addClass('active');

				initialize();

			});

			/*
				city
			*/
			google.maps.event.addDomListener(citybtn, 'click', function () {

				$('#edu-btn').parent().removeClass('active');
				$('#city-btn').parent().addClass('active');

				initializeb();

			});

			

		});

})();