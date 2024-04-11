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

// Добавлен код для перемещения гифки
var gifContainer = document.getElementById("gifContainer");
var isDragging = false;
var offsetX, offsetY;

gifContainer.addEventListener("mousedown", function(event) {
  isDragging = true;
  offsetX = event.clientX - gifContainer.getBoundingClientRect().left;
  offsetY = event.clientY - gifContainer.getBoundingClientRect().top;
});

document.addEventListener("mousemove", function(event) {
  if (isDragging) {
    gifContainer.style.left = (event.clientX - offsetX) + "px";
    gifContainer.style.top = (event.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", function() {
  isDragging = false;
});
