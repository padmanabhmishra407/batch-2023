let From = document.getElementById("from");
let To = document.getElementById("to");
let Add = document.getElementById("add");
let List = document.getElementById("list");
// let combinationList = [];
// let temp = [];

const places = ['Agra', 'New Delhi', 'Mumbai', 'Rajasthan', 'Rishikesh', 'Varanasi', 'Amritsar', 'Goa', 'Kerala', 'Ajanta and Ellora Caves',]

places.forEach((item) => {
    From.innerHTML += `<option id='${item}_f'>${item}</option>`
    To.innerHTML += `<option id='${item}_t'>${item}</option>`
})

var selectedFrom = From.addEventListener("change", generateDataF);


var selectedTo = To.addEventListener("change", generateDataT);

let FromValue;
let ToValue;

function generateDataF() {
    FromValue = From.value;
    console.log(FromValue)
    disF()
}
function generateDataT() {
    ToValue = To.value;
    disT();
}
function disF() {
    let SelectedEleF = document.getElementById(`${FromValue}_f`);
    document.getElementById(`${FromValue}_t`).disabled = true;
    // console.log(SelectedEleF)
}
function disT() {
    let SelectedEleT = document.getElementById(`${ToValue}_t`);
    document.getElementById(`${ToValue}_f`).disabled = true;
    // console.log(SelectedEleT)
}
function AddToList() {
    if (FromValue && ToValue) {
        List.innerHTML += `<li> From ${FromValue} To ${ToValue}</li>`;
        // combinationList.push([FromValue, ToValue]);
        // combinationList.forEach(ele => {
        //     if (ele[0] === FromValue) {
        //         temp.push(ele);
        //     }
        // })
        console.log(combinationList, temp)
    } else {
        Add.innerText = "Empty input"
        setTimeout(() => {
            Add.innerText = "ADD"
        }, 1000)
    }
}