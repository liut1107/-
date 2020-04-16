$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('#gHeader').addClass('on');
		} else {
			$('#gHeader').removeClass('on');
		}
	});
	
	$('#gHeader .menu').click(function(){
		$('#gHeader').toggleClass('menuOpened');
		$('#gHeader .menu').toggleClass('on');
		$('.navBox').fadeToggle(300);
		return false;	
	});
});

$(window).load(function(){
	initialize('map',34.3522964,134.0236783);
});

function initialize(id,n,m) {
	var latlng = new google.maps.LatLng(n,m);
	var myOptions = {
		zoom: 17,
		center: latlng,
		scrollwheel: false,
		mapTypeControl: false,
		panControl: false,
		streetViewControl: false,
		zoomControl: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById(id), myOptions);
	
	//アイコン設定
	if($(window).width()>768){
		var icon = {
			url : "img/index/map_icon.png"
		}
	}else{
		var icon = {
			url : "img/index/sp_map_icon.png",
/*			scaledSize : new google.maps.Size(50, 50)
*/		}
	}
	var markerOptions = {
		position: latlng,
		map: map,
		icon: icon
	};
	var marker = new google.maps.Marker(markerOptions);
	
	google.maps.event.addDomListener(window, "resize",
            function() {
                map.setCenter(latlng)
            })
	
	var styleOptions = [
	  {
		"stylers": [
		  { "saturation": -100 }
		]
	  }
	];
	
	var lopanType = new google.maps.StyledMapType(styleOptions);
	map.mapTypes.set('maptype', lopanType);
	map.setMapTypeId('maptype');
}