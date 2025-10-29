type Id = number | string;

const swapIdType = (id: Id) => {
  if (typeof id === "string") {
    return parseInt(id);
  } else {
    return id.toString();
  }
};

const idOne = swapIdType(1);
const idTwo = swapIdType("292");
console.log(idOne, idTwo);

// interface example

interface User {
  type: "user";
  username: string;
  email: string;
  id: number;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: number;
}

const logDetails = (value: User | Person): void => {
  if (value.type === "user") {
    console.log(value.username);
  }
  if (value.type === "person") {
    console.log(value.firstName);
  }
};

console.log();
