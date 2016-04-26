/*function initMap() {
  var myLatLng = {lat: -44.709675, lng: 169.130275};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}

*/

function initMap() {
  var myLatLng = {lat: -44.709675, lng: 169.130275};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Fly to the limit</h1>'+
      '<div id="bodyContent">'+
      '<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' + 
      'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'+ 
      'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat'+ 
      'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
      '<b> 1234 Lorem St , Wannaka </b>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Fly to the limit ( Wanaka )'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}