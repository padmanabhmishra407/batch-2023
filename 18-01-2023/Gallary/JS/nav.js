let btn = document.querySelectorAll("button");
let temp = (window.location.href).toString().split("/");
let test = temp[temp.length - 1];

if (test === "about.html") {
    btn[btn.length - 1].classList.add("under");
    btn[0].classList.remove("under");
} if(test === "Gallery.html") {
    btn[0].classList.add("under");
    btn[btn.length - 1].classList.remove("under");
}
