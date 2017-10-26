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
