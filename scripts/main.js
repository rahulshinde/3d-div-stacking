var SITE = SITE || {};

SITE.accordion = {
	init: function() {
		enquire.register('screen and (max-width: 599px)', {
			match : function() {
				console.log('mobile');
			},

			unmatch : function() {
				console.log('desktop')
			}
		})
	}
};

SITE.features = {
	init: function() {
		var features = $('body').data('features');
		var featuresArray = [];

		if(features) {
			featuresArray = features.split(' ')

			for(var i = 0; featuresArray.length; i++) {
				var func = featuresArray[i];

				if(SITE[func] && typeof SITE[func].init === 'function') {
					SITE[func].init();
				}
			}
		}
	}
};

$(function () {
	SITE.features.init();
});