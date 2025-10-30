// import { appendFileSync } from "fs";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = ("id" | "amount" | "to" | "notes")[];

class CSVWriter {
  private csv: string;

  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(",") + "\n";
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formatRow(v));
    this.csv += rows.join("\n");
    console.log(this.csv);
  }

  private formatRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(",");
  }
}

const write = new CSVWriter(["id", "amount", "to", "notes"]);
write.addRows([
  { id: 1, amount: 30, to: "rashid", notes: "for develop work" },
  { id: 4, amount: 130, to: "wahid", notes: "for creating web app" },
]);
