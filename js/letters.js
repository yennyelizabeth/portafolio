// USES JQUERY
		var h1 = $('h1') // GET CONTROLLED ELEMENT
		var topText = h1.offset().top + (h1.height() / 2);
		var leftText = h1.offset().left + (h1.width() / 2);

		$(document).on('mousemove', function (e) { // DETERMINE MOUSE COORDINATES | SHADOW DISTANCE
			var mx = e.clientX;
			var my = e.clientY;
			var dx = leftText - mx;
			var dy = topText - my;
			var blur = Math.sqrt((dx * dx) + (dy * dy));
			h1.css({ // MOVES SHADOW
				"text-shadow": dx / 45 + "px " + dy / 45 + "px " + blur / 45 + "px " + "rgba(0,0,0,.5)",
				"-webkit-text-shadow": dx / 45 + "px " + dy / 45 + "px " + blur / 45 + "px " + "rgba(0,0,0,.5)",
				"-moz-text-shadow": dx / 45 + "px " + dy / 45 + "px " + blur / 45 + "px " + "rgba(0,0,0,.5)",
				"-o-text-shadow": dx / 45 + "px " + dy / 45 + "px " + blur / 45 + "px " + "rgba(0,0,0,.5)"
			});
		});