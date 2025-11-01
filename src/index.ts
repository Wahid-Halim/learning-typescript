class DataCollection<T> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    const item = this.data[i];
    if (item === undefined) {
      throw new Error("Item now found");
    }
    return item;
  }
  loadAll(): T[] {
    return this.data;
  }
  add(item: T): T[] {
    this.data.push(item);
    return this.data;
  }
}

interface User {
  name: string;
  score: number;
}

const collection = new DataCollection<User>([
  { name: "khan", score: 39 },
  { name: "ali", score: 93 },
  { name: "omar", score: 339 },
]);

const loadOne = collection.loadOne();
console.log(loadOne);
