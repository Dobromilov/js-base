//  Создайте объект user, с полями ваше имя, 
// пол и дату рождения (name, gender, birthday)Выведите в консоль дату рождения
 
let i = {
    name:'Arteom',
    gender:'man',
    birthday: '15.08.06',
    pincode: ['2','3','4'],
    admin: {
        name: 'Dobromilov',
        id: 1
        }
 };
 i.game = 'dota 2'
 delete i.gender

//  for (key in player) {
//     // тело цикла выполняется для каждого свойства объекта
//     console.log(key) // Вывести ключи
//     }
//     // name isPremium level status

for (key in i) {
    console.log(i[key]) 
    }
    const playerClone1 = {...i} //...- это epread оператор
    console.log(playerClone1)

    /* {
    name: "Юля Варкрафтовна"
    isPremium: true
    level: 14
    } */

    const player = {
        name: "Юля Варкрафтовна",
        isPremium: true,
        level: 14,
        }
        const playerClone = {
        ...player,
        name: 'Просто Василий',
        age: 20,
        }
        console.log(playerClone)