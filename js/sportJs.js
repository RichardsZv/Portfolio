//LI element creation
var data = ["Kļūda etapā", "OK", "OK", "OK", "OK", "OK", "Kļūda ņemšanā", "Kļūda etapā", "OK", "Kļūda etapā", "Kļūda etapā + kļūda ņemšanā", "OK", "OK", "Kļūda etapā", "OK", "OK", "OK", "OK"];
var i = 0;
function function1() {
    var ol = document.getElementById("myList");
    var li = document.createElement("li");
    if(i<data.length){
        li.appendChild(document.createTextNode(data[i]));
        ol.appendChild(li);
        i++;
    }
    else{
        alert("Visi punkti analizeti:)");
    }
}