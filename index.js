
// code to show Navigation bar on small screen (<600px)

document.addEventListener('DOMContentLoaded', function () {
     document.getElementById("handle").addEventListener("click", showNavBar);
 });

function showNavBar(){

    var navBar = document.getElementById("nav_bar");
    
    if(navBar.style.visibility === "hidden"){
        navBar.style.visibility = "visible";
    } else {
        navBar.style.visibility = "hidden";
    }
}

//Typed.js animations

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed:100,
    loop: true
  });

