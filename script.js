function show(){
  var w = window.innerWidth;
  var navbar = document.getElementById('nav-part-id');
var navbutton = document.getElementById('navbutton0');
var navbutton1 = document.getElementById('navbutton1');
  if(w<=600){
navbar.style.display="flex";
  navbar.style.position="fixed";
  navbar.style.left="0";
  navbar.style.top="0";
  navbar.style.transition="2s";
  navbar.style.width="100vw";
  navbutton.style.display="none";
  navbutton.style.zIndex="2";
  navbutton.style.display="none";
  navbutton1.style.display="block";
  navbutton1.style.zIndex="2";  

  }
else{
  var navbar = document.getElementById('nav-part-id');
  navbutton.style.display="none";
  navbutton1.style.display="none";
  navbutton.style.display="none";
  navbar.style.flexDirection="row";
  navbar.style.backgroundColor="none";
  navbar.style.position="inherit"; 
}  
  
}
function closes(){  
  var w = window.innerWidth;
  var navbar = document.getElementById('nav-part-id');
var navbutton = document.getElementById('navbutton0');
var navbutton1 = document.getElementById('navbutton1');
  if(w<=600){
  navbar.style.display="none"
  navbutton.style.display="block";
  navbutton1.style.display="none"
  }
else{
  var navbar = document.getElementById('nav-part-id');
  navbutton.style.display="none";
  navbutton1.style.display="none";
  navbutton.style.display="none";
  navbar.style.flexDirection="row";
  navbar.style.backgroundColor="none";
  navbar.style.position="inherit";

}  
  
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}