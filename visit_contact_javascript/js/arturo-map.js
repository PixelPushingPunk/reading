(function () {

	function initializeb() {

		/*
			Dentsu Longitude Latitude
		*/
		var myLatlng = new google.maps.LatLng(3.150299, 101.652799);

		/*
			Map options
		*/
		var	mapOptions = {
			center: myLatlng, // { lat: 3.150290, lng: 101.653260},
			zoom: 17
		};

		/*
			Instantiate New Map
		*/
		var map = new google.maps.Map(
			document.getElementById('map-canvas'),
			mapOptions
		);

		/*	
			Map Markers
		*/
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			title:"University of Reading Malaysia, City Campus"
		});

		/*
			Map Styles
		*/
		

	}


	function initialize() {

		/*
			Uni Longitude Latitude
		*/
		var uniLatlng = new google.maps.LatLng(1.459759, 103.763104);

		/*
			Map Options
		*/
		var	mapOptions = {
			center: uniLatlng, // { lat: 3.150290, lng: 101.653260},
			zoom: 17
		};

		/*
			Instantiate new map
		*/
		var map = new google.maps.Map(
			document.getElementById('map-canvas'),
			mapOptions
		);

		/*
			Marker
		*/
		var marker = new google.maps.Marker({
			position: uniLatlng,
			map: map,
			title:"University of Reading Malaysia, Educity Campus"
		});

		/*
			Map Styles
		*/
		map.set('styles', [
			/*
				Landscapes
			*/
			{
				featureType: 'landscape',
				elementType: 'geometry.fill',
				stylers: [
				  	{ hue: '#ffff00' },
				  	{ gamma: 1.4 },
				  	{ saturation: 82 },
				  	{ lightness: 96 }
				]
			}, {
		        featureType: "landscape.natural",
		        elementType: "geometry.fill",
		        stylers: [
		            { visibility: "on" },
		            { color: "#b9b9b9" }
		        ]
		    }, {
		    	featureType: 'landscape.natural.terrain',
		    	elementType: 'geometry.fill',
		    	stylers: [
		    		{ visibility: 'on' },
		    		{ color: '#526c59' }
		    	]
		    }, {
		    	featureType: 'landscape.natural.landcover',
		    	elementType: 'geometry.fill',
		    	stylers: [
		    		{ visibility: 'on' },
		    		{ color: '#ffff00' }
		    	]
		    },{
		        //buildings
		        featureType: 'landscape.man_made',
		        elementType: 'labels.icon',
		        stylers: [
		        	{ visibility: 'on' },
		        	{ color: '#333333' }
		        ]
		    }, {
		    	featureType: 'landscape.man_made',
		    	elementType: 'geometry.stroke',
		    	stylers: [
		    		{ visibility: 'on' },
		    		{ color: '#333333' }
		    	]
		    },

		    /*
		    	Roads
		    */
		    {
				featureType: 'road',
				elementType: 'geometry',
				stylers: [
				  	{ color: '#808080' } 
				]
			}, { 
				featureType: 'road.local',
				elementType: 'geometry.fill',
				stylers: [
					{ color: '#9f9f9f' }
				]
			}, { 
				featureType: 'road.highway',
				elementType: 'geometry.fill',
				stylers: [
					{ color: '#808080' }
				]
			}, {
				featureType: 'road.arterial',
				elementType: 'geometry.fill',
				stylers: [
					{ color: '#666666' }
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
			}, {
				featureType: 'road',
				elementType: 'labels.text.fill',
				stylers: [
					{ color: '#ffffff' }
				]
			}, 

			/*
				Points of Interests
			*/
			{
				featureType: 'poi.park',
				elementType: 'geometry.fill',
				stylers: [
					{ color: '#526c59' }
				]
			},

			{
				featureType: 'poi',
				elementType: 'labels.icon',
				stylers: [
					{ "visibility": "on" },
					{ color: '#333333' },
					{ weight: 200 }
				]
			}, {
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [
					{ color: '#d2002e' }
				]
			}, 

			/*
				Water
			*/
			{
				featureType: 'water',
				elementType: 'geometry.fill',
				stylers: [
					{ color: '#5d688e' }
				]
			}
		]);

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