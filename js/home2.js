//************** TYPED.JS ANIMATIONS ******************///

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed:100,
    loop: true
  });

//************** GOOGLE MAP ******************///

function initializeMap(){
    var location = {lat:-20.097844,  lng:57.573276};
    var map =  new google.maps.Map(document.getElementById("map"),{
        zoom: 14,
        center: location
    });
    
    var marker = new google.maps.Marker({
        position: location,
        map:map,
        title: 'www.alueducation.com'
    });
}


//**************OWL CAROUSEL******************///

$(document).ready(function(){
  $('.owl-carousel').owlCarousel(  );
});

//************** MATERIALIZE SCROLL ******************///

$(document).ready(function(){
    var carousel_interval = 2000;
    $('.carousel').carousel();
    var int;
    function run(){
        int = setInterval(function()
        { 
            $('.carousel').carousel('next');
        }, carousel_interval);
    }
    function stop(){
    clearInterval(int);
    }
    $('.carousel').hover(stop, run);     
    }); 

//************** SMOOTH SCROLL ******************///

$(function(){
 // Add smooth scrolling to all links
 $("a").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
     // Prevent default anchor click behavior
     event.preventDefault();

     // Store hash
     var hash = this.hash;

     // Using jQuery's animate() method to add smooth page scroll
     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
  
       // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
     });
   } // End if
 });
});

//************** VERTICAL TIMELINE ******************///

$(document).ready(function(){$('#myTimeline').verticalTimeline({
    startLeft: false,
    alternate: true,
    animate: "fade",
    arrows: false
});

//************** DIARY ******************///

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
