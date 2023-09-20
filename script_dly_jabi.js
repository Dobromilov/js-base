// это однострочный комментарий
// ! console.log('Привет жаба')

// диалоговое окно
// ! alert('Изучать жабу это офигенно')

//1
console.log('Существует достаточно много экранирующих последовательностей. \n Например последовательность "\n" делает перевод на новую строку!')

//2
let a=3
let h=6
let S=0.5*(a*h)
console.log(S)

//3
let text='Привет, мир!'
let text2=text.toUpperCase()
console.log(text2)

//4
// let variable=prompt()
// if (variable<10){
//         alert('введенное число меньше 10')
// } else if (variable==10){
//         alert('введенное равно 10')
// } else {
//         alert('введенное число больше 10')
// }

//5
let z=prompt()
let zxc=99
if (z>zxc){
        alert('error')
}
let x=4
let c=z/x
if (c%10!=0){
        alert('номер купе '+c)
} else {
        c=c-(c%10)+1
        alert('номер купе '+c)
}