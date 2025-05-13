/* Массивыы и кортежи */
const numbers: number[] = [1, 2, 3, 4, 5];
const numbers2: Array<number> = [1, 2, 3, 4, 5];

const numbers3: [number, number] = [1, 2];
const numberString: [number, string] = [1, "2"];

/* Функции */
function getAge(name?: string): number {
  return name ? 30 : 25;
}

getAge("Vik");

const getAge2 = (name?: string): number => 25;

/* REST */
function getFullName(firstName: string, ...names: string[]): string {
  return firstName + " " + names.join(" ");
}

/* Функциональные перегрузки */
function getInfo(name: string): string;
function getInfo(age: number): number;
function getInfo(single: boolean): boolean;
function getInfo(value: any): any {
  return value;
}

const result1 = getInfo("123")
const result2 = getInfo(123)
