// Get elements class="column"
var elements = document.getElementsByClassName("column");
var elements2 = document.getElementsByClassName("row");
var i;
// One col
function one() {
    for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
    elements2[i].style.padding="2px 500px"; 
  }
};
// Two cols
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
    elements2[i].style.padding="0 100px"; 
  }
};
// Four cols
function four() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%"; 
  }
};


// BUTTON ACTIVE CLASS
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
};

// MODAL
var modal = document.getElementById('myModal');
var images= document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");

for (var j = 0; j < images.length; j++){
  var img = images[j];
  img.onclick = function(){
    modal.style.display = "block"; 
    modalImg.src = this.src; 
  }
}
// <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// close the modal
span.onclick = function() {
  modal.style.display = "none";
}