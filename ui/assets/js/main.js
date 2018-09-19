function validateForm() {
    var x = document.forms["myForm"]["Username"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});


