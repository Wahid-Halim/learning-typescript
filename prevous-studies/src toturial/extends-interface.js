"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    format() {
        return `This user has Id of ${this.id}`;
    },
};
const bill = {
    id: 293,
    server: "mario",
    amount: 1992,
    format() {
        return `Bill with this id ${this.id} has to pay ${this.amount}`;
    },
};
const printFormatted = (val) => {
    console.log(val.format());
};
const printBill = (bill) => {
    console.log(`server ${bill.server}`);
    console.log(bill.format());
};
printFormatted(user);
printFormatted(bill);
printBill(bill);
//# sourceMappingURL=extends-interface.js.map