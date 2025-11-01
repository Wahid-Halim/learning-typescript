type Rgb = [number, number, number];

const createColor = (): Rgb => {
  const r = 101;
  const g = 92;
  const b = 122;
  return [r, g, b];
};

type User = {
  name: string;
  score: number;
};

const userOne: User = { name: "Ahmad", score: 292 };
const createUser = (user: User): void => {
  console.log(user.name);
};

createUser(userOne);
createUser({ score: 20, name: "kahn" });
