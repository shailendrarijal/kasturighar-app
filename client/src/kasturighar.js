// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnEmail = document.getElementById("email-icon-container");
var btnPhone = document.getElementById("phone-icon-container");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btnEmail.onclick = function() {
  modal.style.display = "block";
}
console.log("Hi there");
btnPhone.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}