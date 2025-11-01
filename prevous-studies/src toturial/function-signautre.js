"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let calcs = [];
const AddTwo = (n1, n2) => {
    return n1 + n2;
};
const multiplyTwo = (n1, n2) => {
    return n1 * n2;
};
const squareNumber = (n1) => {
    return n1 * n1;
};
const joinTwoNumbers = (n1, n2) => {
    return `${n1}${n2}`;
};
calcs.push(AddTwo);
calcs.push(multiplyTwo);
// calcs.push(joinTwoNumbers); trhow error
calcs.push(squareNumber);
const shapeOne = {
    name: "square",
    calcArea(length) {
        return length + length;
    },
};
const shapeTwo = {
    name: "circle",
    calcArea(radius) {
        return (Math.PI * radius) ^ 2;
    },
};
shapeOne.calcArea(10);
// shapeTwo.calcArea('10') // error
//# sourceMappingURL=function-signautre.js.map