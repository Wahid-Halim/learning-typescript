const logAndReturnValue = <T>(val: T): T => {
  console.log(val);
  return val;
};

const firstLog = logAndReturnValue<number>(3);
const secondLog = logAndReturnValue<string>("Hello");

const getRandomArrayValue = <T>(values: T[]): T => {
  const i = Math.floor(Math.random() * values.length);
  const value = values[i];

  if (value === undefined) {
    throw new Error("value is undefine");
  }
  return value;
};

interface User {
  name: string;
  score: number;
}

const users: User[] = [
  { name: "ahamd", score: 10292 },
  { name: "faisal", score: 3993 },
];

const randomUser = getRandomArrayValue<User>(users);
console.log(randomUser);
