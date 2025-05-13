/* Enum */
enum Colors {
  RED,
  GREEN,
  BLUE,
}

enum Tokens {
  accessToken,
  refreshToken,
}

const primary: Colors = Colors.GREEN;
const token: Tokens = Tokens.accessToken;

/* Утверждения (Assertions) */
const someValue: any = "12dsf432rfew";
const strLength: number = (someValue as string).length;

/* Обобщения (Generic) */
function getCar<T extends string>(name: T): T {
    return name
}

getCar("BMW")
