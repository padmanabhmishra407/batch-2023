try {
    throw "myException";
} catch (e) {
    console.error(e);
}

//Promices
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
});

myPromise
    .then(
        console.log("error")
    )