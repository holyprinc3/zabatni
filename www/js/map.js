var lat=29.964622;
var lng=31.244334;
 var myLatlng = new google.maps.LatLng(lat,lng);
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Offer'
  });

}