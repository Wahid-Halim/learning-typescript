"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataCollection {
    data;
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        const item = this.data[i];
        if (item === undefined) {
            throw new Error("Item now found");
        }
        return item;
    }
    loadAll() {
        return this.data;
    }
    add(item) {
        this.data.push(item);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter((item) => id !== item.id);
    }
}
const collection = new DataCollection([
    { name: "khan", score: 39, id: 399 },
    { name: "ali", score: 93, id: 22 },
    { name: "omar", score: 339, id: 3922 },
]);
const loadOne = collection.loadOne();
console.log(loadOne);
//# sourceMappingURL=generics-constrains.js.map