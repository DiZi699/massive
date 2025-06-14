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
Ё;
