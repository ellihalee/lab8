function initMap() {
	console.log("hello");
	// add your code here
	var ucsd_ltlng = {lat:32.880, lng:-117.236};

	//create a map object and specifiy the DOM element for display
	var map = new google.maps.Map(document.getElementById('map'), {
		center:ucsd_ltlng, 
		zoom:15
	});

	var marker = new google.maps.Marker({
		position:ucsd_ltlng, 
		map: map,
		title:"UCSD"
	});

}