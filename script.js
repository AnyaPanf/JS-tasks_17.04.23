// 1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. Выведите в консоль длину первого слова.
// let str = 'LIGHTCODE PROGRAMMING'
// let lgth = str.split(" ")[0]
// console.log(lgth.length - 1);

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.
// let str = 'Максимально УЖАСНО'
// let low = str.split(" ")[1]
// console.log(low.toLowerCase());

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.
// let str = 'максимально УЖАСНО'
// let upp = str.split(" ")[0]
// console.log(upp.toUpperCase());

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.
// let str = 'Максимально Ужасно'
// console.log(str.slice(5, 18));

// 5. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки
// let str = 'Максимально '
// let str2 = 'Ужасно'
// console.log(str.concat(str2));

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('Ужасно'));

// 7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"
// let str = 'Максимально Ужасно'
// let letter = 'а'
// if (str.indexOf(letter) === -1) {
//     console.log("встречается менее одного раза");
// } else {
//     console.log("встречается более 1 раза");
// }

//    8. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('а'));

//    9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.
// let str = 'Максимально Ужасно'
// console.log(str.indexOf('о'));
// console.log(str.lastIndexOf('о'));

// 10. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.
// let str = 'aaa bbb ccc'
// console.log(str.slice(4, 7));
// console.log(str.substr(4,3));
// console.log(str.substring(4,6));