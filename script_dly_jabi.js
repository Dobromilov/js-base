// Получаем объект body
const bodyElement = document.body

// Первый и последний дочерние элементы
const firstChildNode = bodyElement.firstChild
const lastChildNode = bodyElement.lastChild

console.log(firstChildNode)
console.log(lastChildNode)

// Коллекция childNodes содержит список всех детей, 
// включая текстовые узлы
const childNodes = bodyElement.childNodes
console.log(childNodes)


// Перебор - коллекции
for (let node of childNodes) {  //перебот каждой переменной в коллекции
	console.log(node)           // покажет все узлы из коллекции
}
/*
	Если мы сохраним ссылку на body.childNodes и добавим/удалим узлы в DOM, 
	то они появятся в сохранённой коллекции автоматически.
*/

/*
	DOM-коллекции и навигационные свойства, перечисленные далее, 
  доступны только для чтения.
	Мы не можем заменить один дочерний узел на другой, 
  просто написав childNodes[i] = 
	Для изменения DOM требуются другие методы.
*/
// Соседние и родительский узлы

const previousSiblingNode = bodyElement.previousSibling // предыдущий родственик
const nextSiblingNode = bodyElement.nextSibling // следующий родственик
const parentNode = bodyElement.parentNode // родитель

// Текстовый узел, т.к. перед body есть перевод строки
console.log(previousSiblingNode) 
// null т.к. после body ничего нет
console.log(nextSiblingNode)
// весь html документ, потому что это родительский узел
console.log(parentNode)

// Получаем коллекцию всех дочерних узлов
const childNodes1 = bodyElement.childNodes
console.log(childNodes1)

// Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement.children
console.log(bodyChildren)
/*
	В документе, возможено, есть ещё «какой-то HTML-код», 
	но на момент выполнения скрипта браузер ещё до него не дошёл.
	Поэтому следует размещать скрипт в самом конце документа
*/
