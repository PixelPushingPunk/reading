// timed interval
var interval;
// keep track of width
var width;
// resize image on browser resize
var resize_on_fly = true;

jQuery(document).ready(function(){
	// show items that are hidden for non-js browsers
	jQuery('.js_show').show();
	
	// do resize logic
	resize_images();
	
	// do resize logic on browser resize
	if(resize_on_fly) {
		jQuery(window).resize(function() {
			// if the interval is not in process
			if(!interval) {
				// start the interval to check the width
				interval = setInterval(check_width, 500);
			}
		});
	}
 });
 
 /**
  * Check Width funtion
  *
  * Checks the width of the browser at regular intervals
  * and only fires the resize_image function when the resizing
  * has finished. Prevents loads of Ajax calls if browser
  * is being dragged
  */
 function check_width() {
	if(width != jQuery(window).width()) {
		width = jQuery(window).width();
		resize_images();
	} else {
		clearInterval(interval);
		interval = null;
	}
 }
 
 /**
  * Resize Images function
  *
  * Loops through all images with a resize class fires off
  * an Ajax call to determine which file to display depending
  * on the browser width
  */
 function resize_images() {
	jQuery('img.resize').each(function(){
		var _image = jQuery(this);
		jQuery.ajax({
			type: "POST",
			url: "resize.php",
			data: "width="+jQuery(window).width()+"&image="+_image.attr('rel'),
			success: function(msg) {
				_image.attr('src',msg);
				_image.removeClass('loading_image');
			}
		});
	});
 }