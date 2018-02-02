//Opening and closing sisde menu

function openNavBar() {
    document.getElementById("sideNav").style.width ="225px";
}

function closeNavBar() {
    document.getElementById("sideNav").style.width ="0";
}

//Particles.js

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
