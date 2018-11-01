export class User {
    public name: string
    public age: number
    public sayHello() {
        let text: string = 'Hello, I am '
        text += this.name + ' and '
        text += this.age.toString() + ' years old.'
        console.log(text)
    }
}

const myUser = new User()
myUser.name = 'Goli'
myUser.age = 22
myUser.sayHello()