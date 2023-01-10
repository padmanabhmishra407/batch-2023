let age: number = 20;
if (age < 50)
    age += 10;
let sales = 123_456_789;
let cource: string = 'TypeScript';
let is_published: boolean = true;

let level;//any type

function render1 (doc){ //implicitly has 'any' type
    console.log(doc);
}

function render (doc: any){ // to avoid implicitly has 'any' type error. Or turn false "noImplicitAny": true, in the tsconfig.json file
    console.log(doc);
} 