// enum Town {
//     MOSCOW = "Москва",
//     SAMARA = "Самара",
//     KEMEROVO = "Кемерово",
//     RIGA = "Рига",
//     NEW_YORK = "Нью-Йорк"
// }

// enum AnimalType {
//     DOG = 'Собака',
//     CAT = 'Кошка',
//     MOUSE = 'Мышь',
//     FISH = 'Рыба',
//     PARROT = 'Попугай',
//     MONKEY = 'Обезьяна',
//     RAT = 'Крыса',
//     HAMSTER = 'Хомяк'
// }

// interface IOwner {
//     name: string;
//     surname: string;
//     birthDate: Date;
//     ownerInfo: () => string;
// }

// interface IAnimal {
//     type: AnimalType,
//     name: string;
//     description: string;
//     town: Town;
//     animalInfo: () => string
//     owner: IOwner;
// }

// interface ICat extends Animal {
//     clawStatus: boolean;
//     voice: () => 'miyau'
// }

// interface IDog extends Animal {
//     carriesSlippers: boolean;
//     voice: () => 'gau-gaw-gav'
// }

// class Owner implements IOwner {
//     private _birthDate: Date;
//     private _name: string;
//     private _surname: string;

//     get birthDate(): Date {
//         return this._birthDate;
//     }

//     set birthDate(value: Date) {
//         this._birthDate = value;
//     }

//     get name(): string {
//         return this._name;
//     }

//     set name(value: string) {
//         this._name = value;
//     }

//     get surname(): string {
//         return this._surname;
//     }

//     set surname(value: string) {
//         this._surname = value;
//     }

//     constructor(birthDate: Date, name: string, surname: string) {
//         this._birthDate = birthDate;
//         this._name = name;
//         this._surname = surname;
//     }

//     ownerInfo(): string {
//         return 'name: ' + this._name + '\n surname: ' + this._surname + '\n type: ' + this.birthDate.toString();
//     }
// }

// class Animal implements IAnimal {
//     private _description: string;
//     private _name: string;
//     private _town: Town;
//     private _type: AnimalType;
//     private _owner: IOwner;

//     get owner(): IOwner {
//         return this._owner;
//     }

//     set owner(value: IOwner) {
//         this._owner = value;
//     }

//     get description(): string {
//         return this._description;
//     }

//     set description(value: string) {
//         this._description = value;
//     }

//     get name(): string {
//         return this._name;
//     }

//     set name(value: string) {
//         this._name = value;
//     }

//     get town(): Town {
//         return this._town;
//     }

//     set town(value: Town) {
//         this._town = value;
//     }

//     get type(): AnimalType {
//         return this._type;
//     }

//     set type(value: AnimalType) {
//         this._type = value;
//     }

//     constructor(description: string, name: string, town: Town, type: AnimalType) {
//         this._description = description;
//         this._name = name;
//         this._town = town;
//         this._type = type;
//     }

//     animalInfo(): string {
//         return 'description: ' + this._description + '\n name: ' + this._name + '\n type: ' + this._type + '\n town: ' + this._town;
//     }
// }

// class Dog extends Animal implements IDog {

//     private _carriesSlippers: boolean;

//     get carriesSlippers(): boolean {
//         return this._carriesSlippers;
//     }

//     set carriesSlippers(value: boolean) {
//         this._carriesSlippers = value;
//     }

//     constructor(description: string, name: string, town: Town) {
//         super(description, name, town, AnimalType.DOG);
//     }

//     voice(): "gau-gaw-gav" {
//         return "gau-gaw-gav";
//     }
// }

// class Cat extends Animal implements ICat {
//     get clawStatus(): boolean {
//         return this._clawStatus;
//     }

//     set clawStatus(value: boolean) {
//         this._clawStatus = value;
//     }

//     private _clawStatus: boolean;

//     constructor(description: string, name: string, town: Town) {
//         super(description, name, town, AnimalType.CAT);
//     }

//     voice(): "miyau" {
//         return "miyau";
//     }

// }

// interface IAnimalStorage<T extends IAnimal> {
//     created: Date;
//     data: T[];
//     getAll: () => T[];

//     save(data: T): void;

//     remove(index: number): void;
// }

// class AnimalStorage<T extends IAnimal> implements IAnimalStorage<T> {
//     private readonly _created: Date;
//     private _data: T[];

//     get created(): Date {
//         return this._created;
//     }

//     get data(): T[] {
//         return this._data;
//     }

//     constructor() {
//         this._created = new Date();
//         this._data = [];
//     }

//     getAll(): T[] {
//         return this.data;
//     }

//     remove(index: number): void {
//         this._data = this.data.splice(index, 1);
//     }

//     save(data: T): void {
//         this._data.push(data);
//     }
// }

// const dog: IDog = new Dog('Собака-кусака', 'Укусь', Town.KEMEROVO);
// const dog1: IDog = new Dog('Собака-кусака-2', 'Укусь-2', Town.MOSCOW);

// const owner: IOwner = new Owner(new Date(), 'Дмитрий', 'Дмитриев');

// dog.owner = owner;

// const cat: ICat = new Cat('Мяука-кусюка', 'Мяу-тяу', Town.RIGA);
// const cat1: ICat = new Cat('Мяука-кусюка-2', 'Мяу-тяу-2', Town.SAMARA);

// cat1.owner = owner;

// const fish: IAnimal = new Animal('Жабродышаший рыб', 'Барабулик', Town.KEMEROVO, AnimalType.FISH);
// const hamster: IAnimal = new Animal('Крутящий генератор', 'Хомячилла', Town.MOSCOW, AnimalType.HAMSTER);
// const parrot: IAnimal = new Animal('Пукни в пакетик', 'Приветик', Town.SAMARA, AnimalType.PARROT);
// const mouse: IAnimal = new Animal('Настало время захватить мир', 'Брэйн', Town.RIGA, AnimalType.MOUSE);
// const rat: IAnimal = new Animal('Для лидера нет никаких оправданий', 'Сплинтер', Town.NEW_YORK, AnimalType.RAT);
// const monkey: IAnimal = new Animal('Продавала кирпичи', 'Чичичи', Town.NEW_YORK, AnimalType.MONKEY);

// const catStorage: IAnimalStorage<ICat> = new AnimalStorage();
// catStorage.save(cat);
// catStorage.save(cat1);

// const dogStorage: IAnimalStorage<IDog> = new AnimalStorage();
// dogStorage.save(dog);
// dogStorage.save(dog1);

// const animalStorage: IAnimalStorage<IAnimal> = new AnimalStorage();
// animalStorage.save(dog);
// animalStorage.save(cat);
// animalStorage.save(fish);
// animalStorage.save(hamster);
// animalStorage.save(parrot);
// animalStorage.save(mouse);
// animalStorage.save(rat);
// animalStorage.save(monkey);

// console.log(catStorage.getAll());
// console.log(dogStorage.getAll());
// console.log(animalStorage.getAll());


