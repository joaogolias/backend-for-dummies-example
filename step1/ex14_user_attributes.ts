import { user } from './ex13_user'

console.log(user.name)
console.log(user.age)
console.log(user.isStudent)
user.sayHello()

console.log(user['name'])
console.log(user['age'])
console.log(user['isStudent'])
user['sayHello']()