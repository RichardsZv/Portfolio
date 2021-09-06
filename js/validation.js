//FORM VALIDATION
function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Lūdzu ievadi vārdu");  
      return false;
    }
    var y = document.forms["myForm"]["message"].value;
    if (y == "") {
      alert("Lūdzu ievadi ziņas tekstu");
      return false;
    }
    var z = document.getElementById("number").value;
    if(isNaN(z) || z < 10 || z > 20){
        alert("Nav valīds skaitlis!", "z");
        return false;
    }
    alert("ziņa nosūtīta");
    return true;
}





