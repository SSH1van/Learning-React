/* Базовые типы */
let firstName: string = "Vik";
let age: number = 25;
let isOwner: boolean = true;

let profile: undefined = undefined;
let city: null | string = null;
let isHasEducation: unknown = null;
let university: any = 123;

console.log(firstName, age, isOwner);
profile = undefined;
city = "123";
isHasEducation = null;
university = "123";

/* Структура объекта */
const userProfile: {
  firstName: string;
  age: number;
  isOwner: boolean;
} = {
  firstName: "Vik",
  age: 25,
  isOwner: true,
};
