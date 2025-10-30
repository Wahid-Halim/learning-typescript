// function signature
type Calculator = (numOne: number, numTwo: number) => number;

let calcs: Calculator[] = [];

const AddTwo = (n1: number, n2: number) => {
  return n1 + n2;
};

const multiplyTwo = (n1: number, n2: number) => {
  return n1 * n2;
};

const squareNumber = (n1: number) => {
  return n1 * n1;
};

const joinTwoNumbers = (n1: number, n2: number) => {
  return `${n1}${n2}`;
};

calcs.push(AddTwo);
calcs.push(multiplyTwo);
// calcs.push(joinTwoNumbers); trhow error
calcs.push(squareNumber);

// function signature on interface

interface hasArea {
  name: string;
  calcArea: (a: number) => number;
}

const shapeOne: hasArea = {
  name: "square",
  calcArea(length: number) {
    return length + length;
  },
};

const shapeTwo: hasArea = {
  name: "circle",
  calcArea(radius: number) {
    return (Math.PI * radius) ^ 2;
  },
};

shapeOne.calcArea(10);
// shapeTwo.calcArea('10') // error
