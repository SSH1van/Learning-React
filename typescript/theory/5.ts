/* Utility types */
interface IProfile2 {
  name: string;
  age: number;
  isOwner: boolean;
}

const profile5: Pick<IProfile2, "name"> = {
  name: "123",
};

const profile4: Omit<IProfile2, "name"> = {
  age: 123,
  isOwner: true,
};

const profile6: Partial<IProfile2> = {};

// Все обязательны
const profile7: Required<IProfile2> = {
  name: "123",
  age: 123,
  isOwner: true,
};

// Только для чтения
const profile8: Readonly<Required<IProfile2>> = {
  name: "123",
  age: 123,
  isOwner: true,
};

// RECORD
const store: Record<string, number> = {
  BMW: 1000,
};

console.log(store["BMW"])