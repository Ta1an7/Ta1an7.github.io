document.getElementById("yesButton").addEventListener("click", acceptInvitation);
document.getElementById("noButton").addEventListener("click", declineInvitation);

function acceptInvitation() {
  alert("Отлично! Жду нашей встречи!");
}

function declineInvitation() {
  var noButton = document.getElementById("noButton");
  var fontSize = parseInt(window.getComputedStyle(noButton).fontSize);
  if (fontSize > 8) {
    noButton.style.fontSize = (fontSize - 2) + "px";
  } else {
    noButton.style.display = "none";
  }
}
