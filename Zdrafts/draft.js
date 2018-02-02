// adds and removes responsive class from the Navbar
//function myNavBar(){
//    var navBar = document.getElementById("nav_bar");
//    if(navBar.className === "navbar"){
//        navBar.className += " responsive";
//    } else {
//        navBar.className = "navbar";
//    }
//}


function showNavBar(){
    var navBar = document.getElementById("nav_bar");
    
    if(navBar.style.display === "hidden"){
        console.log = ("it is working");
        navBar.style.display = "block";
    } else {
        navBar.style.display = "hidden";
    }
}

//var typed = new Typed('.element', {
//  strings: ["I am Fatuma Ingabire", "A Student at ALU", "Also An Intern at ALU"],
//  typeSpeed: 30
//});


var options = {
  strings: ["I am Fatuma Ingabire", "A Student at ALU", "Also An Intern at ALU"],
  typeSpeed: 40
}

var typed = new Typed(".element", options);

//function showNavBar(){
//    document.getElementById("nav_bar").style.display = "block";
//}

// testing my ShowNavBar code

//document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("button").addEventListener("click", changeColors);
// });
//            
// function changeColors() {
//     var titleBg = document.getElementById("title");
//      console.log = ("the color is" + titleBg.style.background);
//
//     
//     if(titleBg.style.background === "pink"){
//         console.log = ("It is working");
//         titleBg.style.background = "lightblue";
//     }else{
//         console.log = ("It is still working");
//         titleBg.style.background = "pink";
//     }
// }




function initializeMap() {
//    var location = {lat:-20.097844,  lng:57.573276};
    var locations [
        ['ALU',  -20.097844,  57.573276, 'http://www.alueducation.com']
    ];
    var map =  new google.maps.Map(document.getElementById("map"),{
        zoom: 14,
        center: location
    });
    
//    var marker = new google.maps.Marker({
//        position: location,
//        map:map,
//        title: 'www.alueducation.com'
//    });
    
    var marker;
    var i;
    var infowindow = new google.maps.InfoWindow();
    
    for(i=0;i<locations.length;i++){
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map:map,
            url:locations[i][4]
        });
        
        google.maps.event.addListener(marker, 'mouseover',(function(marker, i) {return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
            }
        })(marker, i));
        
        google.maps.event.addListener(marker, 'click', (function(marker, i) {return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
            window.location.href = this.url;
            }
        })(marker, i));
    }
    
}



/////////////////////////////////////////////////////////////////////////


function initializeMap() {
    var location = {lat:-20.097844,  lng:57.573276};
    var map =  new google.maps.Map(document.getElementById("map"),{
        zoom: 14,
        center: location
    })
    
    var marker = new google.maps.Marker({
        position: location,
        map:map,
        title: 'www.alueducation.com'
    });
}






































