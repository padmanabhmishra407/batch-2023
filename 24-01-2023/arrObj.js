let cars = {
    "color": "red",
    "type": "cabrio",
    "registration": new Date('2016-05-02'),
    "capacity": 2
}
let sizes = cars.map(car => {
    if (car.capacity <= 3) {
        return "small";
    }
    if (car.capacity <= 5) {
        return "medium";
    }
    return "large";
});
console.log(sizes);

let redCars = cars.filter(car => car.color === "red");
console.log(redCars);
let car = cars.find(car => car.color === "red");