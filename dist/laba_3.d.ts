declare enum types_doc {
    Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    driver_license = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435"
}
declare enum types_car {
    hetch = "\u0445\u0435\u0442\u0447\u0431\u044D\u043A",
    universal = "\u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B"
}
declare enum clases_car {
    start = "start",
    standart = "\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442",
    premium = "\u043F\u0440\u0435\u043C\u0438\u0443\u043C",
    luxary = "\u043B\u0443\u0445\u0430\u0440\u0438",
    ultimate_plus_3000_gt_extra_sport = "\u0423\u043B\u0442\u0438\u043C\u0435\u0439\u0442 \u043F\u043B\u044E\u0441 300 \u0434\u0436\u0438\u0442\u0438 \u0435\u0445\u0442\u0440\u0430 \u0441\u043F\u043E\u0440\u0442"
}
interface IOwner {
    name: string;
    surname: string;
    birthDate: Date;
    type_doc: types_doc;
    series_doc: string;
    number_doc: string;
    ownerInfo: () => string;
}
interface Ivehicle {
    marka: string;
    model: string;
    years: string;
    vin_num: string;
    reg_num: string;
    vehicleInfo: () => string;
    owner: IOwner;
}
interface car extends Vehicle {
    types: types_car;
    class: clases_car;
}
declare class Vehicle implements Ivehicle {
    private _marka;
    private _model;
    private _years;
    private _vin_num;
    private _reg_num;
    private _owner;
    get owner(): IOwner;
    set owner(value: IOwner);
    get marka(): string;
    set marka(value: string);
    get model(): string;
    set model(value: string);
    get years(): string;
    set years(value: string);
    get vin_num(): string;
    set vin_num(value: string);
    get reg_num(): string;
    set reg_num(value: string);
    constructor(_marka: string, _model: string, _years: string, _vin_num: string, _reg_num: string);
    vehicleInfo(): string;
}
declare class Car extends Vehicle implements car {
    private _types;
    private _class;
    get types(): types_car;
    set types(value: types_car);
    get class(): clases_car;
    set class(value: clases_car);
    constructor(marka: string, model: string, years: string, vin_num: string, reg_num: string);
}
interface motorbike extends Vehicle {
    type_ram: string;
    for_sport: boolean;
}
declare class Motorbike extends Vehicle implements motorbike {
    private _type_ram;
    private _for_sport;
    get type_ram(): string;
    set type_ram(value: string);
    get for_sport(): boolean;
    set for_sport(value: boolean);
    constructor(marka: string, model: string, years: string, vin_num: string, reg_num: string);
}
declare class Owner implements IOwner {
    private _birthDate;
    private _name;
    private _surname;
    private _type_doc;
    private _series_doc;
    private _number_doc;
    get birthDate(): Date;
    set birthDate(value: Date);
    get name(): string;
    set name(value: string);
    get surname(): string;
    set surname(value: string);
    get type_doc(): types_doc;
    set type_doc(value: types_doc);
    get series_doc(): string;
    set series_doc(value: string);
    get number_doc(): string;
    set number_doc(value: string);
    constructor(birthDate: Date, name: string, surname: string, type_doc: types_doc, series_doc: string, number_doc: string);
    ownerInfo(): string;
}
interface IVehicleStorage<T extends Ivehicle> {
    created: Date;
    data: T[];
    getAll: () => T[];
    save(data: T): void;
    remove(index: number): void;
}
declare class VehicleStorage<T extends Ivehicle> implements IVehicleStorage<T> {
    private readonly _created;
    private _data;
    get created(): Date;
    get data(): T[];
    constructor();
    getAll(): T[];
    remove(index: number): void;
    save(data: T): void;
}
declare const dodg: car;
declare const camry: car;
declare const owner: IOwner;
declare const ural: motorbike;
declare const IW: motorbike;
declare const kia: Ivehicle;
declare const hunday: Ivehicle;
declare const carStorage: IVehicleStorage<car>;
declare const motoStorage: IVehicleStorage<motorbike>;
declare const vehicleStorage: IVehicleStorage<Ivehicle>;
