"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logAndReturnValue = (val) => {
    console.log(val);
    return val;
};
const firstLog = logAndReturnValue(3);
const secondLog = logAndReturnValue("Hello");
const getRandomArrayValue = (values) => {
    const i = Math.floor(Math.random() * values.length);
    const value = values[i];
    if (value === undefined) {
        throw new Error("value is undefine");
    }
    return value;
};
const users = [
    { name: "ahamd", score: 10292 },
    { name: "faisal", score: 3993 },
];
const randomUser = getRandomArrayValue(users);
console.log(randomUser);
//# sourceMappingURL=generic-types.js.map