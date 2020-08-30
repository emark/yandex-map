ymaps.ready(init);
function init() {
myMapGeo = new ymaps.Map('YMapsIDgeopoint', {
center: [55.600852, 36.46187],
zoom: 16,
controls: ['zoomControl', 'searchControl', 'typeSelector', 'geolocationControl']
});
myMapGeo.events.add('click', function (e) {
	var coords = e.get('coords');
	$('#geopoint').val( [coords[0].toPrecision(6), coords[1].toPrecision(6)].join(', ') ); 	
	myMapGeo.balloon.open(coords, 'Местонахождение ЭПУ отмечено.<br><sup>Вы можете закрыть и выбрать другое местоположение.</sup>');
});

myMapGeo2 = new ymaps.Map('YMapsIDgeopoint2', {
center: [56.013722, 92.85521],
zoom: 16,
controls: ['zoomControl', 'typeSelector']
});

}

function show_baloon(){

var position = $("#geopoint").val().split(', ');

myMapGeo2.balloon.open(position, "Расположение ЭПУ", {
        // Опция: не показываем кнопку закрытия.
        closeButton: false
    });
}
