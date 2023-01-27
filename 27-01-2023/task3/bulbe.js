
let B = document.getElementsByTagName("img")[0];
let toggle = document.getElementById("click");
function Light() {
    if (B.classList.contains("glow")) {
        B.classList.remove("glow");
        toggle.innerText = "ON"
    } else {
        B.classList.add("glow");
        toggle.innerText = "OFF"
    }
}



