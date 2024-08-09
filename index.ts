// Union Literals

type UserRole = "admin" | "user" | "guest";

type User = {
  id: number;
  name: string;
  role: UserRole;
};

const users: User[] = [
  { id: 1, name: "Felix", role: "admin" },
  { id: 2, name: "Karen", role: "admin" },
];

function addNewUser(user: User) {
  users.push(user);
}

function findUser(userId: number): User | undefined {
  return users.find((user) => user.id === userId);
}
addNewUser({ id: 3, name: "Enrique", role: "guest" });

console.log(users);

/* 
  Partials: utility type in typescript use to create a new object with all optional keys

  type User = {
    name?: string;
    role?: UserRole;
  };
*/

type UpdatedUser = Partial<User>;

function updateUser(userId: number, updatedUser: UpdatedUser) {
  const user = findUser(userId);
  if (user == null) {
    return;
  }

  Object.assign(user, updatedUser);
}

updateUser(1, { name: "Felix Armando" });

console.log("/// Partials results");
console.log(users);

/* 
  Omit: utility type in typescript use to create a new object with with specified keys removed
*/

function getSanitizedUser(userId: number): Omit<User, "id"> | undefined {
  return findUser(userId);
}

// NOTE: not the best example
console.log("/// Omit results");
console.log(getSanitizedUser(2));

/* 
  Generics: utility type in typescript use multiple type of data

*/

type Car = {
  model: "ferrari" | "lambo" | "bmw";
  year: number;
  color: string;
};

const cars: Car[] = [
  { color: "red", model: "ferrari", year: 2014 },
  { color: "blue", model: "lambo", year: 2003 },
  { color: "black", model: "bmw", year: 2016 },
];

function addItemToArray<T>(item: T, array: T[]) {
  array.push(item);
}

addItemToArray<Car>({ color: "red", model: "lambo", year: 2014 }, cars);
