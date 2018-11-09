var feed = new Instafeed({
		get: 'user',
		userId: 4371316729,
		clientId: 'e0a41df0574b4cad95682d59671a2377',
		accessToken: '4371316729.e0a41df.312ba0448ee34d0582d058d2f462fbfb',
		target: 'instagram',
		template: '<img src="{{image}}" />',
		// sortBy: 'most-liked',
		limit: 50,
		resolution: 'standard_resolution',
		after: function(data) {
			
			console.log('am i being loaded?');
			var el = document.getElementById('instagram');
			console.log(data);
			if (el.classList)
				el.classList.add('show');
			else
				el.className += ' ' + 'show';
			$('.show').slick({
              slidesToShow: 3,
			  slidesToScroll: 1,
			  autoplay: true,
			  autoplaySpeed: 500
            });
		}
});

console.log('ohai');

window.onload = function() {
	feed.run();

	var _gauges = _gauges || [];
	(function() {
		var t   = document.createElement('script');
		t.type  = 'text/javascript';
		t.async = true;
		t.id    = 'gauges-tracker';
		t.setAttribute('data-site-id', '4d5aa2a95ffe1f587b000001');
		t.src = '//secure.gaug.es/track.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(t, s);
	})();
};
