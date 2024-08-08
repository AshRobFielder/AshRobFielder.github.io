// primatives: 
    // boolean
    // undefined - defined but never assigned
    // Null - lack of value
    // Number - only numeric (no integers)
    // string - sequence of characters
    // Symbol - 


// Obejcts = mix of pairs

// math operators: +, -, *, /

// best practice for {} braces. 

// function a()
// {
//     return 
//     {
//         name:"Fielder"
//     };
// }

// function b() {
//     return {
//         name: "Ash"
//     };
// }

// console.log(a());
// console.log(b());

// var company = new Object();
// company.name = "facebook";
// company.ceo = new Object();
// company.ceo.firstname = "mark";
// company.ceo.favcolor = "blue";

// console.log(company);
// console.log("company ceo name is: " + company.ceo.firstname);

// console.log(company["name"]);
// var StockPropName = "stock of company";
// company[StockPropName] = 110;

// console.log("stock price is: " +  company[StockPropName]);

// better way object literal

// var facebook = {
//     name: "Facebook",
//     CEO: {
//         firstname: "Mark",
//         FavColor: "Blue"
//     },
//     "stock of company": 110
// }

// console.log(facebook.CEO.firstname);

// function multiply(x, y) {
//     return x * y;
// }

// multiply.version = "v.1.0.0";
// console.log(multiply.version);

// function factory

// function makeMultiplyer(multiplier) {
//     var myFunc = function (x) {
//         return multiplier * x;
//     };

//     return myFunc;
// }

// var multiplyBy3 = makeMultiplyer(3);
// console.log(multiplyBy3(10));
// var doubleAll = makeMultiplyer(2);
// console.log(doubleAll(100));

// passing functions as arguments

// function doOperationsOn(x, operation) {
//     return operation(x);
// }

// var result = doOperationsOn(5, multiplyBy3);
// console.log(result);
// result = doOperationsOn(100, doubleAll);
// console.log(result);

// passing variables by value
// Primiarives are copied (Passed) by value
// Pbjects are copied (passed) by reference


// var a = 7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b = 5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);


// var a = { x:7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

// function changePrimitive(PrimValue) {
//     console.log("in changePrimitive...");
//     console.log("before");
//     console.log(PrimValue);

//     PrimValue = 5;
//     console.log("after:");
//     console.log(PrimValue);
// }

// var value = 7;
// changePrimitive(value);
// console.log("after changePrimitive, orig value:");
// console.log(value);

// function changeObject(OBJValue) {
//     console.log("in OBJvalue...");
//     console.log("before:");
//     console.log(OBJValue);

//     OBJValue.x = 5;
//     console.log("after:");
//     console.log(OBJValue);
// }

// value = { x: 7 };
// changeObject(value);
// console.log("after changeObject, orig value:");
// console.log(value);

// function Circle (radius) {
//     this.radius = radius;

// }

// Circle.prototype.getArea = 
//     function () {
//         return Math.PI * Math.pow(this.radius, 2);
//     }

// var myCircle = new Circle(10);
// console.log(myCircle);

// object literals and "this"

var literalCircle = {
radius: 10,
getArea: function () {
    var self = this;
console.log(this);

var increaseRadius = function () {
    self.radius = 20;
};
increaseRadius();
console.log(this.radius);

return Math.PI * Math.pow(this.radius, 2);
}
};

console.log(literalCircle.getArea());