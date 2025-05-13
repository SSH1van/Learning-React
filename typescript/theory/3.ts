/* Классы и типы */
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const CAT = new Animal("cat");

/* Интерфейсы */
interface IProfile extends IWork {
  name: string;
  age: number;
  isOwner: boolean;
}
interface IWork {
  place: string;
}

const profile2: IProfile = {} as IProfile;

/* Типы */
type TName = string | number;

type TProfile = {
  name: TName;
  age: number;
  isOwner: boolean;
} & TWork;
type TWork = {
  place: string;
};

const profile3: TProfile = {} as TProfile;
