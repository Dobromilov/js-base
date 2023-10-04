
//1
for (let i=1; i<=5000; i++){
        console.log(i)
}

//2
let start=0
let end=prompt()
let sum=0
while (start <= end){
        if (start%5==0){
                sum+=start
        }
        start++
}
console.log(sum)

//3
const str='мир'

const word1=str.split('').reverse().join('');
console.log(word1);

//4
let word2=prompt('')
let cloneword=word2
if (cloneword==word2.split('').reverse().join('')){
        console.log('Слово является палиндромом!')
} else {
        console.log('Слово не является палиндромом!')
}

//Задача 5 *

//Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

//Входная строка 123321
//Пример результата:
//Да: 6 = 6

//Входная строка 111222
//Пример результата:
//Нет: 3 != 6
let str=prompt('')
let variable=str.split('')
if (variable[0]+variable[1]+variable[2]==variable[3]+variable[4]+variable[5]){
        console.log(variable[0]+variable[1]+variable[2],'=',variable[3]+variable[4]+variable[5])
} else {
        variable[0]+variable[1]+variable[2],'!=',variable[3]+variable[4]+variable[5]
}