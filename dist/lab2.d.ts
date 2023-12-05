/** Part 1 - START **/
/** Одномерные массивы */
declare let data: number[];
declare function removeZeroElements(data: number[]): number[];
declare const preparedData: number[];
/** Двумерные массивы */
declare let matrix: number[][];
declare const rotateMatrix: (matrix: number[][]) => number[][];
declare const preparedMatrix: number[][];
/** Part 1 - END **/
/** Part 2 - START **/
declare const tuple: [string, string];
declare const showTuple: (tuple: [string, string]) => string;
/** Part 2 - END **/
/** Part 3 - START **/
declare enum SomeEnum {
    ELEM_1 = "p0",
    ELEM_2 = 1,
    ELEM_3 = "a3"
}
/** Part 3 - END **/
/** Part 4 - START **/
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare const somePet: Pet;
declare const someCat: Pet;
declare const someDog: Pet;
/** Part 4 - END **/ 
