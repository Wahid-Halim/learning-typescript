"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swapIdType = (id) => {
    if (typeof id === "string") {
        return parseInt(id);
    }
    else {
        return id.toString();
    }
};
const idOne = swapIdType(1);
const idTwo = swapIdType("292");
console.log(idOne, idTwo);
const logDetails = (value) => {
    if (value.type === "user") {
        console.log(value.username);
    }
    if (value.type === "person") {
        console.log(value.firstName);
    }
};
console.log();
//# sourceMappingURL=type-guards.js.map