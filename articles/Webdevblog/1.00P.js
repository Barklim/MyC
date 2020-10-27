function Counter (counterElement) {
  const countElement = counterElement.querySelector('span')
  const buttonElement = counterElement.querySelector('button')

  let count = parseInt(countElement.textContent) || 0

  const counter = {
    updateCounter () {
      countElement.textContent = count
    },

    increaseCount: (event) => {
      count = count + 1
      counter.updateCounter()
    }
  }

  buttonElement.addEventListener('click', counter.increaseCount)
}

const counter = Counter(document.querySelector('.counter'))




// ---------- Использование функций конструктора ----------

console.log('%c%s','color: yellow; font: 1.2rem/1 Tahoma;','Использование функций конструктора')

function Human (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const chris = new Human('Chris', 'Coyier')
console.log(chris.firstName) // Chris
console.log(chris.lastName) // Coyier




// ---------- Синтаксис Class ----------

console.log('%c%s','color: yellow; font: 1.2rem/1 Tahoma;','Синтаксис Class')

class Human1 {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const chris1 = new Human1('Chris', 'Coyier')
console.log(chris1.firstName) // Chris
console.log(chris1.lastName) // Coyier




// ---------- Объекты, связанные с другими объектами  ----------

console.log('%c%s','color: yellow; font: 1.2rem/1 Tahoma;','Объекты, связанные с другими объектами')

const Human2 = {
  init (firstName, lastName ) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

const chris2 = Object.create(Human2)
chris2.init('Chris', 'Coyier')
console.log(chris2.firstName) // Chris
console.log(chris2.lastName) // Coyier




// ---------- Фабричные функции  ----------

console.log('%c%s','color: yellow; font: 1.2rem/1 Tahoma;','Фабричные функции')

function Human3 (firstName, lastName) {
  return {
    firstName,
    lastName
  }
}

const chris3 = Human3('Chris', 'Coyier')
console.log(chris3.firstName) // Chris
console.log(chris3.lastName) // Coyier