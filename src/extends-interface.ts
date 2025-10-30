interface HasFormatter {
  format(): string;
}

interface Bill extends HasFormatter {
  id: string | number;
  server: string;
  amount: number;
}

const user = {
  id: 1,
  format(): string {
    return `This user has Id of ${this.id}`;
  },
};

const bill = {
  id: 293,
  server: "mario",
  amount: 1992,
  format(): string {
    return `Bill with this id ${this.id} has to pay ${this.amount}`;
  },
};

const printFormatted = (val: HasFormatter): void => {
  console.log(val.format());
};

const printBill = (bill: Bill): void => {
  console.log(`server ${bill.server}`);
  console.log(bill.format());
};

printFormatted(user);
printFormatted(bill);

printBill(bill);
