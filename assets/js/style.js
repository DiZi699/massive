const n = 10;
const array = Array.from(
    { length: n },
    () => Math.floor(Math.random() * 100) + 1
);
console.log("Масив:", array);
array.pop();
array.shift();
console.table(array);
console.log(array.length);
const array2 = [...array];
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i]);
    }
}
let multiply = 1;
for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
}
console.log(multiply);

const notNull = array.filter((a) => a !== 0);
console.log(notNull);
const sum = array.map((a) => a / 100);
console.log(sum);
const cube = array.map((a) => a ** 2);
array.forEach((a) => console.log(a));
const index = array.findIndex((a) => a === 100);
if (index !== -1) {
    array.splice(index, 1);
} else {
    console.log("Такого Індекса не існеує");
}
