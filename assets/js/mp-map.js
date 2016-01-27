var map = L.map( 'map', {
  center: [customers[5].lat, customers[5].lon],
  zoom: 4
});

L.tileLayer( 'http://otile1.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
}).addTo(map);

var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < customers.length; ++i )
{
  var marker = L.marker([customers[i].lat, customers[i].lon])
  marker.bindPopup(JSON.stringify(customers[i].address))
  markerClusters.addLayer(marker);
}

map.addLayer(markerClusters);