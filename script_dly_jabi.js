
// //1
// for (let i=1; i<=5000; i++){
//         console.log(i)
// }

// //2
// let start=0
// let end=prompt()
// let sum=0
// while (start <= end){
//         if (start%5==0){
//                 sum+=start
//         }
//         start++
// }
// console.log(sum)

// //3
// const str='мир'

// const word1=str.split('').reverse().join('');
// console.log(word1);

// //4
// let word2=prompt('')
// let cloneword=word2
// if (cloneword==word2.split('').reverse().join('')){
//         console.log('Слово является палиндромом!')
// } else {
//         console.log('Слово не является палиндромом!')
// }

//Задача 5 *

let str1=prompt('')
let variable=str1.split('')
let value1= (+variable[0]) + (+variable[1]) + (+variable[2])
let value2= (+variable[3]) + (+variable[4]) + (+variable[5])
if (value1==value2) {
        console.log(value1,'=',value2)
} else {
        console.log(value1,'!=',value2)
}