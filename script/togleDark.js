const toggleDarkButton = document.getElementById("toggle-dark-btn")


toggleDarkButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
})