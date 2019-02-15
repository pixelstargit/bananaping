function initialize() {
  var earth = new WE.map('earth_div', {zoom: 2.3, position: [4.191264828126714,32.18684674999997], sky: true}
    );
  WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg',{
    attribution: 'NASA'
    }).addTo(earth);

    <!-- Markers -->
    var marker = WE.marker([4.76766, 7.018849999999929], 'images/marker_yellow.png').addTo(earth);
    marker.bindPopup("<h6 class='map-popup-title'>Human City Project</h6><div id='praxis-category'>CATEGORY:<br><a href='praxis-initiatives.html'>Activism & Engagement</a></div><div id='map-popup-location'>Port Harcourt<br>Nigeria</div><div id='map-popup-link'><a href='praxis-project.html'>Read more</a>", {maxWidth: 150, closeButton: true});

    var marker = WE.marker([12.9791198, 77.5912997], 'images/marker_blue.png').addTo(earth);
    marker.bindPopup("<h6 class='map-popup-title'>Urban Lens</h6><div id='praxis-category'>CATEGORY:<br><a href='praxis-initiatives.html'>Culture & Publics</a></div><div id='map-popup-location'>Bangalore & New Deli<br>India</div><div id='map-popup-link'><a href='praxis-project.html'>Read more</a>", {maxWidth: 150, closeButton: true});

    var marker = WE.marker([-26.205, 28.04970000000003], 'images/marker_grey.png').addTo(earth);
    marker.bindPopup("<h6 class='map-popup-title'>School Minimum Norms & Standards</h6><div id='praxis-category'>CATEGORY:<br><a href='praxis-initiatives.html'>Policy</a></div><div id='map-popup-location'>Johannesburg<br>South Africa</div><div id='map-popup-link'><a href='praxis-project.html'>Read more</a>", {maxWidth: 150, closeButton: true});

    var marker = WE.marker([-33.928992, 18.417396], 'images/marker_orange.png').addTo(earth);
    marker.bindPopup("<h6 class='map-popup-title'>AAPS</h6><div id='praxis-category'>CATEGORY:<br><a href='praxis-initiatives.html'>Academia & Research</a></div><div id='map-popup-location'>Cape Town<br>South Africa</div><div id='map-popup-link'><a href='praxis-project.html'>Read more</a>", {maxWidth: 150, closeButton: true});

    var marker = WE.marker([6.589309899895074, 3.3939842690333535], 'images/marker_pink.png').addTo(earth);
    marker.bindPopup("<h6 class='map-popup-title'>Title of Initiative</h6><div id='praxis-category'>CATEGORY:<br><a href='praxis-initiatives.html'>Built Environment</a></div><div id='map-popup-location'>Lagos<br>Nigeria</div><div id='map-popup-link'><a href='praxis-project.html'>Read more</a>", {maxWidth: 150, closeButton: true});

  }
