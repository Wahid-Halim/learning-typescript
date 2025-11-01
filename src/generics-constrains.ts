interface hasId {
  id: number;
}

class DataCollection<T extends hasId> {
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
  deleteOne(id: number) {
    this.data = this.data.filter((item) => id !== item.id);
  }
}

interface User {
  name: string;
  score: number;
  id: number;
}

const collection = new DataCollection<User>([
  { name: "khan", score: 39, id: 399 },
  { name: "ali", score: 93, id: 22 },
  { name: "omar", score: 339, id: 3922 },
]);

const loadOne = collection.loadOne();
console.log(loadOne);
