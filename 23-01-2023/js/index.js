let bg2 = () => {
    let element = document.querySelector("body");
    if (element.classList.contains("bg2")) {
      element.classList.remove("bg2");
    } else {
      element.classList.add("bg2");
    }
}

let Alert = () => {
    window.alert(5 + 6);
}
let log = () => {
    console.log(5 + 6);
}
// alert(5 + 6);

