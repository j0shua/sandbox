$(function() {

    percent_to_hsla_range = function(percent, startColor, endColor) {
        var colorRange = endColor - startColor;
        return (percent * colorRange) / 100 + startColor;
    };


    hsl_to_rgb = function(h, s, l) {
        function hue_to_rgb(m1, m2, h) {
            h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
            if (h * 6 < 1) {
                return m1 + (m2 - m1) * h * 6;
            } else if (h * 2 < 1) {
                return m2;
            } else if (h * 3 < 2) {
                return m1 + (m2 - m1) * (2 / 3 - h) * 6;
            } else {
                return m1;
            }
        }

        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;

        var r = hue_to_rgb(m1, m2, h + 1 / 3);
        var g = hue_to_rgb(m1, m2, h);
        var b = hue_to_rgb(m1, m2, h - 1 / 3);
        return {
            r: Math.floor(r*255),
            g: Math.floor(g*255),
            b: Math.floor(b*255)
        };
    };

    var clickCount = 0;
    var percentage_done = 0;
    var timeout;

	$("#pb-reset-button").click(function() {
		reset();
	});

	function reset(){
		clearTimeout(timeout);

		$("#pb-overlay").css({
			width: '100%'
		});
		$("#pb-effect").css({
			backgroundColor: "#f00"
		});
		percentage_done = 0;
	}

    $("#pb-button").click(function() {
    	// make sure we are starting fresh
    	reset();

        ++clickCount;
        // percentage_done += 5;

        update();

        function update(){
	        if (percentage_done <= 100) {
	            // convert the progress (percent) into a number within the desired range
	            var hslaVal = percent_to_hsla_range(percentage_done,10, 90);

	            // convert that # val to a rgb color
	            var colorVal = hsl_to_rgb(hslaVal/360, 1, 0.5);
	            var colorString = 'rgb('+colorVal.r+', '+colorVal.g+', '+colorVal.b+')';
	            /*
	            // debuggin
	            $("#hslaVal").text(hslaVal);
	            $("#colorVal").text(JSON.stringify(colorVal));
	            $("#state").text(percentage_done);
	            console.log(colorVal);
	            */

	            //compose the color string
	            console.log(colorString);

	            // animate to the color string
	            $("#pb-effect").css({
	                backgroundColor: colorString
	            });

	            // also animate the overlay to reveal more of the bar
	            var percent_left = 100 - percentage_done;
	            $("#pb-overlay").css({
	              width: percent_left+'%'
	            });

	            percentage_done++;

	            timeout = setTimeout(update, 25);
	        }
	        /*
	        else {
	          // reset everything
	          percentage_done = 0;
	          $("#pb-effect").css({
	                backgroundColor: rgb(255,0,0)
	          });
	          $("#pb-overlay").css({
	            width: "100%"
	          });
	        }
	        */
	    }

        $("#state").text(percentage_done);

    });
});