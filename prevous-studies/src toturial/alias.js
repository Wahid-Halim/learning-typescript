"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createColor = () => {
    const r = 101;
    const g = 92;
    const b = 122;
    return [r, g, b];
};
const userOne = { name: "Ahmad", score: 292 };
const createUser = (user) => {
    console.log(user.name);
};
createUser(userOne);
createUser({ score: 20, name: "kahn" });
//# sourceMappingURL=alias.js.map