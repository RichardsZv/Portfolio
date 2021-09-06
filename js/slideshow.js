// SLIDESHOW for home page
var slideIndex = 0;
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; //display: none for all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"; //display: block for all slides with timeout 5sec
  setTimeout(showSlides, 5000); 
}
showSlides();