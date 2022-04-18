const toggleDarkButton = document.getElementById("toggle-dark-btn")
const logoPlaceholder = document.getElementById("logo-placeholder")

let dark = true

toggleDarkButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");

    if (dark) {
        logoPlaceholder.innerHTML = `<img id="logo" src="./assets/tux_color.svg"/>`
        dark = !dark;
    } else {
        logoPlaceholder.innerHTML = `<img id="logo" src="./assets/tux_mono.svg"/>`
        dark = !dark;
    }
    console.log(dark)
})