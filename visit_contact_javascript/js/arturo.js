(function () {

	var hasClass = function (el, selector) {
	   
	   var className = " " + selector + " ";
	  
		if ((" " + el.className + " ").replace(/[\n\t]/g, " ").indexOf(className) > -1) {
				
			return true;
	   	
	   	}
	  
	   return false;
	};

	var addClass = function (ele,cls) {
		
		if (!hasClass(ele,cls)) ele.className += " "+cls;
	
	};

	var removeClass = function (ele,cls) {

		if (hasClass(ele,cls)) {
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			ele.className=ele.className.replace(reg,' ');
		}

	};


	var upDown = (function () {

		return {

			hide: function (el) {

				removeClass(el, 'hide');

			},

			show: function (el) {

				addClass(el, 'hide');

			},

			init: function () {

				$('.contact-button').on('click', function (e) { //menu-popup

					e.preventDefault();

					var $this = $(this);

						if($this.hasClass('contact-button')) {

							var checkContact = $('#contact-popup-container').hasClass('hide');

							$('#contact-popup-container').siblings().addClass('hide');

							if(checkContact) {

								$('#contact-popup-container').removeClass('hide');

							} else {

								$('#contact-popup-container').addClass('hide');

							}

						}

					return false;

				});

			}

		}

	})();


	


	document.addEventListener('DOMContentLoaded', function () {

		/*
			up | down animation
		*/
			upDown.init();

	}, false);


})();