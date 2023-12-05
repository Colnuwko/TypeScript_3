/** Part 1 - START **/
/** Одномерные массивы */
let data = [-64, 0, 32, 0, -32, 0, 16, 0, -16, 0, 8, 0, -8, 0, 4, 0, -4, 0, 2, 0, -2, 0, 1, 0, -1, 0];
console.log(data);
function removeZeroElements(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 0) {
            data = data.splice(i, 1);
            i++;
            console.log(data);
        }
    }
    return data;
}
const preparedData = removeZeroElements(data);
console.log(preparedData);
/** Двумерные массивы */
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
const rotateMatrix = (matrix) => {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
};
const preparedMatrix = rotateMatrix(matrix);
console.log(preparedMatrix);
/** Part 1 - END **/
/** Part 2 - START **/
const tuple = ['Привет', 'Приветик'];
const showTuple = (tuple) => {
    return tuple[0] + ' ' + tuple[1];
};
console.log(showTuple(tuple));
/** Part 2 - END **/
/** Part 3 - START **/
var SomeEnum;
(function (SomeEnum) {
    SomeEnum["ELEM_1"] = "p0";
    SomeEnum[SomeEnum["ELEM_2"] = 1] = "ELEM_2";
    SomeEnum["ELEM_3"] = "a3";
})(SomeEnum || (SomeEnum = {}));
console.log(SomeEnum.ELEM_1, SomeEnum.ELEM_2, SomeEnum.ELEM_3);
/** Part 3 - END **/
/** Part 4 - START **/
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
const somePet = new Pet();
console.log(somePet.speak());
const someCat = new Cat();
console.log(someCat.speak());
const someDog = new Dog();
console.log(someDog.speak());
/** Part 4 - END **/ 
